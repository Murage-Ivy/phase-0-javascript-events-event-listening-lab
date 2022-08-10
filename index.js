function addingEventListener() {

    const input = document.getElementById('button');

    function clickAlert() {
        alert("Hee hee that tickeles!");
    }
    input.addEventListener('click', clickAlert);
}

addingEventListener();