let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogName = document.querySelectorAll('.dog-name')
for( i = 0; i < dogName.length; i++){
    dogName[i].style.textAlign = "left"
}

let footer = document.querySelector('#footer')
footer.style.textDecorationColor = "purple"


// Select some elements...