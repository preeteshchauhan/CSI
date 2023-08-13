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


document.getElementById('main-button').addEventListener('click', function() {
    // Replace 'path_to_your_report.pdf' with the actual path to your report file
    const reportPath = 'csi.pdf';
    
    const a = document.createElement('a');
    a.href = reportPath;
    a.download = 'csi.pdf';
    a.style.display = 'none';
    
    document.body.appendChild(a);
    
    a.click();
    
    document.body.removeChild(a);
});
