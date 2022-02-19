'use strict';

let Information  = []

function Employee(EmplyeeID,FullName,Department,Level,Salary){

    this.EmployeeID = EmplyeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this. Salary = Salary;
    this.Image = `../assets/img/${this.FullName}.jpeg`;
    Information.push(this);
}
// var levelOption = document.getElementById("level").value;

let Ghazi = new Employee(1000,"Ghazi Smaer","Administration","Senior");
let Lana  = new Employee(1001,"Lana Ali","Finance","Senior");
let Tamara = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let Safi = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let Omar = new Employee(1004,"Omar Zaid","Development","Senior");
let Rana = new Employee(1005,"Rana Saleh","Development","Junior");
let Hadi  = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

Employee.prototype.SalaryCalc = function(){
if(this.Level == "Senior")
{
    let randSalary = Math.floor(Math.random() * (2000 - 1500 + 1 ) + 1500 )
    return (randSalary * 7.5)/100;
}
else if(this.Level == "Mid-Senior")
{
    let randSalary = Math.floor(Math.random() * (1500 - 1000 + 1 ) + 1000 )
    return (randSalary * 7.5)/100;
}
else if(this.Level == "Junior")
{
    let randSalary = Math.floor(Math.random() * (1000 - 500 + 1 ) + 500 )
    return (randSalary * 7.5)/100;
}
};

Employee.prototype.render = function(){
document.write(`EmployeeID : ${this.EmployeeID} , FullName : ${this.FullName} , Departement : ${this.Department} , Level : ${this.Level} , Salary : ${this.Salary} <hr>`);
}
for(let i = 0 ; i <Information.length; i ++)
{
   Information[i].render();
}