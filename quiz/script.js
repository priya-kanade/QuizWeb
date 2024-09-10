const quizData = [
    {
       question: "What is the full form of SQL?",
       a: "Structured Query List",
       b: "Structure Query Language",
       c: "Sample Query Language",
       d: "None of these.",
       correct: "b",
   },

   {
       question: "In SQL, which clause is typically used with aggregate functions?",
       a: " WHERE",
       b: "HAVING",
       c: "SELECT",
       d: " ORDER BY",
       correct: "b",
   },
   {
       question: "What does the DISTINCT clause do in SQL?",
       a: "Orders the result set",
       b: "Filters rows based on specified conditions",
       c: "Groups rows based on common values",
       d: "Removes duplicate rows from the result set",
       correct: "d",
   },
   {
       question: "Which clause is used for pagination purposes in SQL?",
       a: "GROUP BY",
       b: "HAVING",
       c: " LIMIT / OFFSET",
       d: "DISTINCT",
       correct: "c",
   },
   {
       question: "Which clause is responsible for grouping rows based on common values?",
       a: " ORDER BY",
       b: "HAVING",
       c: "GROUP BY",
       d: "DISTINCT",
       correct: "c",
   },
       {
       question: "Which statement is used to delete all rows in a table without having the action logged?",
       a: "DELETE",
       b: "REMOVE",
       c: "DROP",
       d: "TRUNCATE",
       correct: "d",
   },
   {
       question: "How many Primary keys can have in a table?",
       a: "Only 1",
       b: "Only 2",
       c: "Depends on no of Columns",
       d: "NULL",
       correct: "a",
   },
   {
       question: "Which of the following is not Constraint in SQL?",
       a: "Primary Key",
       b: "Not Null",
       c: "Check",
       d: "Union",
       correct: "d",
   },
        {
       question: "Which operator is used to compare a value to a specified list of values?",
       a: "ANY",
       b: "BETWEEN",
       c: "ALL",
       d: "IN",
       correct: "d",
   },
   {
       question: " What operator tests column for absence of data?",
       a: "NOT Operator",
       b: "Exists Operator",
       c: "IS NULL Operator",
       d: "None of the above",
       correct: "c",
   },



];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
   deselectAnswers()

   const currentQuizData = quizData[currentQuiz]

   questionEl.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
   answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
   let answer

   answerEls.forEach(answerEl => {
       if(answerEl.checked) {
           answer = answerEl.id
       }
   })

   return answer
}

submitBtn.addEventListener('click', () => {
   const answer = getSelected()
   
   if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
               <h2>You answered ${score}/${quizData.length} questions correctly</h2>

               <button onclick="location.reload()">Reload</button>
           `
       }
   }
})