# coding: utf-8
n = int(input())
x,y, = 1,1
#들어올 Move types들
plans = input().split()

##LRUD에 따른 방향이동
# 이렇게 미리 좌표잡고 하는방법을 알아 놓자.
dx = [0,0,-1,1]
dy = [-1,1,0,0]
move_types = ["L","R","U","D"]

#이동 계획 확인하기

for plan in plans:
  #이동 후의 좌표 구하기
    for i in range(len(move_types)):
      if plan == move_types[i]:
        nx = x + dx[i]
        ny = y + dy[i]
    #공간 벗어나는 경우 처리(무시하기)
    if nx < 1 or ny < 1 or nx> n or ny > n:
      continue
    
    #이동 수행
    x, y = nx, ny

print(x,y)