# coding: utf-8

# 1. Adjacency Matrix(인접행렬)방식으로 나타내기 (2차원 matrix 생각하면 된다)

#연결되어 있지 않은 노드끼리는 Infinity의 비용이라고 작성한다.
INF = 999999999 #무한의 비용선언!

#2차원 리스트를 이용해 인접행렬 표현
graph = [
  [0,7,5],
  [7,0,INF],
  [5,INF,0]
]
print(graph)

# 2.Adjacency List(인접 리스트)방식으로 나타내기 

#행(Row)이 3개인 2차원 리스트로 인접리스트 표현
graph2 = [[] for _ in range(3)]

#노드 0에 연결된 노드 정보저장(노드, 거리)
graph2[0].append((1,7))
graph2[0].append((2,5))

#노드 1에 연결된 노드 정보저장(노드 , 거리)
graph2[1].append((0,7))

#노드 2에 연결된 노드 정보저장(노드, 거리)
graph2[2].append((0,5))

print(graph2)


