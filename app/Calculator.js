define(function(require){

  return  class Calculator{
        constructor(number1, number2){
            this.number1 = number1,
            this.number2 = number2;

        }
        addition(){
            return this.number1 + this.number2
        }
        multiplication(){
            return this.number1 * this.number2
        }

        division(){
            return this.number1 / this.number2
        }
        subtraction(){
            return this.number1 - this.number2
        }
    }

})