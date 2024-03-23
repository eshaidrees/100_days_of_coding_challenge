var laptop = {
    make: 'Dell',
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log("This laptop is a ".concat(this.make, " ").concat(this.model, " ").concat(this.year));
    }
};
laptop.describe();
