

const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}





let allUsers = []

if (localStorage.users) {
    let retrieved = JSON.parse(localStorage.getItem('users'))
    console.log(retrieved);
    allUsers = retrieved

} else {
    allUsers = []
}

const signUp = () => {

    if (firstName.value === '' || lastName.value === '' || email.value === '' || password.value === '') {
        toast('Not that quick 😁, fill in the inputs', '#f00', '#fff')
        sub.innerHTML = '...loading'
        setTimeout(() => {
            sub.innerHTML = 'Submit'
        }, 1000)

    } else {
        sub.innerHTML = '...loading'
        setTimeout(() => {
            sub.innerHTML = 'Submit'
        }, 1500)
        // console.log(allUsers);


        const fName = document.getElementById('firstName').value;
        const lName = document.getElementById('lastName').value;
        const mail = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        const userObj = { fName, lName, mail, pass }

        let found = allUsers.find(eachUser => eachUser.mail = mail)
        console.log(found);
        if (found == undefined) {
            allUsers.push(userObj)
            toast('Sign up successful 😁', '#006400', '#fff')
            console.log(allUsers);

            document.getElementById('firstName').value = ''
            document.getElementById('lastName').value = ''
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''

            localStorage.users = JSON.stringify(allUsers)
                setTimeout(() => {
                    window.location.href = 'signin.html'
            }, 2000)
            
        } else {
            toast('Account already exists', '#00f', '#fff')
        //     setTimeout(() => {
        //         window.location.href = 'signin.html'
        // }, 2000)

        }


        // allUsers.push(userObj)
        // toast('Sign up successful', '#006400', '#fff')
        // console.log(allUsers)

    }

    
}

