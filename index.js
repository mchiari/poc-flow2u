
//     A -> C -> E
//     |   ^
//     v /
//     B
//     |
//     v  
//     D -> F

const graph = {
  a: ['b','c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const depthFirst = (graph, src) => {
console.log('____ Depth-first ____')
  const stack = [src]
  
  while(stack.length > 0){
    const current = stack.pop()
    console.log(current)
    
    for(let next of graph[current]){
      stack.push(next)
    }
  }
}

const breadthFirst = (graph, src) => {
console.log('____ Breadth-first ____')
  const queue = [src]
  
  while(queue.length > 0){
    const current = queue.shift()
    console.log(current)
    
    for(let next of graph[current]){
      queue.push(next)
    }
  }
}

depthFirst(graph, 'a')
breadthFirst(graph, 'a')
