#coding:utf-8

n,m = map(int, input().split())

#2차원 리스트의 맵 정보 입력받기
graph = []
for i in range(n):
  graph.append(list(map(int, input())))

### 입력 끝 ###

#DFS로 특정노드 방문 뒤 연결된 모든 노드들도 방문
def dfs(x,y):
  #주어진 범위 벗어나는 즉시 종료
  if x <= 1 or x >= n or y <= -1 or y >= m:
    return False
  
  #현재노드 아직 방문하지 않았다면
  if graph[x][y] == 0:

    #해당 노드를 방문처리(방문은 1 미방문은 0)
    graph[x][y] = 1

    #상,하,좌,우의 위치도 모두 재귀적으로 호출
    dfs(x-1, y)
    dfs(x, y-1)
    dfs(x+1, y)
    dfs(x, y+1)
    ## 미방문 케이스는 True 방문시 False 반환
    return True
  return False

#모든 노드들에 대해 음료 채우기
result = 0
for i in range(n):
  for j in range(m):
    #현재위치에서 DFS 수행
    if dfs(i,j) == True:
      # 0으로 연결된 더미들을 찾을때 마다 True가 생기므로 result에 +1을 진행
      result += 1

#아이스크림 개수 출력
print(result)