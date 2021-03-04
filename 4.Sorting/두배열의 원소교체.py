#coding: utf-8

# 바꿔치기 연산: 배열 A에 있는 원소 하나와 배열B에 있는 원소 하나를 골라서 두 원소를 서로 바꾸는 것을 말한다.

n,k = map(int, input().split())

# a,b 배열을 입력받음
a = list(map(int, input().split()))
b = list(map(int, input().split()))

# a배열의 오름차순 정렬
a.sort() 
# b배열의 내림차순 정렬
b.sort(reverse=True)

for i in range(k):
  if(a[i] < b[i]):
    a[i],b[i] = b[i], a[i]
  else:
    break

print(sum(a))