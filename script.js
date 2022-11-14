const toggleColor = function (){
    const color_scheme = Array.from(document.getElementsByTagName('li'))
    document.body.classList.toggle('background-default')
    color_scheme.forEach( element =>{
        element.addEventListener("click", function (){
            if (element.textContent === 'Orange') {
                if (document.body.classList.value === 'background-orange'){
                    document.body.classList.toggle('background-orange')
                    return 'off'
                }
                else {
                    document.body.classList.forEach(value => document.body.classList.toggle(value))
                    document.body.classList.toggle('background-orange')
                    return 'on'
                }
            }
            else if (element.textContent === 'Yellow') {
                if (document.body.classList.value === 'background-yellow'){
                    document.body.classList.toggle('background-yellow')
                    return 'off'
                }
                else {
                    document.body.classList.forEach(value => document.body.classList.toggle(value))
                    document.body.classList.toggle('background-yellow')
                    return 'on'
                }
            }
            else if (element.textContent === 'Grey') {
                if (document.body.classList.value === 'background-grey'){
                    document.body.classList.toggle('background-grey')
                    return 'off'
                }
                else {
                    document.body.classList.forEach(value => document.body.classList.toggle(value))
                    document.body.classList.toggle('background-grey')
                    return 'on'
                }
            }
            else if (element.textContent === 'Blue') {
                if (document.body.classList.value === 'background-blue'){
                    document.body.classList.toggle('background-blue')
                    return 'off'
                }
                else {
                    document.body.classList.forEach(value => document.body.classList.toggle(value))
                    document.body.classList.toggle('background-blue')
                    return 'on'
                }
            }
            else if (element.textContent === 'Red') {
                if (document.body.classList.value === 'background-red'){
                    document.body.classList.toggle('background-red')
                    return 'off'
                }
                else {
                    document.body.classList.forEach(value => document.body.classList.toggle(value))
                    document.body.classList.toggle('background-red')
                    return 'on'
                }
            }
            else if (element.textContent === 'Purple') {
                if (document.body.classList.value === 'background-purple'){
                    document.body.classList.toggle('background-purple')
                    return 'off'
                }
                else {
                    document.body.classList.forEach(value => document.body.classList.toggle(value))
                    document.body.classList.toggle('background-purple')
                    return 'on'
                }
            }
        })
    })
}
const toggle_hamburger = function (){
    let hamburger = document.querySelector("#nav-icon1")
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle('active')
    })
}

toggle_hamburger()
toggleColor()