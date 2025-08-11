 document.querySelector('form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;

        if (!name || !phone || !email || !age) {
            event.preventDefault();
            alert('Please fill out all required fields.');
        }
    });

    document.querySelector('select').addEventListener('change', function(event) {
        if (event.target.value === "") {
            alert('Please select a valid option.');
        }
    });

    document.getElementById('marital-status').addEventListener('change', function(event) {
        if (event.target.value === "") {
            alert('Please select a valid marital status.');
        }
    });

    document.getElementById('phone').addEventListener('input', function(event) {
        const pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        if (!pattern.test(event.target.value)) {
            alert('Phone number must be in the format 123-456-7890');
        }
    });

    document.getElementById('email').addEventListener('input', function(event) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(event.target.value)) {
            alert('Please enter a valid email address.');
        }
    });

    document.getElementById('age').addEventListener('input', function(event) {
        const age = parseInt(event.target.value, 10);
        if (isNaN(age) || age < 0 || age > 120) {
            alert('Please enter a valid age between 0 and 120.');
        }
    });

