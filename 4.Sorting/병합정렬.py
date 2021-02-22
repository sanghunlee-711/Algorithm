#coding: utf-8
#파이썬의 slice notation(arr[start:end])를 사용한 예제
# 리스트 slice시 배열의 복제가 일어나므로 메모리 사용 효율은 좋지않다고 한다.

def merge_sort(arr):
  if len(arr) < 2:
    return arr
  #배열의 크기가 2 미만이면 병합정렬을 실행할 수 없음

  mid = len(arr) // 2
  # 배열을 나눌 중간값 구하기
  low_arr = merge_sort(arr[:mid])
  #중간index기준보다 작은index들의 배열을 만들어 low_arr에 할당 
  high_arr = merge_sort(arr[mid:])

  merged_arr = []

  l = h = 0

  while l < len(low_arr) and h < len(high_arr):
    if low_arr[l] < high_arr[h]:
      merged_arr.append(low_arr[l])
      l += 1
    else:
      merged_arr.append(high_arr[h])
      h += 1
  merged_arr += low_arr[l:]
  merged_arr += high_arr[h:]

  return merged_arr
