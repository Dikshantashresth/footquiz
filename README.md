# Footquiz
This interactive quiz app is made with simple HTML, CSS, and JS and consists of questions related to football. It is a perfect spot for football knowledge and enthusiasts.

# Football Quiz App

This is a quiz application focused on the achievements of UEFA Champions League players, including both legendary players and new rising stars. The app fetches dynamic questions and answers from a JSON file, making extending and updating the content easy.

## Features

- Dynamic loading of questions related to UEFA Champions League history and players.
- Multiple choice questions with difficulty levels (Easy, Medium, Hard).
- Keeps track of the user's score and displays the highest score (localStorage).
- Option to reset the score and restart the quiz.

### /questions.json

This file contains an array of objects where each object represents a question. Each question has:

- `Question`: The text of the question.
- `options`: An array of possible answers.
- `Answer`: The correct answer.
- `difficulty`: The difficulty level of the question ("Easy", "Medium", "Hard").
  
/index.html
The HTML structure of the quiz app, where the questions and answers are rendered dynamically using JavaScript.

/style.css
Contains the basic styles for the quiz interface, including colors, fonts, and layout.

/script.js
The core JavaScript logic for:

Fetching the questions from the questions.json file.
Displaying the questions and options on the page.
Handling user interactions, such as selecting an answer and moving to the next question.
Tracking and displaying the user's score.
Managing the high score using localStorage.
Installation
Clone this repository to your local machine.

bash
Copy code
-git clone https://github.com/your-username/uefa-champions-league-quiz.git
Open the index.html file in your browser to play the quiz.

Usage
The quiz will load a question along with multiple-choice options.
Select an answer to move to the next question.
The app will display your current score and update the highest score achieved using localStorage.
You can reset the score by clicking the "Reset" button, which will also clear the local storage.
