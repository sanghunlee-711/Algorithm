#coding: utf-8

array = [7,5,9,0,3,1,6,2,4,8]

for i in range(len(array)):
  for j in range(i, 0 , -1): #인덱스 i부터 0 까지 -1씩 감소하면서 반복문 진행
    if array[j] < array[j-1]:
    #좌측의 값이 (인덱스 작은애들이) 더 클때 진행되는 조건 -> 자기보다 큰 데이터들을 만나는 경우
      array[j], array[j-1] = array[j-1], array[j]
      # 그럴때 서로 위치를 바꿔준다 - > 오름차순 정렬이 진행되는것
    else: 
      #자기 보다 작은데이터를 만나는 경우 
      break
print(array)