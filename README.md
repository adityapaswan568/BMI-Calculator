# BMI Calculator

A modern, interactive Body Mass Index (BMI) calculator with a sleek glass-morphism design. This web application supports both metric and imperial units, providing instant BMI calculations with personalized health recommendations.

## Features

- **Dual Unit Support**: Switch seamlessly between Metric (kg/cm) and Imperial (lbs/ft) units
- **Real-time Calculation**: Instant BMI computation as you input your measurements
- **Health Categories**: Color-coded BMI categories with health descriptions:
  - Underweight (Blue)
  - Normal (Green)
  - Overweight (Orange)
  - Obese (Red)
- **Modern UI**: Glass-morphism design with animated gradient background blobs
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Input Validation**: Ensures valid positive numbers are entered before calculation

## BMI Categories

| Category | BMI Range | Status |
|----------|-----------|--------|
| Underweight | < 18.5 | Below healthy weight |
| Normal | 18.5 - 24.9 | Healthy weight |
| Overweight | 25.0 - 29.9 | Above healthy weight |
| Obese | ≥ 30.0 | Significantly above healthy weight |

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Select Unit System**: Choose between Metric or Imperial units
3. **Enter Measurements**:
   - For Metric: Height (cm) and Weight (kg)
   - For Imperial: Height (feet and inches) and Weight (lbs)
4. **Calculate**: Click the "Calculate BMI" button
5. **View Results**: Your BMI value and health category will be displayed with recommendations

## Project Structure

- `index.html` - HTML structure and markup
- `style.css` - Styling and animations
- `script.js` - Functionality and BMI calculation logic

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with glass-morphism effects, animations, and gradients
- **Vanilla JavaScript** - Pure JavaScript (no frameworks or libraries)

## Calculation Formula

### Metric (SI Units)
```
BMI = Weight (kg) / (Height (m))²
```

### Imperial Units
```
BMI = (Weight (lbs) / (Height (inches))²) × 703
```

## Browser Compatibility

Works on all modern browsers that support:
- CSS Grid and Flexbox
- CSS Backdrop Filter
- HTML5 Input Types
- ES6 JavaScript

## Installation

Simply clone or download the project and open `index.html` in your browser. No installation or dependencies required.

```bash
# No setup needed - just open in a browser
# Or if using a local server:
python -m http.server 8000
# Then navigate to http://localhost:8000
```

## Author

Created as a simple yet elegant BMI calculator web application.

## License

Free to use and modify for personal or educational purposes.
