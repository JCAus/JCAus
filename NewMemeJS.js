const imgInput = document.querySelector('.imgInput');
const topInput = document.querySelector('.topInput');
const bottomInput = document.querySelector('.bottomInput');
const canvas = document.querySelector('#meme');
const addButton = document.querySelector('.addToGallery');

let image;

imgInput.addEventListener("change", () => {
    
    const imgDataUrl = URL.createObjectURL(imgInput.files[0]);
    
    image = new Image();
    image.src = imgDataUrl;

    image.addEventListener("load", () => {
        memeCanvas(canvas, image, topInput.ariaValueMax, bottomInput.value);
    }, {once: true} );
});

topInput.addEventListener("change", () => {
    memeCanvas(canvas, image, topInput.value, bottomInput.value);
})

bottomInput.addEventListener("change", () => {
    memeCanvas(canvas, image, topInput.value, bottomInput.value);
})

function memeCanvas(canvas, image, topText, bottomText) {
    
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 12);
    const yOffset = Math.floor(height / 25);

    //background update
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
    
    //text update
    ctx.strokeStyle = 'black';
    ctx.lineWidth = Math.floor(fontSize / 5);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';
    ctx.font = `${fontSize}px sans-serif`;

    //add top text
    ctx.textBaseline = 'top';
    ctx.strokeText(topText, width / 2, yOffset);
    ctx.fillText(topText, width / 2, yOffset);

    //add bottom text
    ctx.textBaseline = 'bottom';
    ctx.strokeText(bottomText, width / 2, height - yOffset);
    ctx.fillText(bottomText, width / 2, height - yOffset);
}


addButton.addEventListener("click", function(e){
    e.preventDefault();
    
    
    let selectedMeme = cloneCanvas(canvas);
    selectedMeme.setAttribute('class', 'frame')
    selectedMeme.style.width = 100 + "%";
    
    gallery.appendChild(selectedMeme);

    topInput.value = "";
    bottomInput.value = "";
    
    selectedMeme.addEventListener("dblclick", function(e){
        e.preventDefault();
        if(e.target.className === "frame"){
            e.target.remove();
        }
    });
    
});


function cloneCanvas(oldCanvas) {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);

    //return the new canvas
    //return newCanvas;
    return newCanvas;
}









    
    
   