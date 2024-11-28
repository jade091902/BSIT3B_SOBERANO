
        function addNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const sum = num1 + num2;
            document.getElementById('result').innerText = `Result: ${sum}`;
        }

        function toggleMode() {
            const body = document.body;
            body.classList.toggle('dark');
            body.classList.toggle('light');
        }