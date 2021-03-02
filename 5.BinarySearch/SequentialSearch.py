#coding: utf-8

def sequential_search(n, target, array):
  #순차 탐색이란 특정데이터를 찾기위해서 앞에서부터 데이터를 하나씩 차례대로 확인하는 방법
  for i in range(n):
    # 찾고자하는(target)과 동일하다면 return
    if array[i] == target:
      return i + 1

#  아래부터는 입력을 위함

print("생성할 원소개수와 찾고자하는 문자열 입력(한칸띄우기)")
input_data = input().split()
n = int(input_data[0]) #원소갯수
target = input_data[1] #찾고 싶은 문자

print("원소 갯수만큼 문자열 입력하깅")
array = input().split()

print(sequential_search(n,target, array))
