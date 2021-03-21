#coding: utf-8
# 점화식 살짝 이해안가는데 흠 ..
# 221P 다시보기

n = int(input())

#식량 정보 입력받기
array = list(map(int, input().split()))

#계산된 결과 저장 위한 dp table 
d = [0]*100

# DP진행 (Bottom Up)

# 2부터 시작할 것이므로 미리 셋팅
d[0] = array[0]
d[1] = max(array[0], array[1])

# 반복문 돌며 점화식에 따른 최대값 구하기
for i in range(2,n):
  d[i] = max(d[i-1], d[i-2]+array[i])

print(d[n-1]);

