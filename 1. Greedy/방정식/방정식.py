# coding: utf-8
def solve1(a,b,c):
  answer = (-1 * (b + c)) / a
  return answer

def solve2(a,b,c):
    judge = b ** 2 - 4 * a * c
    answer = (-b + judge ** (1 / 2)) / (2 * a)
    answer2 = (-b - judge ** (1 / 2)) / (2 * a)
    if judge > 0:
      answerArr = [answer2, answer]
      return answerArr
    elif judge < 0:
      return "허근입니다"
    elif judge == 0:
      return answer2


g = 2
h = 3
i = 1

answer3 = solve2(g, h, i);
answer4 = solve1(g,h,i);

print(answer3)
print(answer4)