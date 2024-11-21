const crypto = require('crypto');

// Given MD5 hash
const targetHash = '5531a5834816222280f20d1ef9e95f69';

// Function to brute-force the PIN
function bruteForcePIN() {
    for (let pin = 0; pin <= 9999; pin++) {
        // Format the PIN as a 4-digit string (e.g., "0001")
        const pinString = pin.toString().padStart(4, '0');

        // Generate the MD5 hash of the PIN
        const hash = crypto.createHash('md5').update(pinString).digest('hex');

        // Compare the generated hash with the target hash
        if (hash === targetHash) {
            console.log(`Alice's PIN is: ${pinString}`);
            return;
        }
    }
    console.log('PIN not found');
}

// Execute the brute-force attack
bruteForcePIN();
