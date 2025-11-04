class IndexOutOfRangeError extends Error{
    constructor(){
        super("LinkList index out of Range.");
        this.name="IndexOutOfRangeError"
    }
}

module.exports={
    IndexOutOfRangeError
}