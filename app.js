const signIn = document.querySelectorAll('.second-page');
const signUp = document.querySelectorAll('.first-page');
const register = document.getElementById('register');
const login = document.getElementById('login');

signIn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        register.style.display = 'none';
        login.style.display = 'block';
    }); 
})

signUp.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
       login.style.display = 'none';  
       register.style.display = 'block'; 
    })
})

