# Calculator App

This is a simple React application for calculating the estimated travel time based on distance and speed. The project uses Vite for development.

## Installation

1. **Clone the repository:**

   ```
   git clone git@github.com:Old-Dead-One/eta-calculator-ts.git
   cd eta-calculator
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

## Code Overview

### `Calculator` Component

This component handles the input, calculation, and display logic for the app.

#### State Variables

- `distance`: Stores the distance traveled.
- `speed`: Stores the speed at which you travel.
- `time`: Stores the calculated travel time based on distance and speed.

#### Methods

- `etaCalculator(e)`: Takes in distance and speed and returns the travel time in hours and minutes.
- `handleSubmit(e)`: Handles the form submission, triggering the calculations for exact travel time.

## Usage

1. Open the application in your browser.
2. Enter your travel distance in the "distance" field.
3. Select the speed input and enter the "speed" you will be traveling.
4. Click the "Calculate" button.
5. The application will display the travel time in hours and minuites based on the distance and speed entered.
