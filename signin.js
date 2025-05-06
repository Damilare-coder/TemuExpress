let gottenUsers = JSON.parse(localStorage.getItem('users')) || []
console.log(gottenUsers);

const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
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


const signIn = () => {
    if (email.value === '' || password.value === '') {
        sub.innerHTML = '...loading'
        toast('Haba now, fill in the inputs joor😠👿', '#f00', '#fff')
        setTimeout(() => {
            sub.innerHTML = 'Submit'
        }, 1000)
        
    } else {
        sub.innerHTML = '...loading'
        const mail = document.getElementById('email').value
        const pass = document.getElementById('password').value

        const signInObj = { mail, pass }
        console.log(signInObj);

        let found = gottenUsers.find(user=>user.mail == mail)
        console.log(found);
        localStorage.person = JSON.stringify(found)

        if(found == undefined) {
        toast('User not found', '#f01400', '#fff')
        } else {
            toast('Sign in successful😁', '#006400', '#fff')
            setTimeout(()=>{
                window.location.href = 'dashboard.html'
            }, 2000)
        }

        // document.getElementById('email').value = ''
        // document.getElementById('password').value = ''
    }
}