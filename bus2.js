const BUS_TICKET_PRICE = 250;
const RESERVED_BUS_CAPACITY = 50;
const MICRO_BUS_CAPACITY = 11;

function busFare(passengers) {
    let remainingPassengers;

    if (passengers >= RESERVED_BUS_CAPACITY) {
        remainingPassengers = passengers % RESERVED_BUS_CAPACITY;
    } else if (passengers >= MICRO_BUS_CAPACITY) {
        remainingPassengers = passengers % MICRO_BUS_CAPACITY;
    } else {
        remainingPassengers = passengers;
    }

    return remainingPassengers * BUS_TICKET_PRICE;
}

const people = 50;
const result = busFare(people);
console.log(result);
