#coding: utf-8
#계수정렬을 이용하여 모든 원소의 번호를 포함할 수 있는 크기의 리스트를 만든 뒤에, 리스트의 인덱스에 직접 접근 하여 특정한 번호의 부품이 매장에 존재하는지 확인

n = int(input())
array = [0]*1000001

#가게에 있는 전체부품 번호를 입력받아서 array에 기록
for i in input().split():
  array[int(i)] = 1

#손님 요청
m = int(input())
x = list(map(int, input().split()))

#손님 요청 확인

for i in x:
  if array[i] == 1:
    print("yes")
  else:
    print("no")