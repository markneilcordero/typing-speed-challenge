const prompt = require('prompt-sync')( { sigint: true });

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a versatile programming language.",
    "Practice makes perfect, so keep typing!",
    "A journey of a thousand miles begins with a single step.",
    "Typing fast and accurately requires consistent practice.",
];

function getRandomSentence()
{
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function calculateWPM(wordCount, timeInSeconds)
{
    const minutes = timeInSeconds / 60;
    return Math.round(wordCount / minutes);
}

function startTypingChallenge()
{
    console.log("Welcome to the Typing Speed Challenge!");
    console.log("Type the following sentence as quickly and accurately as you can:\n");

    const sentence = getRandomSentence();
    console.log(`Sentence: "${sentence}"\n`);

    const startTime = Date.now();

    const userInput = prompt("Your input: ");

    const endTime = Date.now();

    const timeTaken = (endTime - startTime) / 1000;

    if (userInput === sentence)
    {
        const wordCount = sentence.split(" ").length;
        const wpm = calculateWPM(wordCount, timeTaken);

        console.log("\nGreat job! You typed the sentence correctly.");
        console.log(`Time taken: ${timeTaken.toFixed(2)} seconds`);
        console.log(`Typing speed: ${wpm} WPM`);
    }
    else
    {
        console.log("\nOops! There were mistakes in your typing.");
        console.log(`You typed: "${userInput}"`);
        console.log(`The correct sentence was: "${sentence}"`);
    }

    const playAgain = prompt("\nDo you want to try again? (yes/no): ").toLowerCase();
    if (playAgain === "yes")
    {
        console.clear();
        startTypingChallenge();
    }
    else
    {
        console.log("\nThank you for playing the Typing Speed Challenge. Goodbye!");
    }
}

startTypingChallenge();