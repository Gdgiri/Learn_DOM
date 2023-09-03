document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');
    const statusDiv = document.getElementById('booking-status');
    const seatsContainer = document.querySelector('.seats');

    const totalSeats = 25; // Number of seats in the bus

    // Initialize seats
    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.textContent = i;
        seatsContainer.appendChild(seat);
    }

    const seats = document.querySelectorAll('.seat');

    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            if (!seat.classList.contains('disabled')) {
                seat.classList.toggle('selected');
            }
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const route = document.getElementById('route').value;
        const selectedSeats = [...document.querySelectorAll('.selected')].map(seat => seat.textContent);

        // Simulate booking process
        setTimeout(() => {
            statusDiv.textContent = `Ticket booked for ${name} on ${route}. Seat(s) ${selectedSeats.join(', ')} are booked.`;
        }, 1000);
    });
});
