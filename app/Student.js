define(function(require){
    var calc=require('./Calculator');
   
 

    return class Student{
        constructor(name,yearOfBirth){
            this.name=name,
            this.yearOfBirth=yearOfBirth;

        }
        calcAge(){
            return 2019-this.yearOfBirth
        }
        fromCalc(){
            return new calc(2,14).addition()
        }
       
    }

})