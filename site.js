let questions = [
  {
    id: 1,
    question: "Are you making powerful and risky decisions?",
   
    options: ["Yes, always", "Sometimes" , "No, not really"],
  },
  {
    id: 2,
    question:
    "How well do you agree with this statement, \" I always go after opportunities because I know that anything is possible.\"?",
 
    options: ["Totally agree" , "Neutral" , "Disagree"],
  },
  {
    id: 3,
    question: "When you try something new, and it doesn't work, do you think:" ,
    
    options: ["It was fine, I'll have another go, but maybe try differently",
    "That always happens to me; I'm useless",
    "I won't try that again",
    ],
  },
  {
    id: 4,
    question: "How do you handle any uncomfortable situations?",
   
    options: ["With comfort and ease", "I procrastinate to deal with situations" , "I usually tend to run away from situation"],
  },
  {
    id: 5,
    question: "Do you think that low self-confidence is a factor in your business growth?",
   
  
    options: ["Yes, it's been affecting my business more than I care to admit.", "No, but I'm keenly aware of the importance of investing in myself. " , "No, low self-confidence has never hindered me from reaching my goals."],
  },
  {
    id: 6,
    question:
      " I have a set of realistic goals.",
     
   
    options: ["Always", "Often/Sometimes" , "Rarely/Never"],
  },
  {
id: 7 ,
question: "I am willing to accept the consequences of my own behavior.",
    options: ["Always ", "Often/Sometimes " , "Rarely/Never "],
    
  },
  {
    id: 8 ,
    question: " At a social event, do you immediately:",
        options: ["Breeze up to the nearest person and start talking", "Take a deep breath and look for someone you know" , "Never go to these events unless it's with a friend"],
        
      },
      {
        id: 9 ,
        question: "Given a complex problem to solve, do you:",
            options: ["Tackle it alone, pretty sure you can work it out", "Take a look, then ask for help" , "Don't bother to try; it's too difficult"],
            
          },




  {
    id: 10,
    question: "Do you frequently compare yourself with others?",
   
    options: ["Never",
      "Often/occasionally",
      "Constantly",
      ],
  },
  {
    id: 11,
    question: "Do you struggle to make decisions or stand by them?" ,
    options: ["Never ",
    "Sometimes ",
     "Yes, all the time"],
  },
  {
    id: 12,
    question: "How often do you feel unloved and unwanted?" ,
    options: ["Never    " , "Sometimes  " , "All the time "],
  },
  {
    id: 13,
    question: "Do you feel that your opinion matters?",
    
    options: ["Yes, but not everyone will agree with me" , "No, no one's interested" , "Don't have an opinion"],
},




 {
   id: 14,
   question: "Do you find it hard to say NO?" ,
   options: [	"Never     ",
    "Occasionally/Often",
    " Always",]
 },

{
  id: 15,
  question: "How much do you care what people think of you?" ,
  options: ["I don't care at all",
  "Generally, I only care about the views of my friends and family",
  "I judge everything by what others think of me",],
},


{
  id: 16,
  question: "Have you experienced any of the following? " ,
  options: ["Unsupportive or dismissive parents","Friends who are bad influences","Stressful life events","Trauma or abuse or bullying","None of the above",
  ],
},
{
  id: 17,
  question: "What have you gone/going through in the past/present? " ,
  options: ["Mood disorders such as depression","Anxiety","Loneliness","Ongoing medical issues","None of the above"
  ],
},
];

let question_count = 0;
//let points = 0;
Max_Questions = 17;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;


window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "getresponse.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  /*if (user_answer == questions[question_count].answer) {
   points += 10;
   
  }
  console.log(points);*/
  //trust(0)
  //console.log(questions[0].options[0])
  for (let i = 0; i < 15; i++) {
    if (user_answer == questions[i].options[0]){
      //console.log("hana")
      firstPoints += 1;
    }
}
for (let i = 0; i < 15; i++) {
  if (user_answer == questions[i].options[1]){
    secondPoints += 1;
    //console.log("tul")
  }
}
for (let i = 0; i < 15; i++) {
  if (user_answer == questions[i].options[2]){
    thirdPoints += 1;
   // console.log("set")
  }
}

   if(user_answer == "None of the above")
   {
     console.log("ottaeke")
   }

   else if(question_count == 15 ){
    // console.log("yol-set")
     sessionStorage.setItem("yolSet" , user_answer)
   }
   else if(question_count == 16 ){
    //console.log("yol-net")
    sessionStorage.setItem("yolNet" , user_answer)
  }
/*for (let i = 0; i = 14 ; i++){
             console.log(user_answer)
             sessionStorage.setItem("yolnet" , user_answer)
}
for (let i = 0; i = 15 ; i++){
  console.log(user_answer)
  sessionStorage.setItem("yolyetso" , user_answer)
}
  // if(user_answer == questions[0].options[0]){}
  if (user_answer === "I have a hard time gaining weight." || user_answer === "Mostly straight" || user_answer === "The same as your hips" || user_answer === "Bones" || user_answer === "Overlap" || user_answer === "Normal, Light" || user_answer === "Leg workouts are not my favorites." || user_answer === "No fat") {
    firstPoints += 1;
  }
  //neglect(1)
  else if (user_answer === "I both gain and lose weight without too much effort." || user_answer === "Hourglass" || user_answer === "Wider than your hips" || user_answer === "Muscles" || user_answer === "Touch" || user_answer==="Feel full and satisfied" || user_answer==="I am good with all type of workouts." || user_answer === "Upper body/equally stored in all body parts") {
    secondPoints += 1;
  }
  //guilt(2)
  else if (user_answer === "I gain weight easily." || user_answer === "Pear (narrow shoulders, wide hips)" || user_answer === "Narrower than your hips" || user_answer=== "Body fat" || user_answer === "Don't Touch" || user_answer === "Tired, bloated, lethargic" || user_answer === "I am really good with leg exercises comparing to other workouts." || user_answer === "Belly, hips, and thighs") {
    thirdPoints += 1;
  }
 */

  sessionStorage.setItem("first", firstPoints);
  sessionStorage.setItem("second", secondPoints);
  sessionStorage.setItem("third", thirdPoints);
 
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");
 

  progressBarFull.style.width = ` ${((question_count / Max_Questions) * 100 + 50 )}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");

  if(question_count <= 14) {
    let [first, second , third] = questions[count].options;
    ///////no of questions
  
    question.innerHTML = `
    <p class="iamquestion"> ${questions[count].question}</p>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>
   
  </ul> 
    `;
  }

  if(question_count > 14) {
    let [first, second , third , fourth , fifth] = questions[count].options;
    ///////no of questions
  
    question.innerHTML = `
    <p class="iamquestion"> ${questions[count].question}</p>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>
    <li ><span class="option">${fourth}</span></li>
    <li ><span class="option">${fifth}</span></li>
   
  </ul> 
    `;
    
  }

  toggleActive();
 
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
