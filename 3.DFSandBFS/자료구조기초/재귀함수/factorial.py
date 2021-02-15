#coding: utf-8


# 1. 반복문을 이용한 팩토리얼 구현 방법
def factorial_iterative(n):
  result = 1
  #1부터 n까지의 수 차례대로 곱하기
  for i in range(1, n+1):
    result *= i
  return result

def factorial_recursive(n):
  #n이 1 이하인 경우 1을 반환
  if n <= 1:
    return 1
  
  #n! = n*(n-1)!이므로 있는 그대로 코드를 써보자
  return n * factorial_recursive(n-1)


print(factorial_iterative(5))
print(factorial_recursive(5))