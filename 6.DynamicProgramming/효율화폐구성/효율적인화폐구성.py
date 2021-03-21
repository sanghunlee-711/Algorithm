#coding: utf-8

n,m = map(int, input().split())

array = []
for i in range(n):
  array.append(int(input()))


#한번 계싼된 결과를 저장하기 위한 DP테이블 초기화

#특정 금액을 만들 수 있는 화폐구성이 가능하지 않다는 의미의 값
d = [10001]*(m+1)

# DP진행(Bottom UP)
d[0] = 0
for i in range(n):
  for j in range(array[i], m+1):
    if d[j - array[i]] != 10001:
      #(i-k)원을 만드는 방법 존재 시
      d[j] = min(d[j], d[j - array[i]]+1)
  
if d[m] == 10001:
  #m원 만드는 방법 없는 경우 -1 출력
  print(-1)

else:
  print(d[m])