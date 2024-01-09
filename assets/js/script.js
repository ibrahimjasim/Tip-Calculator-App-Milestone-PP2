/**
 * Initializes the event listeners and default values for the tip calculator.
 */
function initializeTipCalculator() {
    updateTipAndTotal(); // Set initial values for the tip calculator
    document.getElementById('tipPercentage').addEventListener('input', updateTipAndTotal);
    document.getElementById('splitNumber').addEventListener('input', updateTipAndTotal);
    document.getElementById('resetBtn').addEventListener('click', resetCalculator);
    document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);
}

/**
 * Updates the tip percentage, total bill, and split total based on user input.
 */
function updateTipAndTotal() {
    let billTotal = parseFloat(document.getElementById('billTotal').value) || 0;
    let tipPercent = parseInt(document.getElementById('tipPercentage').value);
    let splitNumber = parseInt(document.getElementById('splitNumber').value);

    document.getElementById('tipPercentLabel').innerText = tipPercent + '%';
    document.getElementById('splitNumberLabel').innerText = splitNumber.toString();

    let tipAmount = billTotal * (tipPercent / 100);
    let totalBillWithTip = billTotal + tipAmount;
    let splitTotal = totalBillWithTip / splitNumber;

    document.getElementById('tipTotal').innerText = '$' + tipAmount.toFixed(2);
    document.getElementById('totalBillWithTip').innerText = '$' + totalBillWithTip.toFixed(2);
    document.getElementById('splitTotal').innerText = '$' + splitTotal.toFixed(2);
}

function resetCalculator() {
    document.getElementById('billTotal').value = '';
    document.getElementById('tipPercentage').value = 15; 
    document.getElementById('splitNumber').value = 1; 

    updateTipAndTotal(); // Update the displayed values
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}



// Run after the page is fully loaded
document.addEventListener('DOMContentLoaded', initializeTipCalculator);