const aboutBtn = document.getElementById('aboutBtn');
const aboutSection = document.getElementById('aboutSection');

aboutBtn.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});
