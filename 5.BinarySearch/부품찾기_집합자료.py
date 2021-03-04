#coding: utf-8
#집합자료형(중복허용x, 순서x->인덱싱하고싶으면 튜플이나 list)을 활용하여 간단하게 검사하는 방법

n = int(input())
array = set(map(int ,input().split()))

m = int(input())
x= list(map(int, input().split()))

for i in x:
  if i in array:
    print("yes")
  else:
    print("no")