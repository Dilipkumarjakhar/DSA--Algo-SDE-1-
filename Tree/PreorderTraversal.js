//          1
//        /   \
//       /     \
//      2       3
//     / \     / \
//    /   \   /   \
//   4     5 6     7

// preorder is nothing but 

// <---Steps--->
// 1.root
// 2.left
// 3.right 
// output look like this order
// 1 2 4 5 3 6 7

var preorderTraversal = function(root) {
           let result=[];
    function pre(root){
        if(root==null) return[];
        
        result.push(root.val);
        pre(root.left);
        pre(root.right);
    }
    pre(root);

    return result;
}