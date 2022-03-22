    //        200
    //       /   \
    //      /     \
    //     201    202
    //    /  \      \
    //   /    \      \
    // 203    204    205
//   200 202 201 203 204 205

class Node{
  constructor(data){
      this.left=null;
      this.right=null;
      this.data=data;
  }
}
let root;

function zigZag(root){
    let res=[];

    let lol=(root,level)=>{

        if(root=null) return;
        
        

        if(res[level]){
            res[level].push(root.data);
        }else{
            // res[level]=root.data;
        }
      
        lol(root.left,level+1);
        lol(root.right,level+1);
        
    }
    lol(root,0);
    return res

}

root=new Node(200);
root.left=new Node(201);
root.left.left=new Node(203);
root.left.right=new Node(204);
root.right=new Node(202);
root.right.left=new Node(205);
root.right.right=new Node(206);

console.log(zigZag(root))
// console.log(root)