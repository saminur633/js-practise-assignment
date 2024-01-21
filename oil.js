// calculate the total oil price that I have to pay 
// dissel:114;
// petrol:135;
// octane:130;

function TotalOilPrice(dieselQty, petrolQty, octaneQty) {
    const dieselPrice = 114;
    const petrolPrice = 135;
    const octanePrice = 130;

    const totalDieselPrice = dieselQty * dieselPrice;
    const totalPetrolPrice = petrolQty * petrolPrice;
    const totalOctanePrice = octaneQty * octanePrice;

    const totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;

    return totalPrice;
}


const dieselQuantity = 10;
const petrolQuantity = 15; 
const octaneQuantity = 5;  
const OilPrice = TotalOilPrice(dieselQuantity, petrolQuantity, octaneQuantity);

console.log('Total Oil Price:', OilPrice);
