const { IndexOutOfRangeError } = require("../errors");
const {DoublyLinkListNode}=require("../nodes")
class DoublyLinkList{
    constructor(){
        this.head= new DoublyLinkListNode(-1);
        this.tail= new DoublyLinkListNode(-1);
        this.head.next=this.tail;
        this.tail.prev=this.head
    }
    
    addToHead(element){
        const node=new DoublyLinkListNode(element);
        node.next=this.head.next;
        node.prev=this.head;
        this.head.next=node;
        node.next.prev=node;
        
    }
    
    addToEnd(element){
        const node=new DoublyLinkListNode(element);
        node.next=this.tail;
        node.prev=this.tail.prev;
        node.prev.next=node;
        this.tail.prev=node;
        
    }
    addAtIndex(element,index){
        if(this.isEmpty() || index==0) this.addToHead(element);

        let currentIndex=0;
        let temp=this.head.next;
        while(currentIndex<index && temp.next){
            temp=temp.next;
            currentIndex++;
        }
        if(!temp) throw new IndexOutOfRangeError();
        const node=new DoublyLinkListNode(element);
        const prevNode=temp.prev;
        const nextNode=temp
        node.next=nextNode;
        node.prev=prevNode;
        nextNode.prev=node;
        prevNode.next=node;

    }
    
    removeFromHead(){
        if(this.isEmpty()) return -1;
        const nodeToBeDeleted=this.head.next;
        this.head.next=nodeToBeDeleted.next;
        nodeToBeDeleted.next.prev=this.head;
        return nodeToBeDeleted.data;
        
    }

    removeFromEnd(){
        if(this.isEmpty()) return null;
        const nodeToBeDelete=this.tail.prev;
        nodeToBeDelete.prev.next=nodeToBeDelete.next;
        nodeToBeDelete.next.prev=nodeToBeDelete.prev;
        return nodeToBeDelete.data;
    };
    removeFromIndex(index){
        if(this.isEmpty()) throw new IndexOutOfRangeError();
        if(index==0) return this.removeFromHead();
        let currentIndex=0;
        let temp=this.head.next;
        while(currentIndex<index && temp.next){
            temp=temp.next;
            currentIndex++;
        }
        if(!temp.next) throw new IndexOutOfRangeError();
        const nodeToBeDeleted=temp;
        nodeToBeDeleted.prev.next=nodeToBeDeleted.next;
        nodeToBeDeleted.next.prev=nodeToBeDeleted.prev;
        return nodeToBeDeleted.data;
    };

    find(element){
        let temp=this.head.next;

        while(temp.next){
            if(temp.data==element){
                return true;
            }
            temp=temp.next;
        }
        return false;
    }

    isEmpty(){
        return this.head.next.next==null;
    }
    print(){
        let temp=this.head.next;
        while(temp.next){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}

module.exports=DoublyLinkList;