// Constants for class names used to manipulate styles dynamically
const SELECTED_CLASS = "bg-primary-cyan"; // Highlight selected tip option
const TEXT_BLACK_CLASS = "text-black"; // Change text color to black for selected tip
const ERROR_CLASS = "border-red-600"; // Style for error indication
const HIDDEN_CLASS = "hidden"; // Class to hide error messages

// DOM Elements
const billInput = document.getElementById("bill"); // Input field for the bill amount
const peopleInput = document.getElementById("people"); // Input field for the number of people
const errorDisplay = document.getElementById("error"); // Error message display
const tipAmountDisplay = document.getElementById("tipAmount"); // Tip amount display
const totalAmountDisplay = document.getElementById("totalAmount"); // Total amount display
const tips = document.querySelectorAll(".tip"); // Tip percentage buttons
const customTipInput = document.getElementById("customTip"); // Input field for custom tip percentage
const resetButton = document.getElementById("reset"); // Reset button

// State Variables
let isFirstSelection = true; // Tracks if it's the first tip selection
let selectedTip = null; // Stores the currently selected tip button
let tipPercentage = 0; // Stores the selected tip percentage as a decimal

// Add event listeners to tip percentage buttons
tips.forEach((tipElement) => {
  tipElement.addEventListener("click", handleTipSelection);
});

// Add event listeners for custom tip input
customTipInput.addEventListener("input", validateCustomTipInput);
customTipInput.addEventListener("input", handleCustomTipSelection);

// Add event listeners for bill and people inputs to validate and update outputs
billInput.addEventListener("input", validateBillAndPeople);
peopleInput.addEventListener("input", validateBillAndPeople);

/**
 * Handles predefined tip button selection.
 * Updates the selected tip style and calculates the tip percentage.
 */
function handleTipSelection(event) {
  if (!isFirstSelection) {
    // Remove styles from the previously selected tip button
    selectedTip?.classList.remove(SELECTED_CLASS, TEXT_BLACK_CLASS);
  }

  selectedTip = event.target;

  // Clear custom tip input when a predefined tip is selected
  if (selectedTip.nodeName !== "INPUT") {
    customTipInput.value = ""; // Reset custom tip input
    selectedTip.classList.add(SELECTED_CLASS, TEXT_BLACK_CLASS);

    // Extract the numeric percentage value from the button text
    const percentageText = selectedTip.textContent.match(/\d+/)?.[0];
    tipPercentage = percentageText ? parseInt(percentageText, 10) / 100 : 0; // Convert to decimal
    updateOutput();
  }

  isFirstSelection = false;
}

/**
 * Handles custom tip input.
 * Clears any selected tip button styles and updates the tip percentage.
 */
function handleCustomTipSelection() {
  if (!isFirstSelection) {
    // Deselect previously selected tip button
    selectedTip?.classList.remove(SELECTED_CLASS, TEXT_BLACK_CLASS);
  }

  selectedTip = null; // Reset selected tip button
  const customValue = parseFloat(customTipInput.value);
  tipPercentage = customValue > 0 ? customValue / 100 : 0; // Convert to decimal
  updateOutput();

  isFirstSelection = false;
}

/**
 * Validates the bill and people input values to ensure they are non-negative.
 * Updates the output if the inputs are valid.
 */
function validateBillAndPeople(event) {
  const input = event.target;
  const value = parseFloat(input.value);

  if (value < 0 || isNaN(value)) {
    input.value = ""; // Reset invalid input
  }

  updateOutput();
}

/**
 * Validates custom tip input to ensure it is within the range of 0 to 100.
 * Clears input if the value is invalid.
 */
function validateCustomTipInput() {
  const value = parseFloat(customTipInput.value);

  if (isNaN(value) || value < 0 || value > 100) {
    customTipInput.value = ""; // Reset invalid input
    tipPercentage = 0; // Reset tip percentage
    updateOutput();
  }
}

/**
 * Resets the form to its initial state, clearing all inputs and outputs.
 * Resets styles for buttons and disables the reset button.
 */
function resetForm() {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipPercentage = 0;
  isFirstSelection = true;

  // Reset output displays
  tipAmountDisplay.innerText = "$0.00";
  totalAmountDisplay.innerText = "$0.00";
  errorDisplay.classList.add(HIDDEN_CLASS);
  peopleInput.classList.remove(ERROR_CLASS);

  // Reset selected tip button styles
  selectedTip?.classList.remove(SELECTED_CLASS, TEXT_BLACK_CLASS);
  selectedTip = null;

  // Disable reset button
  resetButton.classList.remove(
    "bg-primary-cyan",
    "text-neutral-very-dark-cyan",
    "hover:bg-neutral-very-light-grayish-cyan"
  );
  resetButton.classList.add(
    "bg-neutral-dark-grayish-cyan/50",
    "text-neutral-dark-grayish-cyan"
  );
}

/**
 * Updates the tip amount and total amount per person based on inputs.
 * Shows error message if the number of people is zero.
 */
function updateOutput() {
  const billValue = parseFloat(billInput.value) || 0;
  const peopleValue = parseInt(peopleInput.value, 10) || 0;

  if (peopleValue === 0) {
    showError("Can't be zero"); // Display error for invalid input
    return;
  }

  hideError();

  if (billValue > 0 && peopleValue > 0) {
    // Enable reset button
    resetButton.classList.add(
      "bg-primary-cyan",
      "text-neutral-very-dark-cyan",
      "hover:bg-neutral-very-light-grayish-cyan"
    );
    resetButton.classList.remove(
      "bg-neutral-dark-grayish-cyan/50",
      "text-neutral-dark-grayish-cyan"
    );

    // Calculate tip and total amounts per person
    const tipAmount = (billValue * tipPercentage) / peopleValue;
    const totalAmount = (billValue * (1 + tipPercentage)) / peopleValue;

    // Update displays
    tipAmountDisplay.innerText = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.innerText = `$${totalAmount.toFixed(2)}`;
  } else {
    // Reset output displays if inputs are invalid
    tipAmountDisplay.innerText = "$0.00";
    totalAmountDisplay.innerText = "$0.00";
  }
}

/**
 * Displays an error message and applies error styles to the people input field.
 */
function showError(message) {
  errorDisplay.innerText = message; // Set error message
  errorDisplay.classList.remove(HIDDEN_CLASS); // Show error
  peopleInput.classList.add(ERROR_CLASS); // Apply error style
}

/**
 * Hides the error message and removes error styles from the people input field.
 */
function hideError() {
  errorDisplay.innerText = ""; // Clear error message
  errorDisplay.classList.add(HIDDEN_CLASS); // Hide error
  peopleInput.classList.remove(ERROR_CLASS); // Remove error style
}
