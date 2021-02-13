# coding: utf-8

n,k = 25,5
result = 0
while True:
  # N == k 로 나누어떨어질 수 
  target = (n//k)*k
  result += (n- target)
  n = target
  # N 이 K보다 작을 때(더 이상 나눌 수 없을 때) 반복문 탈 출!
  if n < k:
    break
  result += 1
  n //= k

result += (n - 1)
print(result)