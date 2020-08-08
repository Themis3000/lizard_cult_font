var tCtx = document.getElementById('textCanvas').getContext('2d'),
    imageElem = document.getElementById('image'),
    download = document.getElementById('download');

tCtx.font="30px Lizard_cult";

document.getElementById('text').addEventListener('keyup', function (){
    measure = tCtx.measureText(this.value);
    tCtx.canvas.width = measure.width;
    tCtx.canvas.height = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;
    tCtx.font="30px Lizard_cult";
    tCtx.fillText(this.value, 0, measure.actualBoundingBoxAscent);
    imageElem.src = tCtx.canvas.toDataURL();
    download.href = imageElem.src;
}, false);
