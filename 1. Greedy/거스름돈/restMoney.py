n = 1260
count = 0 
coint_types = [500, 100, 50 ,10]

for i in coint_types:
  #몫 만큼 더해주기
  count += n // i 
  # 해당 코인타입 나눈게 나머지 거스름돈 될거니까 :)
  n = n % i

print(count)