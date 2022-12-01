
pointS = 0;
correct_Answers = 0;

var first_Question = prompt("When was the world war 2?");

if (+first_Question === 1939) {
    pointS += 10;
    correct_Answers += 1;

}

var second_Question = prompt("What was the name of the first president of USA?");

if (second_Question.toLowerCase().trim() === "george") {
    pointS += 10;
    correct_Answers += 1;

}

var third_Question = prompt("In what year Odessa was built?");

if (+third_Question === 1794) {
    pointS += 10;
    correct_Answers += 1;
}

var fourth_Question = prompt("Who is Michael Jordan?");

if (fourth_Question.toLowerCase().trim() === "basketball player" || fourth_Question.toLowerCase().trim() === "legend") {
    pointS += 10;
    correct_Answers += 1;
}

var fifth_Question = prompt("How many days in a year?");

if (+fifth_Question === 365 || +fifth_Question === 366) {
    pointS += 10;
    correct_Answers += 1;
}

alert(`You've earned ${pointS} points and answered ${correct_Answers}/5 questions`);
