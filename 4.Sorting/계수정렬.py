# coding: utf-8

array = [7,5,9,0,3,1,6,2,9,1,4,8,0,5,2]


#모든 범위를 포함하는 리스트 선언(모든 값은 0 으로 초기화)
count = [0]*(max(array)+1)

for i in range(len(array)):
  count[array[i]] += 1
  # 각 데이터에 해당하는 인덱스의 값 증가
for j in range(len(count)):
  #리스트에 기록된 정렬 정보 확인

  for k in range(count[j]):
    #정렬된 정보에서의 값만 큼 해당 값 출력
    print(j)