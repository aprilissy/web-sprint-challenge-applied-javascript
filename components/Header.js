// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    // instantize elements
    const header = document.createElement('div')
    const date = document.createElement('span')
    const heading = document.createElement('h1')
    const temp = document.createElement('span')

    // add class names
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    // set html hierarchy
    header.appendChild(date)
    header.appendChild(heading)
    header.appendChild(temp)

    // set attributes or text
    date.textContent = 'MARCH 28, 2020'
    heading.textContent = 'Lambda Times'
    temp.textContent = '98°'


    // return 
    return header
}

const header = Header()

// append header to DOM inside header-container
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(header)