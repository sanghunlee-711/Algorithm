# coding: utf-8

#M이 8이고 K가 3인경우이며 
#data = [2,4,5,4,6]이 주어졌다고 생각해보자
n,m,k = 5,8,3
data = [2,4,5,4,6]

# 기존의 경우
# 6665 6665 처럼 수열이 반복되는데 이 규칙을 찾아보자

# 반복되는 수열의 길이는 k+1 -> 4가 된다
# 2번의 반복이 이루어진 이유는 4(k+1)//8(m)의 값이 2 이기 때문
# 2에 k를 곱해주면 가장 큰 수가 등장하는 횟수가 된다 -> 6번

#정확히 나눠지지 않고 나머지가 생긴다면  그 수만큼 큰수가 더 더해지는 것이다

# 큰수가 더해지는 횟수를 살펴보자
# int(M/(K+1)) * K 는 몫 * K이다
# M % (K+1)은 나머지의 수이다.
#int(M/K+1) * K + M%(K+1)

#이를 토대로 다시 로직을 짜보자

data.sort()
firstBig = data[n-1]
secondBig = data[n-2]
count = (m // (k+1)) * k  ##큰수가 더해지는 횟수
count += m%(k+1)
result = 0 
result += (count)*firstBig #큰수가 더해지는 횟수만큼 큰수를 곱한 값
result += (m-count) * secondBig # 큰수가 더해지는 횟수를 제외한 횟수에 그 다음수를 곱한 값

print(result)



