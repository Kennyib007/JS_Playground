//create dummy object to store user details
const userDatabase = {
    "kenny56565" : {
        firstName: "Kehinde",
        lastName: "Ibrahim",
        email: "kennycatch97@gmail.com",
        accountActivated: true,
        password: "kenny7676"
    },
    "taiwo344" : {
        firstName: "Taiwo",
        lastName: "Omolola",
        email: "Taiwob56@gmail.com",
        accountActivated: false,
        password: "bigt88990"
    },
    "malik3713" : {
        firstName: "malik",
        lastName: "tayo",
        email: "maliktayo97@gmail.com",
        accountActivated: true,
        password: "kosohi22334"
    },
    "quadri7777" : {
        firstName: "quadri",
        lastName: "bayo",
        email: "bayo97@gmail.com",
        accountActivated: true,
        password: "resolve66666"
    }


}


function displayUserDetails() {
    //Enter username
    let username = prompt("Enter your username")
while (validateUsername(username) == false) {
    username = prompt("Username is invalid. Please enter a valid username")
}

if (username == null) {
    return
}

//Enter password
let password = prompt("Enter your password")
while(validatePasswword(password) ==false) {
    password = prompt("Enter a valid password")
}

if (password == null) {
    return
}

// confirm password
let passwordConfirm = prompt("Confirm your password")

while (passwordConfirm !== password){
    passwordConfirm = prompt("Password do not match. Confirm password again")
}

if (passwordConfirm == null) {
    return
}

// check if database contains the username

const user = userDatabase[username]

if (user == undefined) {
    alert("User does not exist, Please register on the app")
    return
}

alert(`
    User found with the following details:
    first Name: ${user.firstName}
    last Name: ${user.lastName}
    email: ${user.email}
    Account Activated: ${user.accountActivated}
    `)

// console.log(username, password, passwordConfirm)


}

displayUserDetails()
alert("You have reached the end of this program! Goodbye")




function validateUsername(username) { 

    if (username == null){
        return true
    }

    if (username.length > 10){
        return false
    }else {
        return true
    }

} 

function validatePasswword(password) {
    if (password == null){
        return true
    }
    if (password.length < 6) {
        return false
}else {
    return true
}
}

// let age = 25
// console.log(age)

// function kennyFunction(a){
//     if (a % 2 ===0){
//         console.log("even")}
//         else {
//             console.log("odd")
//         }
//     }


// kennyFunction(30)

// let karray =[20, 30, 35, 15]
// console.log(karray[0])

