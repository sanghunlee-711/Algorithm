#coding: utf-8

#가장 직관적인 형태의 퀵 정렬 소스코드
array = [5,7,9,0,3,1,6,2,4,8]

def quick_sort(array, start, end):
  if start >= end: #원소가 1개인 경우 종료
    return
  pivot = start #피벗은 첫번째 원소
  left = start +1
  right = end
  while left <= right:
    #피벗보다 큰 데이터를  찾을 때 까지 반복
    while left <= end and array[left] <= array[pivot]:
      left += 1
    #피벗 보다  작은데이터를 찾을 때 까지 반복
    while right > start and array[right] >= array[pivot]:
      right -= 1
    
    if left > right: #엇갈릴때 작은데이터와 피벗을 교체
      array[right], array[pivot] = array[pivot], array[right]
    else:
      #엇갈리지 않았다면 작은데이터와 큰 데이터를 교체
      array[left], array[right] = array[right], array[left]

  #분할 이후 왼쪽부분과 오ㅡㄴ쪽 부분에서 각 각 정렬 수행
  quick_sort(array, start, right -1)
  quick_sort(array, right + 1 ,end)

#결과값 출력
quick_sort(array, 0 , len(array) -1)
print(array)
    