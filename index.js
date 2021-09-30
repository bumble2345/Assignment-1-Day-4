const studlist = [];
const studfinallist = [];
const studname = [];
const studphnno = [];
const studmail = [];
const studfinallistelements = document.querySelector("#stud-list-final");
console.log(studfinallistelements);
document.querySelector("#submit_Btn").addEventListener("click", intakevalue);

function intakevalue() {
  const mail = document.querySelector("#mail_enter").value;
  const name = document.querySelector("#name_enter").value;
  const phno = document.querySelector("#phno_enter").value;
  console.log(name);
  console.log(phno);
  console.log(mail);
  if (name == "") {
    return;
  } else {
    const names = {
      names: name,
    };
    /*console.log(names);*/
    studname.unshift(names);
    console.log(studname);
    //display the added task
  }
  if (phno == "") {
    return;
  } else {
    const phnos = {
      studphnno: phno,
    };
    /*console.log(phnos);*/
    studphnno.unshift(phnos);
    console.log(studphnno);
    //display the added task
  }
  if (mail == "") {
    return;
  } else {
    const mailid = {
      email: mail,
    };
    /*console.log(mailid);*/
    studmail.unshift(mailid);
    console.log(studmail);
  }
  const studlist = {
    name: studname,
    phno: studphnno,
    mail: studmail,
  };
  console.log(studlist);
  studfinallist.unshift(studlist);
  console.log(studfinallist);
  displaystuddetails();
}
function displaystuddetails() {
  studfinallistelements.innerHTML = "";
  document.querySelector("#name_enter").value = "";
  document.querySelector("#phno_enter").value = "";
  document.querySelector("#mail_enter").value = "";
  studname.forEach((item) => {
    const studentname = document.createElement("li");
    studentname.innerHTML = item.names;
    console.log(studentname);
    studfinallistelements.appendChild(studentname);
  });
  studphnno.forEach((item) => {
    const studentphoneno = document.createElement("li");
    studentphoneno.innerHTML = item.studphnno;
    console.log(studentphoneno);
    studfinallistelements.appendChild(studentphoneno);
  });

  studmail.forEach((item) => {
    const studentmail = document.createElement("li");
    studentmail.innerHTML = item.email;
    console.log(studentmail);
    studfinallistelements.appendChild(studentmail);
  });
}
