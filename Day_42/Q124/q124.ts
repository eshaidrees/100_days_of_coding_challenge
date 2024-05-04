const obj = {
    name: "Hello",
    getname: function(){
        return this.name
    }
};

console.log(obj.getname()); // Output: Hello
 