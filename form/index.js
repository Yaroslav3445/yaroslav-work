function addMessage() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    let newMessage = document.createElement("p");

    newMessage.innerHTML = "<strong>" + name + "</strong> " + message;

    let messageList = document.getElementById("messageList");

    messageList.appendChild(newMessage);

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}





function submitForm() {
    let correctAnswers = 0;

    let form = document.getElementById("quizForm");

    let inputs = form.querySelectorAll("input[type='radio']");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            if (inputs[i].value === "correct") {
                correctAnswers++;
            }
        }
    }

    let result = document.getElementById("result");
    result.innerHTML = "Ваш результат: " + correctAnswers + " правильних відповідей.";

    return false;
}



function submitForm() {
    let inputText = document.getElementById("inputText").value;

    let outputElement = document.getElementById("outputText");

    outputElement.innerHTML = inputText;
    outputElement.classList.add("output-text");

    return false;
}


function submitForm() {
    let inputText = document.getElementById("inputText").value;

    let outputElement = document.getElementById("outputText");

    outputElement.innerHTML = inputText;
    outputElement.classList.add("output-text");

    return false;
}














function submitForm() {
    let correctAnswers = 0;

    let form = document.getElementById("quizForm");

    let inputs = form.querySelectorAll("input[type='radio']");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            if (inputs[i].value === "correct") {
                correctAnswers++;
            }
        }
    }

    let result = document.getElementById("result");
    result.innerHTML = "Ваш результат: " + correctAnswers + " правильних відповідей.";

    return false;
}













function submitFor() {
    let inputText = document.getElementById("inputText").value;

    let bold = document.getElementById("boldCheckbox").checked;
    let underline = document.getElementById("underlineCheckbox").checked;
    let italics = document.getElementById("italicsCheckbox").checked;
    let left = document.getElementById("leftCheckbox").checked;
    let right = document.getElementById("rightCheckbox").checked;
    let justify = document.getElementById("justifyCheckbox").checked;

    let outputElement = document.getElementById("outputText");

    outputElement.innerHTML = inputText;
    outputElement.classList = "output-text";

    if (bold) {
        outputElement.classList.add("text-bold");
    }
    if (underline) {
        outputElement.classList.add("text-underline");
    }
    if (italics) {
        outputElement.classList.add("text-italics");
    }
    if (left) {
        outputElement.classList.add("text-left");
    }
    if (right) {
        outputElement.classList.add("text-right");
    }
    if (justify) {
        outputElement.classList.add("text-justify");
    }

    return false;
}
































    let groups = ["Група 1", "Група 2", "Група 3"];
    let pairs = ["Пара 1", "Пара 2", "Пара 3"];
    let attendanceData = {};

    function showAttendance() {
      let attendanceList = document.getElementById("attendanceList");
      attendanceList.innerHTML = "";

      for (let group in attendanceData) {
        for (let pair in attendanceData[group]) {
          let topic = attendanceData[group][pair].topic;
          let students = attendanceData[group][pair].students;

          let listItem = document.createElement("li");
          listItem.innerHTML = "<strong>" + group + ", " + pair + "</strong><br>" +
                               "Тема: " + topic + "<br>" +
                               "Присутні: " + students.join(", ");

          attendanceList.appendChild(listItem);
        }
      }
    }

    function itForm() {
      let group = document.getElementById("groupSelect").value;
      let pair = document.getElementById("pairSelect").value;
      let topic = document.getElementById("topicInput").value;
      let students = [];

      let attendanceCheckboxes = document.getElementsByClassName("attendance-checkbox");
      for (let i = 0; i < attendanceCheckboxes.length; i++) {
        if (attendanceCheckboxes[i].checked) {
          students.push(attendanceCheckboxes[i].value);
        }
      }

      if (!attendanceData[group]) {
        attendanceData[group] = {};
      }

      attendanceData[group][pair] = {
        topic: topic,
        students: students
      };

      showAttendance();

      return false;
    }
























    