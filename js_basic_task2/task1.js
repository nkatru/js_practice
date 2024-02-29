function revenueCount(baseRevenue) {
    let percentSymbol = '%';
    let revenueAfterTaxes;
    let percentValue;

    if (baseRevenue < 10000 && baseRevenue > 0) {
        percentValue = 5;
        revenueAfterTaxes = baseRevenue - (baseRevenue * percentValue / 100);
    }
    else if (baseRevenue <= 50000 && baseRevenue >= 10000) {
        percentValue = 10;
        revenueAfterTaxes = baseRevenue - (baseRevenue * percentValue / 100);
    }
    else if (baseRevenue <= 100000 && baseRevenue > 50000) {
        percentValue = 15;
        revenueAfterTaxes = baseRevenue - (baseRevenue * percentValue / 100);
    }
    else if (baseRevenue <= 200000 && baseRevenue > 100000) {
        percentValue = 20;
        revenueAfterTaxes = baseRevenue - (baseRevenue * percentValue / 100);
    }
    else if (baseRevenue > 200000) {
        percentValue = 25;
        revenueAfterTaxes = baseRevenue - (baseRevenue * percentValue / 100);
    }
    else {
        console.log(`Invalid value.`);
    }
    console.log(`Base revenue = ${baseRevenue}. 
Taxes percent = ${percentValue}${percentSymbol}.
Revenue after taxes = ${revenueAfterTaxes}.`);

};


revenueCount(50000);
