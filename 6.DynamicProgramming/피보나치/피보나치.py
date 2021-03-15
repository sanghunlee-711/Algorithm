#coding: utf-8

def fibo(x):
  if x == 1 or x ==2:
    return 1
  return fibo(x-1) + fibo (x-2)

print(fibo(4))
# //이렇게 작성하면 x의 값이 커지면 커질 수록 수행시간이 기하급수적으로 늘어난다.
