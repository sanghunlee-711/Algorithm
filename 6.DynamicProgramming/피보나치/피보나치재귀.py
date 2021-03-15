#coding: utf-8

#한번 계산된 결과를 메모이제이션 = 캐싱 하기 위한 리스트 초기화(메모리에 저장한다는 말임)
d =[0]*100

#피보나치 함수를 재귀함수로 구현(탑다운 다이나믹 프로그래밍)
def fiborecur(x):
  #종료조건 기재(x = 1 or = 2)
  print("f"+str(x)+"hello")  #각 한번씩만 불리는 것을 확인할 수 있다.-> 중복 x
  if x == 1 or x ==2:
    return 1

  #이미 계산했다면 그대로 반환
  if d[x] != 0:
    return d[x]
  
  #아직 계산하지 않은 문제라면 점화식에 따라 피보나치 결과 반환
  d[x] = fiborecur(x-1) + fiborecur(x-2)
  return d[x]

print(fiborecur(99))
