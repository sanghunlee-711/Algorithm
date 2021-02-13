# coding: utf-8

# n,m = map(int, input().split())
n,m = 3, 3
data = [[3,1,2],[4,1,4],[2,2,2]]

for i in range
result = 0
for i in range(n):
  # data = list(map(int, input().split()))
  # data = [3,1,2,4,1,4,2,2,2]
  # 현재 줄에서 가장 작은 수 찾기!

  min_value = min(data)

  result = max(result, min_value)

print(result)