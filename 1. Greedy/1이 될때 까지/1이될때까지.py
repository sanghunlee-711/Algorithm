# coding: utf-8

# 일단.. 1번 또는 2번을 실행할 수 있게 해야하는데 두과정중 하나만 반복이 가능
# 1을빼서 1로만들거나 k로 나누어서 1로만들거나 둘중하나인데 
# 1. 나누기가 되면 나누기를 실행 -> 나누기가 안될때 -1 -> 다시 나누기 실행 -> 안되면 -1 되면 나누기!

n,k = 25, 5
result = 0
while n >= k:
  while n % k != 0:
    n -= 1
    result += 1
  
  n = n // k
  result += 1

while n > 1:
  n -= 1
  result += 1

print(result)