import re
from python_checker import evaluate_using_json_data, dict_total_data
import subprocess
import json

# submitid, testcaseid, runresult, output_run, output

solve = ""

def check_output(lists):

    for error_data in lists:
        if check_output_using_regex(error_data):
            return "output 형태가 잘못되었습니다.\n답 이외에 필요없는 것들을 print 했을 수도 있습니다."

    return ""


def check_output_using_regex(data):
    error_res = data[3].decode().strip()
    correct_res = data[4].decode().strip()

    regex_list = [
        '[0-9]|inf|Inf|INF',
        '[a-z]^[inf]^[Inf]^[INF]',
        '[A-Z]^[Inf]^[Inf]^[INF]',
        '[=#/\?:^$.@*\"※~&%ㆍ』\\‘|\(\)\[\]\<\>`\'…》]'
    ]

    for rex in regex_list:
        check = re.compile(rex)
        if check.search(error_res) is None and check.search(correct_res):
            return True
        elif check.search(error_res) and check.search(correct_res) is None:
            return True

        first_error_res = error_res.split("\n")[0]
        first_correct_res = correct_res.split("\n")[0]

        if check.search(first_error_res) and check.search(first_correct_res):
            return True
        elif check.search(first_error_res) and check.search(first_correct_res):
            return True

    return False


def check_source_code_using_json(source_code, lang, probid) :

    if lang == 'Java' :
        wrong_source_code = source_code.split("\n")
        f = open("testJava.java", "w")

        for code in wrong_source_code :
            f.write(code+"\n")
        f.close()

        proc = subprocess.check_output(["java", "-jar", "JavaCounter.jar", "testJava.java"])
        cur_data = proc.decode().strip()
        cur_data = json.loads(cur_data)

        with open("java_json.json") as json_file:
            total_json_data = json.load(json_file)

        if total_json_data  == None or probid not in total_json_data :
            return "아직 푼 사람이 없습니다."

        total_json_data = total_json_data[probid]
        json_file.close()

    elif lang == 'Python 3' :
        cur_data = dict_total_data(source_code)
        with open("python_json.json") as json_file:
            total_json_data = json.load(json_file)

        if total_json_data == None or probid not in total_json_data :
            return "아직 푼 사람이 없습니다."

        total_json_data = total_json_data[probid]
        json_file.close()

    else :
        return None

    return evaluate_using_json_data(cur_data, total_json_data)









