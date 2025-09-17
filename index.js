checkValidity = (x, y)=>{
    if((x >= 0 && x < 8) && (y >= 0 && y < 8)){
        return true
    }
    return false;
}
findNeghiborNode = (start)=>{
    let Nodes = [[2, 1], [2, -1],
                 [-2, 1], [-2, 1],
                 [1, 2], [1, -2],
                 [-1, 2], [-1, -2]
                ];
    let neighborNode = [];
    for(let [dx, dy] of  Nodes){
        let [x, y] = start;
        let horizontalX = dx + x;
        let verticalY = dy + y;
        if(checkValidity(horizontalX, verticalY)){
            neighborNode.push([horizontalX, verticalY])
        }

    }
    return neighborNode;
}
knightMoves = (start, end) => {
let queue = [[start, [start]]];
let vistied = new Set([start.toString()]);
while(queue.length > 0){
    let current = queue.shift();
    let [start, path] = current;
    if(start[0] === end[0] && start[1] === end [1]){
        console.log(`You have made it in ${path.length} moves`)
        console.log(`The Shortest path is ${path.map((eachmap)=> `[${eachmap}]`).join(' -> ')}`)
        return path;
    }
    let neighborNode = findNeghiborNode(start);
    for(let neighbor of neighborNode){
        let neighborStr = neighbor.toString();
      if(!vistied.has(neighbor)){
        vistied.add(neighborStr);
        queue.push([neighbor, [...path, neighbor]])
      }

    }
  
}
};
knightMoves([0,0],[2,2]);
