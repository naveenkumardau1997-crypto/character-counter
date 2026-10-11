
// STEP 1: Get HTML Elements

const message = document.getElementById("message");

const characterCount = document.getElementById("characterCount");

const remainingCount = document.getElementById("remainingCount");

const warningMessage = document.getElementById("warningMessage");


// STEP 2: Set Maximum Character Limit

const maxCharacters = 200;


// STEP 3: Listen for User Input

message.addEventListener("input", function () {

    // Get the number of characters typed

    const typedCharacters = message.value.length;


    // Calculate remaining characters

    const remainingCharacters = maxCharacters - typedCharacters;


    // Display the character count

    characterCount.textContent =
        typedCharacters + " / " + maxCharacters + " characters";


    // Display remaining characters

    remainingCount.textContent =
        remainingCharacters + " characters remaining";


    // STEP 4: Display Warning Message

    if (typedCharacters === maxCharacters) {

        warningMessage.textContent =
            "Warning! You have reached the 200-character limit.";

    } else {

        warningMessage.textContent = "";

    }

}); 
