# coding:utf-8
from collections import deque

#BFS 메서드 정의
def bfs(graph, start, visited):
  # graph는 노드사이의 관계를 나타낸것이다 (인접리스트)
  # start 는 시작점의 노드이다
  # visitied는 방문의 유무를 나타내어주는 배열이다.(Array<Boolean>)
  #큐(Queue) 구현을 위해 deque라이브러리 사용
  queue = deque([start])

  #현재 노드를 방문처리
  visited[start] = True

  #큐가 빌 때까지 반복
  while queue:

    #큐에서 하나의 원소를 뽑아 출력
    v = queue.popleft()
    print(v)

    #해당원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
    for i in graph[v]:
      if not visited[i]:
        queue.append(i)
        visited[i] = True

# 각 노드가 연결된 정보(인접리스트, 2차원 리스트)
graph = [
  [],
  [2,3,8],
  [1,7],
  [1,4,5],
  [3,5],
  [3,4],
  [7],
  [2,6,8],
  [1,7]
]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(1차원리스트)
visited = [False]*9

#정의된 BFS 함수 호출
bfs(graph, 1, visited)