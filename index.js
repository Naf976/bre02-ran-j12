const paletteElements = document.querySelectorAll('header div');
const paletteInput = document.querySelectorAll('header input');
const mainElements = document.querySelectorAll('main div div');
const btnCapture = document.querySelector('.screen-shot');
const capture = document.querySelector('#capture');

function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;
    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{

    // le code de l'étape 1 se passe ici
    for (let i = 0; i < paletteElements.length; i++){
        paletteElements[i].style.backgroundColor = palette[i];
        paletteInput[i].value = palette[i];
    }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80", "#bababa", '#4F9CD6', '#FF0000', '#C657F2', '#FF5900', '#F7D200', '#075759', '#000000']);

    // le code de l'étape 2 se passe ici
    for (let i = 0; i < paletteElements.length; i++){
        paletteElements[i].addEventListener('click', selectColor);
        paletteInput[i].addEventListener('change', function(){
        paletteElements[i].style.backgroundColor = paletteInput[i].value;
        });
    }
    // le code de l'étape 3 se passe ici
        sessionStorage.removeItem('selectedColor');
        
    for (let i = 0; i < mainElements.length; i++){
        
        mainElements[i].addEventListener('click', function(){
            
            if(!mainElements[i].style.backgroundColor){
            mainElements[i].style.backgroundColor = getSelectedColor();
            } 
            else {
                mainElements[i].style.backgroundColor = '';
            }
        });
        
    }
btnCapture.addEventListener('click', function() {
    html2canvas(capture).then(function(canvas) {
        canvas.setAttribute('class', 'screen-result')
    document.body.appendChild(canvas);
    console.log(canvas)
    canvas.style.width = '';
});
})

});
