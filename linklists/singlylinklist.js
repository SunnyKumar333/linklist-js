const {SinglyLinkListNode}=require("../nodes")
const {IndexOutOfRangeError}=require("../errors")
class SinglyLinkList{
    constructor(){
        this.head=null;
    }
    //add element to LinkList
    addToHead(element){
        const node= new SinglyLinkListNode(element);
        if(this.isEmpty()){
            this.head=node;
            return;
        }
        node.next=this.head;
        this.head=node;
    }
    addToEnd(element){
        const node=new SinglyLinkListNode(element)
        if(this.isEmpty()){
            this.head=node;
            return;
        }
        let temp=this.head;
        while(temp && temp.next){
            temp=temp.next;
        }
        temp.next=node;
        
    }
    addAtIndex(element,index){
        if(index==0){
            this.addToHead(element);
            return;
        }
        let currIndex=0;
        let temp=this.head;
        while(currIndex <index-1 && temp){
            temp=temp.next;
            currIndex++;
        }
        if(!temp){
            throw new IndexOutOfRangeError();
        }
        const node=new SinglyLinkListNode(element);
        node.next=temp.next;
        temp.next=node;
        
    }
    //remove element from LinkList
    removeFromHead(){
        if(this.isEmpty()) return null;
        let data=this.head.data;
        this.head=this.head.next;
        return data;
    }
    removeFromEnd(){
        if(this.isEmpty()) return null;
        //check if single node
        let temp=this.head;
        if(temp && !temp.next) return this.removeFromHead();

        while(temp && temp.next && temp.next.next){
            temp=temp.next;
        }
        let data=temp.next.data;
        temp.next=null;
        return data;
    }
    removeFromIndex(index){
        if(index==0){
            return this.removeFromHead();
        }
        let currIndex=0;
        let temp=this.head;
        while(currIndex <index-1 && temp){
            temp=temp.next;
            currIndex++;
        }
        if(!temp || temp.next==null){
            throw new IndexOutOfRangeError();
        }
        //delete node
        let data=temp.next.data;
        temp.next=temp.next.next;
        return data;

    }
    //find in linklist
    find(element){
        let temp=this.head;
        while(temp){
            if(temp.data==element){
                return true;
            }
            temp=temp.next;
        }
        return false;
    }
    //check if linklist is empty or not
    isEmpty(){
        return this.head===null;   
    }
    //print linklist
    print(){
        let temp=this.head;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
    }

}

module.exports=SinglyLinkList;