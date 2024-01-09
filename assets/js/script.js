/**
 * Initializes the event listeners and default values for the tip calculator.
 */
function initializeTipCalculator() {
    updateTipAndTotal(); // Set initial values for the tip calculator
    document.getElementById('tipPercentage').addEventListener('input', updateTipAndTotal);
    document.getElementById('splitNumber').addEventListener('input', updateTipAndTotal);
}
