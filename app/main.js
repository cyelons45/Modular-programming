define([
    'require',
    "./Calculator",
    './Student',
     'jquery'
   
], function(require,Calculator,Student,jquery) {
    console.log(new Calculator(4,2).addition())
    var $=jquery;

    let s=new Student('John',1980)
    console.log(s.calcAge())

    console.log(s.fromCalc())

    $('h6').text(s.name)
    
});






// define(function(require){
//     var Calculator=require("./Calculator");

//     let $=require('jquery')
//     console.log(Calculator)

//   let p= new Calculator(20,10);
//     // console.log(calculate.addition())

//     $('h6').css('color','red')
// })


// define(function(require){
//     let Calculator=require('./Calculator')
//     let Student=require('./Student')

//     let p=new Calculator(4,8)

//     let s=new Student('John',1990)
//     console.log(

//     `${s.name} is a student of Western Michigan University. He is ${s.calcAge()} years of age but he calculate 4 * 8 as ${p.addition()} `
//     )

 
 
// })


// require(['Calculator'],function(Calculator){
//     console.log(new Calculator())
    
// })



