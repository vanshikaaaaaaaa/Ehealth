function trackHealth() {
    const steps = document.getElementById('steps').value;
    const calories = document.getElementById('calories').value;
    const sleep = document.getElementById('sleep').value;
    const water = document.getElementById('water').value;

    if (!steps || !calories || !sleep || !water) {
        alert('Please fill in all fields');
        return;
    }

    const results = `
        <h2>Today's Health Tracking</h2>
        <p>Steps: ${steps}</p>
        <p>Calorie Intake: ${calories} kcal</p>
        <p>Sleep Hours: ${sleep} hours</p>
        <p>Water Intake: ${water} liters</p>
    `;

    document.getElementById('results').innerHTML = results;
}
