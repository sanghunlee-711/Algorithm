# 학생수 n
n= int(input())

# 문자열과 학생성적 나타내는것 공백 입력

array = []

for i in range(n):
  input_data = input().split()
  #이름은 문자열 그대로, 점수는 정수형으로 저장
  array.append((input_data[0],int(input_data[1])))

#키(key)를 이용하여, 점수를 기준으로 정렬
# ---- 입력 끝 ----

array = sorted(array, key=lambda student: student[1])

# 정렬이 수행된 결과를 출력
for student in array:
  print(student[0])