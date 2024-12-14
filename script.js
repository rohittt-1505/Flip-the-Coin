document.getElementById('flipButton').addEventListener('click', flipCoin);

function flipCoin() {
    const coin = document.getElementById('coin');
    
    // Start the fan-like fast rotation
    let degree = 0;
    let speed = 50; // Increased initial speed (higher values = faster)
    
    // Randomly pick 'Heads' or 'Tails' before starting the rotation
    const initialSide = Math.random() < 0.5 ? 'Heads' : 'Tails';
    // Set initial text to random result on the front side
    if (initialSide === 'Heads') {
        coin.querySelector('.front').textContent = 'Heads';
        coin.querySelector('.back').textContent = 'Tails';
    } else {
        coin.querySelector('.front').textContent = 'Tails';
        coin.querySelector('.back').textContent = 'Heads';
    }

    let rotationInterval = setInterval(() => {
        coin.style.transform = `rotateY(${degree}deg)`;
        degree += speed; // Increase rotation by 'speed' degrees

        if (speed > 2) {
            speed -= 0.5; // Slow down the speed gradually
        }
    }, 20); // Faster interval (lower values = faster rotation)

    // After 3 seconds, stop the coin with a random result
    setTimeout(() => {
        clearInterval(rotationInterval); // Stop the rotation interval

        // Randomly pick 'Heads' or 'Tails' for the final result
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        // Set the result after the coin stops and align it to the front
        coin.querySelector('.front').textContent = result;
        coin.querySelector('.back').textContent = (result === 'Heads' ? 'Tails' : 'Heads');
        coin.style.transform = `rotateY(${Math.random() < 0.5 ? 0 : 180}deg)`; // Stop at front or back randomly
    }, 3000); // The rotation will run for 3 seconds before stopping
}
