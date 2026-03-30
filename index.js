// Gets the local hour from the user
let d = new Date();
let hour = d.getHours();

// Says the greeting depending on the local time
if (hour >= 6 && hour < 12) {
    document.getElementById('greet').textContent = 'Good morning ☀️';
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greet').textContent = 'Good afternoon 🌤️';
} else if (hour >= 17) {
    document.getElementById('greet').textContent = 'Good evening 🌙';
} else {
    document.getElementById('greet').textContent = 'Good night 🌌';
}
