#coding: utf-8

array = [7,5,9,0,3,1,6,2,4,8]

result = sorted(array)
print(result)

array2 = [7,5,9,0,3,1,6,2,4,8]
array2.sort()
print(array2)

array3 = [('banana',2),('apple',5),('carrot',3)]

def setting(data):
  return data[1]

result = sorted(array3,key=setting)
print(result)