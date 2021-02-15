# coding: utf-8

def recursive_function(i):
  print("재귀함수 호출")
  if i == 10:
    return
  print(i, "i번째 재귀함수에서", i + 1 ,"번째 재귀함수 호출")
  recursive_function(i + 1)

recursive_function(1)


#컴퓨터 내부에서 재귀함수 호출 시 스택 자료구조를 이용한다. -> 재귀함수는 내부적으로 스택자료구조와 동일하다는것만 기억하자
# 함수호출이 계속 되었을 때 가장 마지막에 호출한 함수가 먼저 수행을 끝내야 그 앞의 함수호출이 종료되기 때문