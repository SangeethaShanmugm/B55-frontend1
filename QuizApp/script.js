const quizData = [
    {
        question: "Javascript is an _______ language?",
        a: "Object Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both a and b",
        d: "None of the above",
        correct: "c"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementById()",
        b: "getElementByClassName()",
        c: "Both a and b",
        d: "None of the above",
        correct: "c"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript??",
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
        correct: "d"
    },
]

console.log(quizData)

//quiz container

let quiz = document.getElementById("quiz")

let questionHeading = document.getElementById("questionHeading");

//AllOptionList
//querySelectorAll => radio buttons

const optionList = document.querySelectorAll(".optionList")
console.log(optionList)

//Each option

const aOption = document.getElementById("aOption")
const bOption = document.getElementById("bOption")
const cOption = document.getElementById("cOption")
const dOption = document.getElementById("dOption")

//button next

const nextBtn = document.getElementById("submit")

let currentQuizCount = 0;
let score = 0;

function loadQuizData() {
    deSelectOption()

    let currentQuizData = quizData[currentQuizCount]
    console.log(currentQuizData.question)
    questionHeading.innerText = currentQuizData.question
    aOption.innerText = currentQuizData.a
    bOption.innerText = currentQuizData.b
    cOption.innerText = currentQuizData.c
    dOption.innerText = currentQuizData.d
}

loadQuizData()

function deSelectOption() {
    optionList.forEach((element) => element.checked = false)
}

function getSelected() {
    let selectedAnswer;
    optionList.forEach((element) => {
        if (element.checked) {
            console.log(element.id)
            selectedAnswer = element.id
        }
    })
    return selectedAnswer;

}


nextBtn.addEventListener("click", () => {
    let answer = getSelected()
    console.log(answer)
    if (answer) {
        console.log(true)
        if (answer === quizData[currentQuizCount].correct) {
            console.log(true)
            score++;
            console.log("Score", score)
        }
        currentQuizCount++;
        if (currentQuizCount < quizData.length) {
            loadQuizData()
        } else {
            quiz.innerHTML = (`<h2>Your Score is ${score}/${quizData.length}</h2>`)
            document.body.style.backgroundImage = "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtbWlzY3RleHR1cmUwMS1hZS0wNTAtMDEtMDMuanBn.jpg')"
        }

    }
})




const arr1 = [1, 2, [3, 4]]
//            0. 1,    
const arr2 = JSON.parse(JSON.stringify(arr1))

arr2[2][0] = 100

console.log(arr1)
console.log(arr2)