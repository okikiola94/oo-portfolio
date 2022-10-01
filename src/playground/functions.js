// they are different ways too to create a function

// arrow function
    const funcA = () =>'hello ma';// function funcA returns string 'hello ma'
    const funcAb = (run) => `${run} we know you ma`;// function funcAb return string with the argument passed
    
    // how to call them
        funcA();
        funcAb('ope');

// function

    function funcB(){
        return 'Hello ma';
    }

    function funcBa(run){
        return `${run} ooooooo`
    }


    // how to call
        funcB();
        funcBa('if you see Ifedayo run')




// class

    class Drummer{
        
        constructor(name){
            this.i  = name;
            this.b = name;
        }

        updateName=(newName)=>this.i=newName;// updates the value of i

        getName=()=>this.i;// returns value of i

        resetValue=()=>this.i = this.b;

    }

    // using a class
       const  smallDrum = Drummer('ife');
       const  bigDrum = Drummer('okiki');


       smallDrum.updateName('tolu');
       bigDrum.updateName('bunmi');

       smallDrum.getName();
       bigDrum.getName();


       smallDrum.resetValue();
       bigDrum.resetValue();

       smallDrum.getName();
       bigDrum.getName();

