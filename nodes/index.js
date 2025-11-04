class SinglyLinkListNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class DoublyLinkListNode{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

module.exports={
    SinglyLinkListNode,
    DoublyLinkListNode
}