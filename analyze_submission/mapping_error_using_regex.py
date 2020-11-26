import re

def error_checker(regex_str, error_str):
    err_regex = re.compile(regex_str, re.I)
    err_check = err_regex.search(error_str)
    return err_check


def error_to_solve(error_log):

    solve = ""
    if error_checker("[^\'\"]null", error_log) is not None:
        solve = "소스코드 실행 과정에 null 값이 존재"
    elif error_checker("encoding|encode", error_log) is not None:
        solve = "한글 혹은 특수문자가 깨짐. UTF-8로 인코딩 설정 필요"
    elif error_checker("no 'main'", error_log) is not None:
        solve = "'public static void main' 필요"
    elif error_checker("file|directory", error_log) is not None:
        solve = "file이나 directory 이름 확인"
    elif error_checker("nosuch|input|EOFError", error_log) is not None:
        solve = "잘못된 input 처리. input 으로 어떤 값을 넣었는 지 검토"
    elif error_checker("type|mismatch|value|(no attribute)|format|dereferenced"
                       "|defined|(not in)|keyerror|find|(not a statement)|valueerror", error_log) is not None:
        solve = "해당 변수 혹은 객체가 정상적으로 정의되었거나 타입에 맞게 쓰이는지 확인"
        #check the type, member var, or format of value (or return value)
    elif error_checker("memory|overflow|truncated|recursion", error_log) is not None:
        solve = "너무 많은 메모리 사용 (혹은 너무 많은 재귀)"
    elif error_checker("package|import|classdef", error_log) is not None:
        solve = "package 혹은 라이브러리 import가 정상적으로 되었는지 확인"
        #check imported packages or modules
    elif error_checker("index", error_log) is not None:
        solve = "index는 0부터 전체 size-1까지 가능"
    elif error_checker("expression|syntax|;", error_log) is not None:
        solve = "오타가 난 것이 아닌지 확인 (ex: ';', '{}', '()' ':')"
    elif error_checker("indent", error_log):
        solve = "들여쓰기(tap 혹은 space)가 알맞게 쓰여졌는 지 확인"
    elif error_checker("unboundlocal", error_log):
        solve = "python의 경우 전역변수를 사용할 때 사용 전 'global'로 선언 필요"
    elif error_checker("zero", error_log):
        solve = "python의 경우 0으로 숫자를 나누지 못함"
    elif error_checker("unreachable", error_log):
        solve = "ip 혹은 port 번호 확인"
    else:
        print(error_log)
    return solve
