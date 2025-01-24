<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyWorkouts</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>MyWorkouts</h1>
        <p>Explore workout routines for Core, Upper Body, and Lower Body.</p>
    </header>

    <main>
        <section>
            <h2>Workout Categories</h2>
            <div class="buttons">
                <button onclick="fetchWorkouts()">All Workouts</button>
                <button onclick="fetchWorkouts('Core')">Core Workouts</button>
                <button onclick="fetchWorkouts('Upper Body')">Upper Body Workouts</button>
                <button onclick="fetchWorkouts('Lower Body')">Lower Body Workouts</button>
            </div>
        </section>

        <section>
            <h2>Workout List</h2>
            <div id="workout-list" class="workout-list">
                <!-- Workouts will be displayed here dynamically -->
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 MyWorkouts. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>