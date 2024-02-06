const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    console.log(campoA);
    const campoB = document.getElementById('campoB');
    console.log(campoB);
    const errorMessage = document.querySelector('.error-message');
    console.log(errorMessage);
    const successMessage = document.querySelector('.success-message');
    console.log(successMessage);

    const campoAValue = parseFloat(campoA.value);
    console.log(campoAValue);
    const campoBValue = parseFloat(campoB.value);
    console.log(campoBValue);

    if (campoAValue < campoBValue) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        campoA.value = '';
        campoB.value = '';
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    }
    
    campoA.addEventListener('input', function () {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    });

    campoB.addEventListener('input', function () {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    });

});