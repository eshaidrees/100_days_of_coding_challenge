let obj = {
    property: 10,
    method: function(){
        const nestedFunc = () => {
            console.log(this.property); // Output: 10
            
        }
        nestedFunc()
    }
}
obj.method();