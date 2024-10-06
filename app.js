const Users = [];

// Get Submit Input
const submit = document.getElementById("submitInput");

// Get Error Divs
const nameError = document.getElementById("nameError1");
const lastNameError = document.getElementById("nameError2");
const mailError = document.getElementById("mailError");
const pwError = document.getElementById("pwError");

// Get Correct Sign In
const correctSign = document.getElementById("correct-sign");

// Submit Event
submit.addEventListener("click", (evento) => {
    evento.preventDefault();

    const firstName = document.getElementById("nameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const mail = document.getElementById("mailInput").value;
    const pw = document.getElementById("pwInput").value;

    // Reset error messages
    nameError.innerText = "";
    lastNameError.innerText = "";
    mailError.innerText = "";
    pwError.innerText = "";
    correctSign.innerText = "";

    // Error Validation
    let hasErrors = false; // Variable para verificar si hay errores

    if (firstName === "") {
        nameError.innerText = "Invalid First Name, Please Enter a Correct One";
        nameError.style.color = "red";
        nameError.style.fontWeight = "bold";
        nameError.style.fontSize = "12px";
        nameError.style.marginLeft = "4px";
        hasErrors = true; // Hay un error
    }

    if (lastName === "") {
        lastNameError.innerText = "Invalid Last Name, Please Enter a Correct One";
        lastNameError.style.color = "red";
        lastNameError.style.fontWeight = "bold";
        lastNameError.style.fontSize = "12px";
        lastNameError.style.marginLeft = "4px";
        hasErrors = true; // Hay un error
    }

    if (mail === "") {
        mailError.innerText = "Invalid Mail Address, Please Enter a Correct One";
        mailError.style.color = "red";
        mailError.style.fontWeight = "bold";
        mailError.style.fontSize = "12px";
        mailError.style.marginLeft = "4px";
        hasErrors = true; // Hay un error
    }

    if (pw === "") {
        pwError.innerText = "Invalid Password, Please Enter a Correct One";
        pwError.style.color = "red";
        pwError.style.fontWeight = "bold";
        pwError.style.fontSize = "12px";
        pwError.style.marginLeft = "4px";
        hasErrors = true; // Hay un error
    }

    // Si hay errores, no continuar
    if (hasErrors) {
        return; // Salir de la función
    }

    // Crear objeto Data
    const Data = {
        FirstName: firstName,
        LastName: lastName,
        Email: mail,
        Password: pw
    };

    // Email Exist?
    const exists = Users.some(user => user.Email === Data.Email);

    if (exists) {
        correctSign.innerText = "Email already exists, please change it";
        correctSign.style.color = "red";
        correctSign.style.fontWeight = "bold";
        correctSign.style.fontSize = "16px";
        correctSign.style.marginLeft = "4px";
    } else {
        // Push Data to Users
        Users.push(Data);

        // String to Json
        let finalData = JSON.stringify(Users);

        // Set to localStorage
        localStorage.setItem("usersDatabase", finalData);
        correctSign.innerText = "Successful Sign In !!";
        correctSign.style.color = "green";
        correctSign.style.fontWeight = "600";
        correctSign.style.fontSize = "18px";
        correctSign.style.marginLeft = "4px";
    }
});