# Typing Speed Challenge

Welcome to the **Typing Speed Challenge**! This is a simple CLI-based game that tests how quickly and accurately you can type sentences. The game randomly generates a sentence for you to type, measures the time it takes, and calculates your typing speed in words per minute (WPM).

## Features
- Randomly selects a sentence from a predefined list.
- Measures typing time and calculates WPM.
- Provides feedback on accuracy and typing speed.
- Replay option to keep improving your skills.

---

## Installation

1. Clone the repository or download the code.
2. Make sure you have Node.js installed on your system.
3. Install the `prompt-sync` package for handling user input:
   ```bash
   npm install prompt-sync
   ```

---

## Usage

1. Open your terminal or command prompt.
2. Navigate to the project directory.
3. Run the program using:
   ```bash
   node typingSpeedChallenge.js
   ```

---

## Example Gameplay

Here’s an example of what playing the game looks like:

```
Welcome to the Typing Speed Challenge!
Type the following sentence as quickly and accurately as you can:

Sentence: "The quick brown fox jumps over the lazy dog."

Your input: The quick brown fox jumps over the lazy dog.

Great job! You typed the sentence correctly.
Time taken: 9.45 seconds
Typing speed: 57 WPM

Do you want to try again? (yes/no): yes
```

If you make a mistake:

```
Welcome to the Typing Speed Challenge!
Type the following sentence as quickly and accurately as you can:

Sentence: "Practice makes perfect, so keep typing!"

Your input: Practice makes perfect, so keep tying.

Oops! There were mistakes in your typing.
You typed: "Practice makes perfect, so keep tying."
The correct sentence was: "Practice makes perfect, so keep typing!"

Do you want to try again? (yes/no): no
```

---

## How It Works

1. The game displays a random sentence.
2. You type the sentence as quickly and accurately as possible.
3. The program measures your typing time and checks for accuracy.
4. If you type correctly, it calculates and displays your typing speed (WPM).
5. You can choose to replay or exit after each round.

