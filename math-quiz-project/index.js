const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
let storedAnswer;
let score = 0;
 
 const randomQuestion = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
 };

 const generateQuestion = () =>{
    const num1 = randomQuestion(1,10);
    const num2 = randomQuestion(1,10);
    const question = `Q. What is ${num1} multiply by ${num2} ?`;
    const answer = num1 * num2;
    return {question, answer};
 };

 const showQuestion = () =>{
    const {question, answer} = generateQuestion();
    questionEl.innerText = question;
    storedAnswer = answer;
 };
 showQuestion();

 const checkAnswer = (event) =>{
    event.preventDefault();
    const userAnswer = parseInt(questionFormEl.answer.value);
    if(userAnswer === storedAnswer){
        score++;
    }else{
        score--;
    }
    scoreEl.innerText = score;
    questionFormEl.reset();
    showQuestion();
 };