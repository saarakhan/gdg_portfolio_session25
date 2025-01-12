var typed = new Typed('#element', {
    strings: ['MERN STACK DEVELOPER', 'UI/UX DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER'],
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 30
});


const frontendHeading = document.getElementById('frontend')
const backendHeading = document.getElementById('backend');

const FrontendSkill = document.getElementById('frontend-skill');
const BackendSkill = document.getElementById('backend-skill');

frontendHeading.addEventListener('click', () => {
    BackendSkill.classList.add('no-active');
    FrontendSkill.classList.remove('no-active');

    backendHeading.classList.remove('tab');
    frontendHeading.classList.add('tab');
});

backendHeading.addEventListener('click', () => {
    backendHeading.classList.add('tab');
    frontendHeading.classList.remove('tab');
    FrontendSkill.classList.add('no-active');
    BackendSkill.classList.remove('no-active');
});


