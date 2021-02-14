# coding: utf-8

#(1,1) => LRUD(한칸씩 이동)
# (위아래, 좌우)
N = 5
direction = ["R","R","R","U","D","D"]

def FinalDirection(n, dir):
  newDir = (1,1)
  for el in dir:
    if(el == "R"):
      if(1<= newDir[1] + 1 <= n):
        newDir = (newDir[0], newDir[1] + 1)
      else:
        newDir = (newDir[0], newDir[1])

    elif(el == "U" ):
      if(1 < newDir[0] - 1 < n):
        print("UP")
        newDir = (newDir[0] - 1, newDir[1])
      else:
        newDir = (newDir[0], newDir[1])

    elif(el == "L"):
      if(1 <= newDir[1] - 1 <= n):
        newDir = (newDir[0], newDir[1] - 1)
      else:
        newDir = (newDir[0], newDir[1])

    elif(el == "D"):
      if(1 <= newDir[0] + 1 <= n):
        newDir = (newDir[0] + 1 , newDir[1])
      else:
        newDir = (newDir[0], newDir[1])
      
  return newDir

##인덴트 너무 어려운데 : ) ;;

result = FinalDirection(N,direction)
print(result)