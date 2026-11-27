//Block Scope demo

function calculateExcavatorBill(days)
{
    const rent=15000;
    return rent*days;
}
const bill=calculateExcavatorBill(5);
console.log("Excavator's total bill:",bill);
//console.log("Daily rent:",rent);//Runtime error
let isAvailable=true;
const price=15000;
if(isAvailable && price=="15000")
{
    let equipment="Excavator";
    console.log(equipment,"is available!");
}
else
{       let equipment="Excavator";
     console.log(equipment,"is available!");
}
console.log(equipment);
