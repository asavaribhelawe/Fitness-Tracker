// Mock data
const workouts = [
    { id: 1, name: 'Running', duration: '30 mins', caloriesBurned: 300 },
    { id: 2, name: 'Cycling', duration: '45 mins', caloriesBurned: 400 },
    // Add more workout data here
];

// Function to display workouts
function displayWorkouts() {
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = '';

    workouts.forEach(workout => {
        const workoutItem = document.createElement('div');
        workoutItem.classList.add('workout-item');
        workoutItem.innerHTML = `
            <h3>${workout.name}</h3>
            <p><strong>Duration:</strong> ${workout.duration}</p>
            <p><strong>Calories Burned:</strong> ${workout.caloriesBurned}</p>
        `;
        workoutList.appendChild(workoutItem);
    });
}

// Initialize app
function init() {
    displayWorkouts();
}

// Run init function when the page loads
document.addEventListener('DOMContentLoaded', init);
