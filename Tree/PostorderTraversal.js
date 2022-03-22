
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
// 2.right 
// 3.root
// output look like this order
// 4 5 2 6 7 3 1


var  postorderTraversal = function(root) {

    let result=[];
       function post(root){
           if(root===null){
               return [];
           }

           post(root.left);
           post(root.right);
           result.push(root.val);
       }
       post(root);
       return result;
}