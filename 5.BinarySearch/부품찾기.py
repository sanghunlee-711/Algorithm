#coding: utf-8

def binary_search(array, target, start, end):
  while start <= end:
    mid = (start+end)//2

    ##찾은 경우 중간인덱스 반환
    if array[mid] == target:
      return mid

    #중간점의 값보다 찾고자 하는 값이 적은 경우 왼쪽확인
    elif array[mid] > target:
      end = mid-1
    
    #중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
    else:
      start = mid + 1
    return None

#N: 가게의 부품개수 입력
n = int(input())
array = list(map(int, input().split()))
array.sort() #이진탐색 수행을 위해 미리 정렬 수행

# 손님확인 요청한 부품의 개수
m = int(input())
# 손님확인 요청한 부품번호를 공백으로 입력받기
x = list(map(int, input().split()))


#손님 요청 전체 부품 번호를 하나 씩 확인
for i in x:
  result = binary_search(array, i, 0 , n-1)
  if result != None:
    print('yes')
  else:
    print('no')