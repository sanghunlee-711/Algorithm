#coding: utf-8

array = [7,5,9,0,3,1,6,2,4,8]

for i in range(len(array)):
  min_index = i
  swap1 = 0
  swap2 = 0
  #가장 작은 원소의 인덱스를 찾을 것
  for j in range(i+1, len(array)):
    if array[min_index] > array[j]:
      min_index = j

  swap1 = array[i]
  swap2 = array[min_index]
  array[i] = swap2
  array[min_index] = swap1
  # swap sample
    # array[i], array[min_index] = array[min_index], array[i] #스와프 ?? 
# 스와프란 특정한 리스트(배열)이 주어졌을 때 두 변수의 위치를 변경하는 작업을 말한다.
  # 두가지의 값을 바꿔버리나봄

print(array)