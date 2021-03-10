function compare(pass1, pass2) {
    let answer = pass1.localeCompare(pass2)
    return answer
}

let password1 = prompt("Enter your password:")
let password2 = prompt("Enter your password again:")

let answer = compare(password1, password2)

if (answer == 0)
    console.log("The passwords are the same")
else
    console.log("The passwords are not the same")
