window.addEventListener('click', function(){
    console.log("== The window was clicked")
})

function handleButtonClick(event){
    console.log("== A button was clicked, event: ", event)
    console.log(" -- event.target: ", event.target)
    var box = event.target.parentNode
    box.classList.toggle('highlighted')
}

var buttons = document.getElementsByClassName('in-box-button')
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', handleButtonClick)
}

var firstBox = document.querySelector('box')
firstBox.addEventListener('click', function (event){
    console.log("== The first box was clicked")
    console.log(" -- event.target: ", event.target)
    console.log(" -- event.currentTarget: ", event.currentTarget)
    event.stopPropagation()
})

var link = document.getElementById('website-link')
link.addEventListener('click', function(event){
    console.log("== The link was closed")
    event.preventDefault()
})

// event delegation
// register a listner on a common ancestor which can be used by listner to detect which button was clicked
