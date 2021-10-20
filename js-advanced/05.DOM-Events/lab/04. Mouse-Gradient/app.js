function attachGradientEvents() {
    const gradient = document.querySelector("#gradient");
    gradient.addEventListener("mousemove", onMove);
    const output = document.querySelector('#result');

    function onMove(ev){
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100);


        output.textContent = `${offset}%` 
    }
}