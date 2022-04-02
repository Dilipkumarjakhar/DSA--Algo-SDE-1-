
class Node{
    constructor(data) {
        this.next=null;
        this.data=data;
        
    }
}

function  cycle(root){
    if(root===null) return;

    let slow=root;
    let fast=root;

    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return slow.data;
        }
    }
    return -1;
}
// 200   201     202   203   204    205
// 1 201 2 202 3 203  4 204 5 205  6 null
root=new Node(200);
root.data=new Node(1);
root.next=new Node(201);
root.next.data=new Node(2);
root.next.next=new Node(202);
root.next.next.data=new Node(3);
root.next.next.next=new Node(203);
root.next.next.next.data=new Node(4);
root.next.next.next.next=new Node(204);
root.next.next.next.next.data=new Node(5);
root.next.next.next.next.next=new Node(null);
// root.next.next.next.next=new Node(204);
console.log(cycle(root));