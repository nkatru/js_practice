function autoPrice (year,carMilage,addedClimatControl,isSecurityAdded,isElectro) {
    const basePrice = 10000;
    let finalPrice = basePrice;
    const basePricePrompt = `Base price was ${basePrice} and `
    const finalPricePrompt = `Final price is `
    let price;

    if (year >= 2019 && year <= 2022) {
        price = basePrice*10/100;
     if(year)console.log(basePricePrompt + `${price} was added to the Base price, because year is from 2019 to 2022`);
     console.log(finalPricePrompt + (finalPrice += price));
    }
    if (carMilage >= 50000 && carMilage <= 100000) {
        price = basePrice*5/100;
     if(carMilage)console.log(basePricePrompt + `${price} was substracted from the Base price, because mileage is between 50 000 and 100 000`);
     console.log(finalPricePrompt + (finalPrice -= price));
    }
    if(addedClimatControl) {
        price = basePrice*7/100;
        if(addedClimatControl)console.log(basePricePrompt + `${price} was added to the Base price, because current car has a climat control system`);
     console.log(finalPricePrompt + (finalPrice += price));
    }
    if(isSecurityAdded){
        price = basePrice*8/100;
        if(isSecurityAdded)console.log(basePricePrompt + `${price} was added to the Base price, because current car has a security package added`);
        console.log(finalPricePrompt + (finalPrice += price));
        }
    if(isElectro) {
        price = basePrice*15/100;
        if(isElectro)console.log(basePricePrompt + `${price} was added to the Base price, because current car has an electro engine`);
        console.log(finalPricePrompt + (finalPrice += price));
     }
}

autoPrice(2000,50000,false,true,true)