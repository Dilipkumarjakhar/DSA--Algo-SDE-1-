    //        200
    //       /   \
    //      /     \
    //     201    202
    //    /  \      \
    //   /    \      \
    // 203    204    205
//   200 201 202 203 204 205

class Node{
    constructor(data){
        this.left=null;
        this.right=null;
        this.data=data;
    }
}
let root;
function levelOrder(root){
    if(root==null) return;

    let queue=[root];
    let levels=[];


    while(queue.length>0){
        let res=[];
         let n=queue.length;
         for(var i=0;i<n;i++){
               let pop=queue.shift();
                res.push(pop.data);
                // levels.push(pop.data);
                if(pop.left!==null) queue.push(pop.left);
                if(pop.right!==null) queue.push(pop.right);
        }
        levels.push(res)
    }
   
    return levels;
}

root=new Node(200)
root.left=new Node(201)
root.left.left=new Node(203)
root.left.right=new Node(204)
root.right=new Node(202)
root.right.left=new Node(205)
root.right.right=new Node(206)

console.log(root);
console.log(levelOrder(root));