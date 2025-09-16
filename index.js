findNeghiborNode = (current)=>{
    let Nodes = [[2, 1], [2, -1]
                 [-2, 1], [-2, 1],
                 [1, 2], [1, -2],
                 [-1, 2], [-1, -2]
                ]
    for(node of Nodes){
       let [currentX, currentY] = node;
        console.log(currentX)

    }
}
knightMoves = (start, end) => {
queue = [[start, [start]]];
while(queue.length > 0){
    let current = queue.shift();
    console.log(current);
  

}
};
knightMoves([0,0],[3,3]);
