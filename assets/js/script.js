/**
 * Retrieves an element by its ID from the DOM.
 * 
 * @param {string} id - The ID of the DOM element to retrieve.
 * @returns {Element} The DOM element corresponding to the provided ID.
 */
function getElementById(id) {
    return document.getElementById(id);
}

/**
 * Initializes all event listeners for the tip calculator.
 * Sets up listeners for input changes and button clicks.
 */
function initializeEventListeners() {
    getElementById('tipPercentage').addEventListener('input', updateTipAndTotal);
    getElementById('splitNumber').addEventListener('input', updateTipAndTotal);
    getElementById('resetBtn').addEventListener('click', resetCalculator);
    getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);
}

/**
 * Updates the tip percentage, total bill, and split total based on user input.
 * Calculates the tip amount, total bill including tip, and the split amount per person.
 * Updates the displayed values accordingly.
 */
function updateTipAndTotal() {
    var billTotal = parseFloat(getElementById('billTotal').value) || 0;
    var tipPercent = parseInt(getElementById('tipPercentage').value) || 0;
    var splitNumber = Math.max(parseInt(getElementById('splitNumber').value) || 1, 1); // Ensure at least 1

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
 * Clears the bill total and resets tip percentage and split number to default values.
 * Updates the display to reflect these changes.
 */
function resetCalculator() {
    getElementById('billTotal').value = '';
    getElementById('tipPercentage').value = 15;
    getElementById('splitNumber').value = 1;

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