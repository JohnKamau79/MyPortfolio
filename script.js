const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle')
const sunIcon = document.getElementById('sun-icon')
const moonIcon = document.getElementById('moon-icon')

if(localStorage.theme === 'light'){
    html.classList.remove("dark")
    moonIcon.classList.remove('hidden')
    sunIcon.classList.add('hidden')
}
else{
    html.classList.add("dark")
    moonIcon.classList.add('hidden')
    sunIcon.classList.remove('hidden')
}
themeToggle.addEventListener("click", () => {
    if(html.classList.contains("dark")){
        html.classList.remove('dark')
        localStorage.theme = "light"
        moonIcon.classList.remove('hidden')
        sunIcon.classList.add('hidden')
    }
    else{
        html.classList.add('dark')
        localStorage.theme = "dark"
        moonIcon.classList.add('hidden')
        sunIcon.classList.remove('hidden')
    }
})