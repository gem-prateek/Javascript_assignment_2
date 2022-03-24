var form = document.getElementById("on_click");
//showtable();
form.addEventListener("click", function (e) {
  e.preventDefault();

  var f_name = document.forms["info"]["fname"].value;
  var l_name = document.forms["info"]["lname"].value;
  var email = document.forms["info"]["mail"].value;
  var phone_no = document.forms["info"]["number"].value;
  var nameFormate = /[^a-z]/gi;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phone_noFormate = /\D/g;
  let m1 = f_name.match(nameFormate);
  let m2 = l_name.match(nameFormate);
  let m3 = phone_no.match(phone_noFormate);
  var f = 0;
  var invaild = "";
  if (f_name == "") {
    f = 1;

    invaild += "Firstname ";
  } else if (m1 != null) {
    if (m1 != " ") {
      let x = document.getElementById("main");
      x.setAttribute(
        "class",
        "container border border-warning w-50 d-flex justify-content-center"
      );
      f = 1;

      invaild += "Fisrtname  ";
    }
  }
  if (l_name == "") {
    f = 1;

    invaild += "Lastname ";
  } else if (m2 != null) {
    if (m2 != " ") {
      f = 1;

      invaild += "Lastname ";
    }
  }

  if (!email.match(mailformat)) {
    f = 1;

    invaild += "Email ";
  }
  if (phone_no != "") {
    if (m3 != null) {
      f = 1;

      invaild += "Phone_no ";
    } else {
      if (phone_no.length != 10) {
        f = 1;

        invaild += "Phone_no ";
      }
    }
  }
  if (f != 0) {
    alert("Invaild " + invaild);
    return false;
  } else {
    storeValue(f_name, l_name, email, phone_no);
  }
});
function storeValue(fname, lname, email, phone_no) {
  localStorage.setItem("firstname", fname);
  localStorage.setItem("lastname", lname);
  localStorage.setItem("email", email);
  localStorage.setItem("phone_no", phone_no);
  showtable();
}
function showtable() {
  var basediv = document.getElementById("base");
  basediv.innerHTML = "";
  basediv.setAttribute("class", "d-flex justify-content-center m-5 ");
  var baseElements = ["Name", "Email", "Phone Number"];
  var data = [
    localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"),
    localStorage.getItem("email"),
    localStorage.getItem("phone_no"),
  ];

  var talbe = document.createElement("table");
  talbe.setAttribute("class", "table table-striped table-dark w-auto");

  basediv.appendChild(talbe);
  for (let i = 0; i < baseElements.length; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");

    let text1 = document.createTextNode(baseElements[i]);
    td1.appendChild(text1);
    let td2 = document.createElement("td");

    let text2 = document.createTextNode(data[i]);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    talbe.appendChild(tr);
  }
}
