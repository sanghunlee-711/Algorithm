# coding: utf-8
#전형적인 파라메트릭서치 문제라고 한다
# Parametric search: 최적화문제를 결정문제(yes or no)로 바꾸어 해결하는 기법이다. -> 주로 가장 알맞은 값을 찾는 문제에 사용된다.

n,m = map(int, input().split())

array = list(map(int, input().split()))


start = 0
end = max(array)

#이진탐색 수행
result = 0

while(start <= end):
  total = 0
  mid = (start + end) //2
  for x in array:
    #잘랐을 때의 떡의 양 계산
    if x > mid:
      total += (x - mid)
  #떡의 양이 부족한 경우 더 많이 자르기(왼쪽부분 탐색)
  if total < m:
    end = mid -1
  #떡의 양이 충분한 경우 덜 자르기(오른쪽 부분 탐색)
  else:
    result = mid # 최대한 덜 짤랏을 때가 정답이니 result 기록
    start = mid + 1

print(result)