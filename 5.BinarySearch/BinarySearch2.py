#coding: utf-8

def binary_search(array, target, start, end):
  while start <= end:
    mid = (start+end)//2

    if array[mid] == target:
      return mid
    
    #중간점의 값보다 찾고자 하는 값이 적은경우 왼쪽 확인
    elif array[mid]> target:
      end = mid -1
    
    else:
      start = mid +1
  return None


  #전체 원소 입력받기

n, target =list(map(int, input().split()))

array = list(map(int, input().split()))

#이진 탐색 수행결과 출력
result = binary_search(array, target, 0, n-1)
if result == None:
  print("원소 없다..")
else:
  print(result+1) #인덱스