let str = [{name:"Sanjay", age: 30},{name: "John", age: 30}]
function data(str){
    return str.map((item)=>{
        return item.age
    });
   
}
console.log(data(str))