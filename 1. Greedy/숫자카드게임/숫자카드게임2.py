n,m = map(int, input().split())

result = 0

for i in range(n):
  data = list(map(int, input().split()))

  min_value = 10001
  for a in data:
    min_value = min(min_value, a)
    #min_value와 a중 작은 값이 return
  
  result = max(result, min_value)

print(result)