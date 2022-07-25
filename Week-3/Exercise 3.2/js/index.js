var person = {
    firstName: 'David',
    lastName: 'Warner',
    getFullName: function() {
        var fullName = this.firstName + ' ' +this.lastName;
        return fullName;
    }
};

console.log("Bind Function Implementation");

var personNameBind = function() {
    console.log(this.getFullName());
};

var printNameBind = personNameBind.bind(person);
printNameBind();


console.log("Apply Function Implementation");
var personName = function(age) {
    console.log(this.getFullName() +' of ' + age);
};

personName.apply(person, [25]);

console.log("Apply Function Implementation");

personName.call(person, 26);