# -*- coding: utf-8 -*- 

# #N,M,K를 공백 구분하여 입력받기
# n, m, k = map(int, input().split())
# #N개의 수를 공백으로 구분하여 입력받기
# data = list(map(int, input().split()))

n, m, k = 5,8,3
data = [2,4,5,4,6]

data.sort() #입력받은 수 정렬하기
first = data[n-1] # 가장 큰 수
second = data[n-2] # 두번째로 큰 수

result = 0

while True:
    for i in range(k): #가장 큰 수를 k번만큼 더 하는 로직
        if m == 0: # m이 0이라면 반복문 탈출
            break
        result += first
        m -= 1 #더할때 마다 1씩 빼
    if m == 0: # m이 0 이면 반복문 탈출
        break
    result += second #두번째로 큰수를 한번 더하기
    m -= 1 #더할 때 마다 1씩 빼기

print(result)
print("Hello")