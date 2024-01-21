// public Bus Fare 
// reversebus ---50
// microbus ----11
// rest people will go by public bus 
// people --- 65
// bus remaining -- 15
// microbus--- 4
// public bus -- 4
// public bus fare ---- 250tk;

function busFare(p){
    const busTicketPrice = 250;
    const reservedBus = 50;
    const microBus = 11;
    let remainPerson;
    if(p>=reservedBus){
        remainPerson = p%reservedBus;
        if(remainPerson>=microBus){
            remainPerson = remainPerson%microBus;
            return remainPerson*busTicketPrice;
        }
        else{
            return remainPerson*busTicketPrice
        }
    }
    else if(p>=microBus){
        remainPerson = p%microBus;
        return remainPerson*busTicketPrice;
    }
    else{
        return p*busTicketPrice;
    }
}

const people = 10;
const result = busFare(people);
console.log(result);