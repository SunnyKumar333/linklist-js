const {SinglyLinkList}=require("../index")
const ll=new SinglyLinkList();

ll.addToEnd(1);
ll.addToEnd(2);
ll.addToEnd(3);
ll.addToEnd(4);
ll.addToHead(10);
ll.addAtIndex(111,5)
console.log("value is:",ll.removeFromIndex(0));
console.log("data found",ll.find(112))

ll.print();

console.log(ll.isEmpty());