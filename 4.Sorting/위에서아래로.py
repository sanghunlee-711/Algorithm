#coding: utf-8
#수열을 내림차순으로 정렬하는 프로그램 만들기

n = int(input())

array = []
for i in range(n):
  array.append(int(input()))

# 파이썬 기본정렬 라이브러리 사용..
array = sorted(array, reverse = True)

for i in array:
  print(i)