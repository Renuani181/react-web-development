const dateDayElement = document.getElementById("clock-container");
const hoursElement = document.getElementById("hours-data");
const minutesElement = document.getElementById("minutes-data");
const secondsElement = document.getElementById("seconds-data");

const formatRadios = document.querySelectorAll('input[name="hour-format"]');
let hourFormat = "12"; // Default format

// Add event listeners to the radio buttons to change the format
formatRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        hourFormat = event.target.value;
        getDigitalClock(); // Refresh the display immediately when the format is changed
    });
});

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const getDigitalClock = () => {
    const today = new Date();

    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const weekDay = weekdays[today.getDay()];
    let hours = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    // Format the hour based on the selected format
    if (hourFormat === "12") {
        hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format without AM/PM
    }
    hoursElement.innerText = String(hours).padStart(2, '0'); // Display formatted hours

    dateDayElement.innerText = `${date} ${month} ${year}, ${weekDay}`;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
};

setInterval(() => {
    getDigitalClock();
}, 1000);

// Call the function initially to display time immediately on page load
getDigitalClock();
