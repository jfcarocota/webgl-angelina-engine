
const canvas = document.getElementById('glcanvas');

const main = ()=>{
    gl = canvas.getContext('webgl2');

    if(!gl){
        alert('tu navegador no soporta webgl2');
        return;
    }

    gl.clearColor(1, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;