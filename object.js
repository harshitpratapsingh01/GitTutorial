let user = {
    name : "nikhil",
    age : 21,
    func : function(){
        return this.name + " " + this.age;
    }
}

console.log(user.func());
console.log(user.age);