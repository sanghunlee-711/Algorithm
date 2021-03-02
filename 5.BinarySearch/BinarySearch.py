#coding: utf-8

def binary_search(array, target, start, end):
  if start > end:
    return None
  
  #mid는 중간점을 의미
  mid = (start+end)//2
  #찾은경우 중간점 인덱스 반환

  if array[mid] == target:
    return mid
  
  #중간점의 값보다 찾고자하는 값이 작은경우 왼쪽 확인
  elif array[mid] > target:
    return binary_search(array, target, start, mid-1) #end지점에 중간값 -1 을 넣음으로써 자료 갯수가 반으로 줄어듦

  else:
    return binary_search(array, target, mid+1, end)


#전체 원소 입력받기

n, target =list(map(int, input().split()))

array = list(map(int, input().split()))

#이진 탐색 수행결과 출력
result = binary_search(array, target, 0, n-1)
if result == None:
  print("원소 없다..")
else:
  print(result+1) #인덱스