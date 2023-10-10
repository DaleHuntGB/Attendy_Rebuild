function createChart(chartName, pData) {
  new Chart(chartName, {
    type: "doughnut",
    data: {
      labels: ["Attended", "Missed"],
      datasets: [
        {
          backgroundColor: ["#6EECA8", "#FB6565"],
          borderAlign: ["outer", "outer"],
          borderColor: ["#000000", "#000000"],
          borderWidth: [0, 0],
          data: pData,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      cutoutPercentage: 85,
    },
  });
}

function UpdateDetails() {
  let localStorageFile = localStorage.getItem("jsonData");
  let jsonFile = JSON.parse(localStorageFile);
  let studentID = localStorage.getItem("studentID");
  var allMeetings = 0;
  var attended = 0;
  var missed = 0;
  var currentAllMeetings = 0;
  var currentAttended = 0;
  var attendanceData = [];
  let modules = jsonFile.data[studentID].enlisted_modules;
  let ModuleHeading = document.querySelectorAll(".ModuleContainer h1")
  let ModuleCanvas = document.querySelectorAll(".ModuleContainer p canvas")
  let ModuleAttendance = document.querySelectorAll(".ModuleContainerAttendance")
  let ModuleAbsence = document.querySelectorAll(".ModuleContainerAbsence")

  for (i = 0; i < modules.length; i++) {
      ModuleHeading[i].textContent = modules[i]
      ModuleCanvas[i].id = modules[i];
      currentAllMeetings = jsonFile.data[studentID].attendance[modules[i]].meetings;
      currentAttended = jsonFile.data[studentID].attendance[modules[i]].entries_num;
      missed = currentAllMeetings - currentAttended;
      ModuleAttendance[i].textContent = "Attended: " + currentAttended
      ModuleAbsence[i].textContent = "Absent: " + missed

      let chartData = [currentAttended, missed];
      createChart(modules[i], chartData);
      allMeetings += currentAllMeetings;
      attended += currentAttended;
  }
    missed = allMeetings - attended;  
    attendanceData = [attended, missed];
    let name = "OverallAttendanceDonut";
    createChart(name, attendanceData);
}

function getAllMeetings(jsonFile, studentID, module) {
  return jsonFile.data[studentID].attendance[module].meetings;
}

window.onload = UpdateDetails;
