# Frontend Mentor - Tip Calculator App

A responsive tip calculator app built with HTML, CSS, and JavaScript, allowing users to input the bill amount, select a tip percentage, and specify the number of people to split the bill, calculating the tip and total amount per person, as a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Lessons Learned](#lessons-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

The Tip Calculator App allows users to:

- Enter the bill amount and the number of people splitting the bill.
- Choose from preset tip percentages or input a custom percentage.
- See real-time calculations of the tip and total amount per person.
- Reset all inputs and outputs with a single click.

### Screenshots

#### Desktop View

![tip-calculator-app-desktop](https://github.com/user-attachments/assets/c771c2e7-cf28-4008-a32b-6e6b8fb0d69a)

#### Completed

![tip-calculator-app-completed](https://github.com/user-attachments/assets/6d77d8a2-04ce-4c48-8c88-c4373888c592)

#### Active States

![tip-calculator-app-active-states](https://github.com/user-attachments/assets/99950452-811b-4608-880e-9f6b1b43e385)

#### Tablet View

![tip-calculator-app-tablet](https://github.com/user-attachments/assets/e14949ca-e240-4e61-a581-4eda30da6540)

#### Mobile View

![tip-calculator-app-mobile](https://github.com/user-attachments/assets/5879d34a-9b0c-4d37-aa86-f5220d74e181)

### Live Demo

You can view the live project here: [Live Site](https://enchanted-harbor.surge.sh/)

---

## Features

- **Responsive Design**: Adapts to different screen sizes, providing an optimal layout for mobile and desktop users.
- **Real-time Updates**: Automatically calculates tips and totals as inputs are provided.
- **Error Handling**: Displays warnings for invalid input, such as a zero or negative number of people.
- **Custom Tip Option**: Users can input a custom tip percentage if preset options don't meet their needs.
- **Reset Functionality**: Easily clears all input fields and resets displayed calculations.

---

## Technologies Used

- **HTML5**: Semantic structure for accessibility and clarity.
- **Tailwind CSS**: For quick and efficient styling, leveraging utility-first CSS classes.
- **JavaScript**: To manage state and dynamically update the UI.
- **Google Fonts**: For the sleek and modern `Space Mono` font.
- **Frontend Mentor**: As the challenge provider.

---

## Lessons Learned

### **Dynamic DOM Manipulation**

- **State Management**: I improved my understanding of managing and updating the DOM based on user inputs. This project required a lot of dynamic changes, such as updating the tip and total amounts as soon as the user interacts with the inputs. The ability to programmatically manipulate the DOM elements helped me build a seamless and responsive user experience.

  Example: Clearing the custom tip input when a predefined tip is selected.

  ```js
  if (selectedTip.nodeName !== "INPUT") {
    customTipInput.value = ""; // Reset custom tip input
  }
  ```

### **Event Handling and Validation**

- **Multiple Event Listeners**: I practiced handling multiple events like `input`, `click`, and `change` efficiently, especially when interacting with various form elements (bill, people, tip selection). Adding listeners for form validation allowed me to provide real-time feedback to users and prevent submitting invalid data.

  Example: Validating and clearing invalid input:

  ```js
  if (value < 0 || isNaN(value)) {
    input.value = ""; // Reset invalid input
  }
  ```

### **Error Handling and User Feedback**

- **Conditional Styling for Errors**: Handling edge cases like invalid inputs (e.g., zero or negative people) and providing appropriate feedback (like showing an error message and styling the input field) was a valuable learning experience. It allowed me to learn how to manage both the logic and the visual cues for errors.

  Example: Displaying an error message:

  ```js
  errorDisplay.innerText = "Can't be zero"; // Set error message
  errorDisplay.classList.remove(HIDDEN_CLASS); // Show error
  peopleInput.classList.add(ERROR_CLASS); // Apply error style
  ```

### **Custom Tip Input Handling**

- **Flexible User Inputs**: Allowing users to input a custom tip percentage required handling non-numeric values gracefully. This taught me how to implement robust input validation to handle both preset values and custom inputs efficiently.

  Example: Handling custom tip input:

  ```js
  const customValue = parseFloat(customTipInput.value);
  tipPercentage = customValue > 0 ? customValue / 100 : 0; // Convert to decimal
  ```

### **Mobile-First Design**

- **Responsive Design**: Designing the app for mobile first allowed me to focus on the core functionality first and later scale it up for larger screens. Using **Flexbox** and **CSS Grid** gave me flexibility to create responsive layouts that adapt to different screen sizes.

  Example: Mobile-first layout using Flexbox:

  ```css
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ```

### **Tailwind CSS**

- **Utility-First Approach**: Learning Tailwind CSS was a game-changer. Its utility-first approach allowed me to quickly build a polished interface without writing custom CSS rules. The built-in responsiveness and customizability also made it easy to adjust the design as I went along.

  Example: Styling with Tailwind classes:

  ```html
  <button
    class="bg-primary-cyan text-white hover:bg-primary-light-cyan py-2 px-4 rounded"
  >
    Tip 15%
  </button>
  ```

### **Refining User Interface (UI) and User Experience (UX)**

- **Hover States and Interactive Elements**: I focused on providing clear visual feedback for interactive elements, such as hover states for buttons and inputs. This helped in enhancing the overall user experience, making the app intuitive and easy to use.

  Example: Hover effect with Tailwind:

  ```html
  <button class="hover:bg-primary-light-cyan">Reset</button>
  ```

### **Best Practices in JavaScript**

- **Separation of Concerns**: I ensured that the JavaScript logic for calculating the tip was separate from the HTML and CSS, following best practices for cleaner and more maintainable code. This made it easier to adjust and debug the application.

  Example: Keeping the logic inside functions for better readability and maintenance:

  ```js
  function handleTipSelection(event) {
    selectedTip = event.target;
    updateOutput(); // Separate logic for updating the output
  }
  ```

---

## Author

- GitHub - [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn - [@sayaliakbar](https://linkedin.com/in/sayaliakbar)

---

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the engaging challenge. Their platform provides an excellent environment for skill development with real-world projects.
