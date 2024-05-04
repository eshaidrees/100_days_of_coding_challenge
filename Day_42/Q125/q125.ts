let obj = {
    prop1:10,
    prop2:20,
    method:function(){
        return this.prop1 + this.prop2
    }
};

console.log(obj.method()); //Output:30

