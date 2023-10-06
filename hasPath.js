//recursive solution
export const depthFirstHasPath = (graph, src, dst) => {
    if (src === dst) return true
     for(let next of graph[src]){
       if(hasPath(graph,next,dst) === true) return true
     }
     
     return false
   };


// iterative solution
export const breadthFirstHasPath = (graph, src, dst) => {
    const queue = [src];
     
     while(queue.length > 0){
       const current = queue.shift()
       
       if(current === dst) return true
       
       for(let next of graph[current]){
         queue.push(next)
       }
     }
     
     return false
   };
   