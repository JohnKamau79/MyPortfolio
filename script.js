// HAMBURGER
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    const mainbar = document.querySelector('.mainbar')
    sidebar.style.display= "flex"
    mainbar.style.opacity= "0"
    // const header = document.querySelector('.header')
    // header.style.backgroundColor = "#f9fafb"
    // header.style.color = "purple"
    // const paragraphs = document.querySelectorAll(" .text-purple-900, .text-purple-800")
    // paragraphs.forEach(paragraph => {
    //     paragraph.style.color = "#101828"
    // });

    // const textPurplesOne = document.querySelectorAll(".text-purple-500")
    // textPurplesOne.forEach(textPurpleOne => {
    //     textPurpleOne.style.color = "oklch(62.7% 0.265 303.9)"
    // });
    // const textPurplesTwo = document.querySelectorAll(".text-purple-600")
    // textPurplesTwo.forEach(textPurpleTwo => {
    //     textPurpleTwo.style.color = "oklch(71.4% 0.203 305.504)"
    // });
    // const textPurplesThree = document.querySelectorAll(".text-purple-800")
    // textPurplesThree.forEach(textPurpleThree => {
    //     textPurpleThree.style.color = "oklch(90.2% 0.063 306.703)"
    // });
    // const textPurplesFour = document.querySelectorAll(".text-purple-900")
    // textPurplesFour.forEach(textPurpleFour => {
    //     textPurpleFour.style.color = "#f3e8ff"
    // });
    // const textPurplesFive = document.querySelectorAll(".bg-gray-800")
    // textPurplesFive.forEach(textPurpleFive => {
    //     textPurpleFive.style.backgroundColor = "#4a5565"
    //     textPurpleFive.style.color = "white"
    // });
    // const textPurplesSix = document.querySelectorAll(".text-gray-300, .text-gray-400")
    // textPurplesSix.forEach(textPurpleSix => {
    //     textPurpleSix.style.color = "#364153"
    //     textPurpleSix.style.backgroundColor = "#f9fafb"
    // });
    // const textPurplesSeven = document.querySelectorAll(".text-purple-600, .border-purple-600")
    // textPurplesSeven.forEach(textPurpleSeven => {
    //     textPurpleSeven.style.color = "black"
    //     // textPurpleSeven.style.hover = "color:blue"
    //     textPurpleSeven.style.borderColor = "purple"
    //     // textPurpleSeven.style.border = "2px solid purple"
    // });
    // const textPurplesEight = document.querySelectorAll(".landingText")
    // textPurplesEight.forEach(textPurpleEight => {
    //     textPurpleEight.style.color = "#ffaaff"
    // });
    // const textPurplesNine = document.querySelectorAll(".span")
    // textPurplesNine.forEach(textPurpleNine => {
    //     textPurpleNine.style.color = "oklch(62.7% 0.265 303.9)"
    // });
  
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    const mainbar = document.querySelector('.mainbar')
    sidebar.style.display= "none"
    mainbar.style.opacity= "100"
}

// COPYRIGHT
    const newYear = new Date().getFullYear()
    document.getElementById('currentYear').textContent = newYear

// THEME TOGGLE
function lightTheme(){
    const main = document.querySelectorAll

}



//   const paragraphs = document.querySelectorAll("[style = '.text-blue-600, .text-purple-800']")
//     paragraphs.forEach(paragraph => {
//         paragraph.style.color = "yellow"
//     });

