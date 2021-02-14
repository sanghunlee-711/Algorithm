# coding: utf-8

#ex) input_data = a1
input_data = input()
#) row = a
row = int(input_data[1])
# column = 1
column = int(ord(input_data[0])) - int(ord('a')) + 1
#아래처럼 간단하게는 왜 사용안하지
# -> 만약의 경우 a1값이 아니라 1a등 랜덤으로 오는 케이스의 경우 위와같은 처리가 필요
print("Hello",int(input_data[1]))
#상하좌우 문제와 동일하게 미리 가능한 이동 case정의 하기(경우의수로 간단하게 구하자! 2(1 , 2)*2(- or +)*2(좌우))
steps = [(-2,-1), (-1,-2), (1,-2),(2,-1),(2,1),(1,2),(-1,2),(-2,1)]

#8가지 방향 case에 대하여 각 위치로 이동 가능한지 확인
result = 0
for step in steps:
  #이동하려는 위치 확인
  next_row = row + step[0]
  next_column = column + step[1]

  #해당 위치로 이동이 가능하다면 count 증가
  if next_row >= 1 and next_row <= 8 and next_column >=1 and next_column <=8:
    result += 1
print(result)