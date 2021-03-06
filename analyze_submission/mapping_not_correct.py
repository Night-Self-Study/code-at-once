import sys
import subprocess
import pymysql
import time
from mapping_error_using_regex import error_to_solve
from mapping_wrong_answer import check_output, check_source_code_using_json
import polling2

def submit_data(cursor, sql, submit_id):
    cursor.execute(sql, submit_id)
    fet = cursor.fetchall()

    if len(fet)==1 and len(fet[0])==3 and fet[0][1] is not None:
        return fet

db = pymysql.connect(host='localhost', port=13306, user='root', password='rootpw', db='domjudge', charset='utf8', autocommit=True)
cursor = db.cursor()
#time.sleep(7)
submit_id = sys.argv[1]
#submit_id = '18'
sql = '''

select l.name, j.result, s.probid from `submission` as s join `language` as l join `judging`
as j on s.submitid=j.submitid and s.langid = l.langid where s.submitid=%s

'''

db_handle = polling2.poll(
        lambda: submit_data(cursor, sql, submit_id),
        step=1,
        timeout=60
)

submission_data = db_handle[0]
#time.sleep(7)
lang = submission_data[0]
error_type = submission_data[1]
prob_id = submission_data[2]

print(error_type)

if error_type == 'run-error':
    sql = '''
            select j.submitid, jro.output_error from judging as j join judging_run as jr
            join judging_run_output as jro
            on j.judgingid = jr.judgingid and jr.runid=jro.runid where j.submitid=%s and jr.runresult="run-error";
            '''
    cursor.execute(sql, submit_id)
    run_data = cursor.fetchall()[0][1].decode().strip()

    detailed_error = run_data.split("\n")
    run_error_msg = ""

    if lang == "Java":
        run_error_msg = detailed_error[0]
    elif lang == "Python 3":
        run_error_msg = detailed_error[-1]

    solve = error_to_solve(run_error_msg)
    print(run_data)
    print(solve)

elif error_type == 'compiler-error':
    sql = '''select submitid, output_compile from judging where submitid=%s;'''

    cursor.execute(sql, submit_id)
    compile_data = cursor.fetchall()[0][1].decode().strip()

    detailed_error = compile_data.split("\n")

    compile_error_msg = ""
    if lang == "Java":
        compile_error_msg = detailed_error[1]
    else:
        compile_error_msg = detailed_error[-1]
    solve = error_to_solve(compile_error_msg)
    print(compile_data)
    print(solve)

elif error_type == 'wrong-answer':
    sql = '''
        select j.submitid, t.testcaseid, jr.runresult, jro.output_run, t.output
        from `judging` as j join `judging_run` as jr on j.judgingid = jr.judgingid
        join `testcase_content` as t on jr.testcaseid=t.testcaseid join `judging_run_output` as jro on jro.runid=jr.runid
        where j.submitid=%s and jr.runresult!="timelimit"
    '''
    cursor.execute(sql, submit_id)
    wrong_answer_data = cursor.fetchall()
    solve = check_output(wrong_answer_data)

    if solve:
        print(solve)

    else:
        sql = '''select sourcecode from submission_file where submitid=%s'''
        cursor.execute(sql, submit_id)
        wrong_source_code = cursor.fetchall()

        solve = check_source_code_using_json(wrong_source_code[0][0].decode(), lang, str(prob_id))
        print(solve)

elif error_type == 'correct' :
    print("correct!")
    #subprocess.call(["python3", "correct_data_to_json.py"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

elif error_type == 'no-output' :
    print("output이 없습니다")

elif error_type == 'timelimit' :
    print("시간이 초과되었습니다")

db.close()

