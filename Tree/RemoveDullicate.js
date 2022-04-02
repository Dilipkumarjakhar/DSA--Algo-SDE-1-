class Node{
    constructer(data){
        this.data=data;
        this.next=null;
    }
}
let head;

function dup(head){
    let a=[]
    if(head==null) return;
    
    while(head!=null){
        if(a[a.length-1]!=head.data){
            a.push(head.data);
        }
        
        head=head.data.next;
    }
    return a;
}

head=new Node(1)
head.data=new Node(1)
head.data.next=new Node(1)
head.data.next.data=new Node(2)
head.data.next.data.next=new Node(3)
head.data.next.data.next.data=new Node(3)
head.data.next.data.next.data.next=new Node(null)
console.log(dup(head))