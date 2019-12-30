let input = prompt('Please enter your email:', '');
let password;
let login = false;
let changePass;
const five = 5;
const six = 6;
if (input === undefined || input === '') {
    alert('Canceled');
} else if (input.length < five) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (input === 'user@gmail.com') {
    password = prompt('Please enter your password:', '')
    if (password === undefined || password === '') {
        alert('Canceled');
    } else if (password === 'UserPass') {
        login = true;
    } else {
        alert('Wrong password')
    }
} else if (input === 'admin@gmail.com') {
    password = prompt('Please enter your password:', '')
    if (password === undefined || password === '') {
        alert('Canceled');
    } else if (password === 'AdminPass') {
        login = true;

    } else {
        alert('Wrong password')
    }

} else {
    alert("I don't know you")
}

if (login) {
    changePass = confirm('Do you want to change your password?')
    if (!changePass) {
        alert('You have failed the change')
    } else if (changePass) {
        let oldPassword = prompt('Please enter your OLD password:', '')
        if (oldPassword === password) {
            let newPassword = prompt('Please enter new password:', '')
            if (newPassword === undefined || input === '') {
                alert('Canceled');
            } else if (newPassword.length < six) {
                alert('It’s too short password. Sorry');
            } else {
                if (prompt('Please enter new password again:', '') === newPassword) {
                    alert('You have successfully changed your password');
                } else {
                    alert('You wrote the wrong password')
                }
            }
        } else {
            alert('Wrong password')
        }
    }
}