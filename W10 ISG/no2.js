const crypto = require('crypto');
const fs = require('fs');
const readline = require('readline');

// Given MD5 hash
const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';

// Path to the downloaded password file
const passwordFilePath = '500-worst-passwords.txt';

// Function to perform dictionary attack
async function dictionaryAttack() {
    try {
        const fileStream = fs.createReadStream(passwordFilePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });

        for await (const password of rl) {
            // Generate the MD5 hash of the current password
            const hash = crypto.createHash('md5').update(password).digest('hex');

            // Compare the hash with the target hash
            if (hash === targetHash) {
                console.log(`Bob's password is: ${password}`);
                return;
            }
        }
        console.log('Password not found in the dictionary.');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Execute the dictionary attack
dictionaryAttack();
