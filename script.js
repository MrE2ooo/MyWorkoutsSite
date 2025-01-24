// Function to fetch workouts from the API
async function fetchWorkouts(category = null) {
    let url = 'http://localhost/MyWebsite/workout_api.php';
    if (category) {
        url += `?category=${encodeURIComponent(category)}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWorkouts(data);
    } catch (error) {
        console.error('Error fetching workouts:', error);
        document.getElementById('workout-list').innerHTML = `<p>Error loading workouts. Please try again later.</p>`;
    }
}

// Function to display workouts on the page
function displayWorkouts(workouts) {
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = ''; // Clear previous content

    if (typeof workouts === 'object' && !Array.isArray(workouts)) {
        // If workouts is an object (e.g., all categories)
        for (const category in workouts) {
            const categoryHeader = document.createElement('h3');
            categoryHeader.textContent = category;
            workoutList.appendChild(categoryHeader);

            const ul = document.createElement('ul');
            workouts[category].forEach(workout => {
                const li = document.createElement('li');
                li.textContent = workout;
                ul.appendChild(li);
            });
            workoutList.appendChild(ul);
        }
    } else if (Array.isArray(workouts)) {
        // If workouts is an array (e.g., specific category)
        const ul = document.createElement('ul');
        workouts.forEach(workout => {
            const li = document.createElement('li');
            li.textContent = workout;
            ul.appendChild(li);
        });
        workoutList.appendChild(ul);
    } else {
        workoutList.innerHTML = `<p>No workouts found.</p>`;
    }
}

// Fetch all workouts when the page loads
window.onload = fetchWorkouts;