document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const metricBtn = document.getElementById('metric-btn');
    const imperialBtn = document.getElementById('imperial-btn');
    const metricInputs = document.getElementById('metric-inputs');
    const imperialInputs = document.getElementById('imperial-inputs');
    const bmiForm = document.getElementById('bmi-form');
    const resultContainer = document.getElementById('result-container');
    const bmiValueEl = document.getElementById('bmi-value');
    const bmiCategoryEl = document.getElementById('bmi-category');
    const bmiDescriptionEl = document.getElementById('bmi-description');
    const resultCircle = document.querySelector('.result-circle');

    let isMetric = true;

    // Toggle Units
    metricBtn.addEventListener('click', () => {
        isMetric = true;
        metricBtn.classList.add('active');
        imperialBtn.classList.remove('active');
        metricInputs.classList.add('active');
        imperialInputs.classList.remove('active');
        resetForm();
    });

    imperialBtn.addEventListener('click', () => {
        isMetric = false;
        imperialBtn.classList.add('active');
        metricBtn.classList.remove('active');
        imperialInputs.classList.add('active');
        metricInputs.classList.remove('active');
        resetForm();
    });

    function resetForm() {
        bmiForm.reset();
        resultContainer.classList.add('hidden');
    }

    // Calculate BMI
    bmiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let bmi = 0;

        if (isMetric) {
            const heightCm = parseFloat(document.getElementById('height-cm').value);
            const weightKg = parseFloat(document.getElementById('weight-kg').value);

            if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
                alert('Please enter valid positive numbers for height and weight.');
                return;
            }

            const heightM = heightCm / 100;
            bmi = weightKg / (heightM * heightM);
        } else {
            const heightFt = parseFloat(document.getElementById('height-ft').value) || 0;
            const heightIn = parseFloat(document.getElementById('height-in').value) || 0;
            const weightLbs = parseFloat(document.getElementById('weight-lbs').value);

            if ((heightFt === 0 && heightIn === 0) || !weightLbs || weightLbs <= 0) {
                alert('Please enter valid positive numbers for height and weight.');
                return;
            }

            const totalInches = (heightFt * 12) + heightIn;
            bmi = 703 * (weightLbs / (totalInches * totalInches));
        }

        displayResult(bmi);
    });

    function displayResult(bmi) {
        const roundedBmi = bmi.toFixed(1);
        bmiValueEl.textContent = roundedBmi;
        resultContainer.classList.remove('hidden');

        let category = '';
        let description = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            description = 'You are in the underweight range. It is recommended to eat more nutritious food.';
            color = '#3b82f6'; // Blue
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal';
            description = 'You have a healthy body weight. Good job! Keep it up.';
            color = '#10b981'; // Green
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            description = 'You are in the overweight range. Regular exercise and a balanced diet can help.';
            color = '#f59e0b'; // Orange
        } else {
            category = 'Obese';
            description = 'You are in the obese range. Please consult a healthcare provider for advice.';
            color = '#ef4444'; // Red
        }

        bmiCategoryEl.textContent = category;
        bmiDescriptionEl.textContent = description;
        bmiCategoryEl.style.color = color;
        resultCircle.style.borderColor = color;
        
        // Scroll to result on mobile
        if (window.innerWidth <= 480) {
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
