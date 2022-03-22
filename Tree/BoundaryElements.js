

    //        200
    //       /   \
    //      /     \
    //     201    202
    //    /  \      \
    //   /    \      \
    // 203    204    205
    //         / \      \
    //        /   \      \
    //      206   207    208
    //                   / \
    //                  /   \      
    //                 209  210
    
    //output will be look like
    //  200 201 203 206 207 209 210 208 205 202
class Node{
    constructor(data){
        this.left=null;
        this.right=null;
        this.data=data;
    }
}
let root;

function printBoundary(root){
    if(root===null){
        return root;
    }
    console.log(root.data)
    printBoundaryLeft(root.left)
    printLeaves(root.left)
    printLeaves(root.right)
    printBoundaryRight(root.right)

}

function printBoundaryLeft(root){
    if(root===null){
        return;
    }
    if(root.left!==null){
        console.log(root.data)
        printBoundaryLeft(root.left)
     }
     else if(root.right!==null){
          console.log(root.data)
          printBoundaryLeft(root.right)
        }
}



function printLeaves(root){
       if(root===null) return;

       printLeaves(root.left)
       if(root.left===null && root.right===null){
           console.log(root.data)
        }
        printLeaves(root.right) 
}

function printBoundaryRight(root){
  
    if(root===null) return;

    if(root.right!==null){
        printBoundaryRight(root.right);
        console.log(root.data);

    }else if(root.left!==null){

        printBoundaryRight(root.left);
        console.log(root.data);
    }
}
root=new Node(200);
root.left=new Node(201);
root.left.left=new Node(203);
root.left.right=new Node(204);
root.left.right.left=new Node(206);
root.left.right.right=new Node(207);
root.right=new Node(202);
root.right.right=new Node(205);
root.right.right.right=new Node(208);
root.right.right.right.left=new Node(209);
root.right.right.right.right=new Node(210);

printBoundary(root);
// console.log(printBoundary(root));