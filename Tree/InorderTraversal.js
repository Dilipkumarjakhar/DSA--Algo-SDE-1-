//          1
//        /   \
//       /     \
//      2       3
//     / \     / \
//    /   \   /   \
//   4     5 6     7

// inorder is nothing but 

// <---Steps--->
// 1.left
// 2.root
// 3.right 
// output look like this order

// 4 2 5 1 6 3 7


var  inorderTraversal = function(root) {
    
    let result=[];
    function In(root){
        if(root===null) return [];

           In(root.left);
           result.push(root.val);
           In(root.right);
        }

    In(root);
    return result;
}