function convertCurrency() {
    const bitcoinInput = parseFloat(document.getElementById('bitcoin').value);
    const currencySelect = document.getElementById('currency');
    const selectedCurrency = currencySelect.options[currencySelect.selectedIndex].value;
    let convertedAmount = 0;
    let resultText = "";

    if (selectedCurrency === 'inr') {
        convertedAmount = bitcoinInput * 5000000; // Assuming 1 Bitcoin = 5,000,000 INR
        resultText = `${bitcoinInput} Bitcoin is approximately ${convertedAmount} INR.`;
    } else if (selectedCurrency === 'bitcoin') {
        convertedAmount = bitcoinInput / 5000000; // Assuming 1 Bitcoin = 5,000,000 INR
        resultText = `${bitcoinInput} INR is approximately ${convertedAmount} Bitcoin.`;
    }

    document.getElementById('result').innerText = resultText;
}