#coding: utf-8

# 조건 4가지 나누기 5 | 3 | 2 | -1

x = input()

d =[0]*30001 # memoization

# DP bottom up

for i in range(2, x+1):
  d[i] = d[i-1] + 1

  if i % 2 == 0:
    #2로 나누어 떨어지는 경우
    d[i] = min(d[i], d[i//2]+1)
  
  if i % 3 == 0:
    #3으로 나누어 떨어지는 경우
    d[i] = min(d[i], d[i//3]+1)

  if i%5 ==0:
    d[i] = min(d[i],d[i//5] + 1)

print(d[x])