//Function Scope
function calculateExcavatorBill(days)
{
    const rent=15000;
    return rent*days;
}
const bill=calculateExcavatorBill(5);
console.log("Excavator's total bill:",bill);
console.log("Daily rent:",rent);//Runtime error
