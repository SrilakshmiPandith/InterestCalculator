export function calculateInterest(type,investment, roi, tp){
    let r = (roi/12)/100;
    let t = (tp*12);
    //console.log(typeof(roi));
    let amount = 1;
    if(type==="SIP"){
        amount = investment *((((1 + r)**(t)) - 1) * (1 + r))/r;
        amount = Math.round(amount,2);
    }
    else{
        amount = investment * (1+(roi/100))**tp;
        amount = Math.round(amount,2);
    }
    return amount;
}