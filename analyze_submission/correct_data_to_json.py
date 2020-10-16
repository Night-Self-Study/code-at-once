import pymysql
import subprocess
from python_checker import dict_total_data
import json


def get_average_data(total_dict_data, count_dict_data, submission_data):

    for key in total_dict_data:
        if count_dict_data[key] > 0 :
            total_dict_data[key] = total_dict_data[key]/count_dict_data[key]

    for key in count_dict_data:
        count_dict_data[key] = count_dict_data[key] / len(submission_data)

    return count_dict_data, total_dict_data


def count_total_data(dict_data, total_dict_data, count_dict_data):
    for key in dict_data:
        if key in total_dict_data:
            total_dict_data[key] = total_dict_data[key] + dict_data[key]
        else:
            total_dict_data[key] = dict_data[key]

        if key not in count_dict_data:
            if dict_data[key] > 0:
                count_dict_data[key] = 1
            else:
                count_dict_data[key] = 0
        elif dict_data[key] > 0:
            count_dict_data[key] = count_dict_data[key] + 1


def get_data_in_java(cursor, problem_num):
    sql = '''

        select s.submitid, j.result from `submission` as s join `language` as l join `judging`
        as j on s.submitid=j.submitid and s.langid = l.langid
        and j.result="correct" and l.name = "java" and s.probid = ''' + problem_num + ''' order by s.probid

        '''
    cursor.execute(sql)
    submission_data = cursor.fetchall()

    if len(submission_data) == 0:
        return None, None

    total_dict_data = {}
    count_dict_data = {}
    for submit in submission_data:
        submit_id = submit[0]

        code_sql = '''
                select sourcecode from submission_file where submitid=%s;
            '''
        cursor.execute(code_sql, submit_id)
        correct_source_code = cursor.fetchall()[0][0].decode()

        correct_source_code = correct_source_code.split("\n")
        f = open("testJava.java", "w")

        for code in correct_source_code:
            f.write(code + "\n")
        f.close()

        proc = subprocess.check_output(
            ["java", "-jar", "JavaCounter.jar",
             "/home/oem/Desktop/testJava.java"])

        json_data = proc.decode().strip()
        dict_data = json.loads(json_data)

        count_total_data(dict_data, total_dict_data, count_dict_data)

    count_dict_data, total_dict_data = get_average_data(total_dict_data, count_dict_data, submission_data)
    return count_dict_data, total_dict_data


def get_data_in_python(cursor, problem_num):
    sql = '''

            select s.submitid, j.result from `submission` as s join `language` as l join `judging`
            as j on s.submitid=j.submitid and s.langid = l.langid
            and j.result="correct" and l.name = "Python 3" and s.probid = ''' + problem_num + ''' order by s.probid

            '''
    cursor.execute(sql)
    submission_data = cursor.fetchall()

    if len(submission_data) == 0:
        return None, None

    total_dict_data = {}
    count_dict_data = {}

    for submit in submission_data:
        submit_id = submit[0]

        code_sql = '''
                    select sourcecode from submission_file where submitid=%s;
                '''
        cursor.execute(code_sql, submit_id)
        correct_source_code = cursor.fetchall()[0][0].decode()

        dict_data = dict_total_data(correct_source_code)
        count_total_data(dict_data, total_dict_data, count_dict_data)

    count_dict_data, total_dict_data = get_average_data(total_dict_data, count_dict_data, submission_data)
    return count_dict_data, total_dict_data


db = pymysql.connect(host='localhost', port=13306, user='root', password='rootpw', db='domjudge', charset='utf8')
cursor = db.cursor()

java_json = ""
python_json = ""

sql = '''select count(probid) from problem;'''
cursor.execute(sql)
submission_data = cursor.fetchone()[0]

for i in range(1, submission_data):
    # get all the correct submissions of one problem

    count_java_dict, java_dict = get_data_in_java(cursor, str(i))
    count_data_json = json.dumps(count_java_dict)
    sum_data_json = json.dumps(java_dict)

    if sum_data_json is not "null":
        java_json = java_json + "\"" + str(
            i) + "\" : { \"count\" : " + count_data_json + ", \"sum\" : " + sum_data_json + " }, \n"

    count_python_dict, python_dict = get_data_in_python(cursor, str(i))
    count_data_json = json.dumps(count_python_dict)
    sum_data_json = json.dumps(python_dict)

    if sum_data_json is not "null":
        python_json = python_json + "\"" + str(
            i) + "\" : { \"count\" : " + count_data_json + ", \"sum\" : " + sum_data_json + " }, \n"

if java_json != "" :
    java_json = "{ " + java_json[:-3] + " }"
    f = open("java_json.json", "w")
    java_json_array = java_json.split("\n")

    for data in java_json_array:
        f.write(data + "\n")
    f.close()

if python_json != "" :
    python_json = "{ "+python_json[:-3] + " }"
    f = open("python_json.json", "w")
    python_json_array = python_json.split("\n")

    for data in python_json_array:
        f.write(data + "\n")
    f.close()

print("finish")
