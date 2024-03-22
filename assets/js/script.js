function getElementById(id) {
    return document.getElementById(id);
}

/**
 * Disables or enables the tip and split sliders based on the bill total input.
 */
function toggleSlidersBasedOnInput() {
    const billTotal = parseFloat(getElementById('billTotal').value);
    const isInputValid = !isNaN(billTotal) && billTotal > 0;
    getElementById('tipPercentage').disabled = !isInputValid;
    getElementById('splitNumber').disabled = !isInputValid;
}

/**
 * Initializes all event listeners for the tip calculator.
 * Sets up listeners for input changes and button clicks.
 * Disables sliders initially until bill total is entered.
 */
function initializeEventListeners() {
    getElementById('billTotal').addEventListener('input', function() {
        toggleSlidersBasedOnInput();
        updateTipAndTotal();
    });
    getElementById('tipPercentage').addEventListener('input', updateTipAndTotal);
    getElementById('splitNumber').addEventListener('input', updateTipAndTotal);
    getElementById('resetBtn').addEventListener('click', resetCalculator);
    getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);
    toggleSlidersBasedOnInput(); // Initially disable sliders until input is valid
}

/**
 * Updates the tip percentage, total bill, and split total based on user input.
 */
function updateTipAndTotal() {
    var billTotal = parseFloat(getElementById('billTotal').value) || 0;
    var tipPercent = parseInt(getElementById('tipPercentage').value) || 0;
    var splitNumber = Math.max(parseInt(getElementById('splitNumber').value) || 1, 1);

    getElementById('tipPercentLabel').innerText = tipPercent + '%';
    getElementById('splitNumberLabel').innerText = splitNumber.toString();

    var tipAmount = billTotal * (tipPercent / 100);
    var totalBillWithTip = billTotal + tipAmount;
    var splitTotal = totalBillWithTip / splitNumber;

    getElementById('tipTotal').innerText = '$' + tipAmount.toFixed(2);
    getElementById('totalBillWithTip').innerText = '$' + totalBillWithTip.toFixed(2);
    getElementById('splitTotal').innerText = '$' + splitTotal.toFixed(2);
}

/**
 * Resets the calculator to its default state.
 */
function resetCalculator() {
    getElementById('billTotal').value = '';
    getElementById('tipPercentage').value = 15;
    getElementById('splitNumber').value = 1;
    toggleSlidersBasedOnInput(); // Disable sliders again until input is valid
    updateTipAndTotal();
}

/**
 * Toggles the dark mode for the page.
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Run after the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateTipAndTotal(); // Set initial values for the tip calculator
});