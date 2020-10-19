import sys

import pymysql
from mapping_error_using_regex import error_to_solve
from mapping_wrong_answer import check_output, check_source_code_using_json

db = pymysql.connect(host='localhost', port=13306, user='root', password='rootpw', db='domjudge', charset='utf8')
cursor = db.cursor()

# submit_id = sys.argv[1]
submit_id = '18'
sql = '''

select l.name, j.result, s.probid from `submission` as s join `language` as l join `judging`
as j on s.submitid=j.submitid and s.langid = l.langid where s.submitid=%s

'''
cursor.execute(sql, submit_id)
submission_data = cursor.fetchall()[0]

lang = submission_data[0]
error_type = submission_data[1]
prob_id = submission_data[2]

if error_type == 'run-error':
    sql = '''
            select j.submitid, jr.output_error from judging as j join judging_run as jr
            on j.judgingid = jr.judgingid where j.submitid=%s and jr.runresult="run-error";
            '''
    cursor.execute(sql, submit_id)
    run_data = cursor.fetchall()

    detailed_error = run_data[0][1].decode().strip().split("\n")
    run_error_msg = ""

    if lang == "Java":
        run_error_msg = detailed_error[0]
    elif lang == "Python 3":
        run_error_msg = detailed_error[-1]

    solve = error_to_solve(run_error_msg)
    print(solve)

elif error_type == 'compiler-error':
    sql = '''select submitid, output_compile from judging where submitid=%s;'''

    cursor.execute(sql, submit_id)
    compile_data = cursor.fetchall()

    detailed_error = compile_data[0][1].decode().strip().split("\n")

    compile_error_msg = ""
    if lang == "Java":
        compile_error_msg = detailed_error[1]
    else:
        compile_error_msg = detailed_error[-1]
    solve = error_to_solve(compile_error_msg)
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

else:
    print(error_type)

db.close()

