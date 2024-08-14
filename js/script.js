// Function to handle gender selection
function selectGender(gender) {
    document.querySelectorAll('.gender-button').forEach(btn => btn.classList.remove('selected'));
    document.getElementById(gender).classList.add('selected');

    let genderInput = document.querySelector('input[name="gender"]');
    if (!genderInput) {
        genderInput = document.createElement('input');
        genderInput.type = 'hidden';
        genderInput.name = 'gender';
        document.getElementById('bmiform').appendChild(genderInput);
    }
    genderInput.value = gender;
}

// Function to calculate BMI
function calculateBMI(weight, height) {
    height = height / 100;
    return (weight / (height * height)).toFixed(1);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (!gender || !age || !weight || !height) {
        alert("Please fill in all fields and select a gender.");
        return;
    }

    const bmi = calculateBMI(weight, height);

    const result = document.getElementById('result');
    result.textContent = `Your BMI is ${bmi}.`;

    const explanation = document.getElementById('explanation');
    const bmiImage = document.getElementById('bmi-image');
    let explanationText = '';
    let imageUrl = '';

    if (bmi < 18.5) {
        explanationText = 'You are underweight. Do some bulking!';
        imageUrl = 'https://miro.medium.com/v2/resize:fit:1024/0*fZHfIkFAUpwT_-FH.jpg'; // Path to underweight image
    } else if (bmi < 24.9) {
        explanationText = 'You have a normal weight. Keep it up!';
        imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Normal_Weight_Obesity.jpg'; // Path to normal weight image
    } else if (bmi < 29.9) {
        explanationText = 'You are overweight. Cut your weight fat ass';
        imageUrl = 'https://thumbs.dreamstime.com/z/overweight-person-holds-his-belly-full-length-asian-body-studio-46065544.jpg'; // Path to overweight image
    } else {
        explanationText = 'You are obese. Go to the gym, you dont wanna end up like this guy';
        imageUrl = 'https://preview.redd.it/why-is-caseoh-so-fat-v0-nqpo85t53ufc1.png?width=960&format=png&auto=webp&s=17b572c2fe722f0fe8ffdcab4c444149ceb731f2'; // Path to obese image
    }

    explanation.textContent = explanationText;
    bmiImage.src = imageUrl;
    bmiImage.style.display = 'block';

    document.getElementById('bmi-result').style.display = 'block';
}

// Function to reset the form
function resetForm() {
    document.querySelectorAll('.gender-button').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('bmi-result').style.display = 'none';
    document.getElementById('bmi-image').style.display = 'none';
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('male').addEventListener('click', () => selectGender('male'));
    document.getElementById('female').addEventListener('click', () => selectGender('female'));

    document.getElementById('bmiform').addEventListener('submit', handleFormSubmit);
});
