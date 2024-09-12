function calculateTax(income, expenses) {
    if (income < 0 || income < expenses || expenses < 0){
    return "Invalid Input";
    }
    const diff = income - expenses ;
    const tax = diff * .20;

    return tax;
};

const income = 34000;
const expenses = 1753;
//console.log(calculateTax(income ,expenses));



function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email";
    }
   const [username, domain_name] = email.split('@');
   const massage = `${username} sent you an email from ${domain_name}`;
   return massage;
};
//  const email = "nadim.naem5@outlook.com";
//  console.log(sendNotification(email));

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }
   
    for(let i = 0; i < name.length; i++){
        if(!isNaN(name[i]) && name[i] !== String){
            return true;
        }
        
    }
    return false;
};

// console.log(checkDigitsInName('e1mu3'));




function calculateFinalScore(obj) {
    if(typeof obj !== 'object' && obj !== null){
        return "Invalid Input";
    }
    const finalScore = obj.testScore + obj.schoolGrade;
    if(finalScore >= 80){
        return true;
    }

    else if(obj.isFFamily === true){
      let total = finalScore + 20;
      if( total >= 80){
        return true;
      }
      
    }
    return false;
};

const object = {
      
        name: "Rajib", 
        testScore: 45,  
        schoolGrade: 20, 
        isFFamily : true
    };
    // console.log(calculateFinalScore(object));

    //problem-5

    function  waitingTime(waitingTimes  , serialNumber) {

        if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
            return "Invalid Input"
        }
       
       let times = 0;
       for ( i = 0; i < waitingTimes.length; i++){
        times = waitingTimes[i] + times;
       }
       
        
       let avg = times / waitingTimes.length;
        let avgF = Math.round(avg);
    let calc = avgF * (serialNumber - (waitingTimes.length + 1));
    return calc;
       
}
const array = [ 13,2 ];
const serialNumber = '6';
 console.log(waitingTime(array , serialNumber)); 


