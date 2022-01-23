function compute() {
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    principal = Number(principal);
    rate = Number(rate);
    years = Number(years);

    if (isNaN(principal)) {
        alert('Sorry, we only accept numbers. Can you please enter a number for the value of Amount.');
        return;
    }

    if (principal <= 0) {
        alert('Sorry, we only accept positive numbers. Can you please enter a positive number for the value of Amount.');
        document.getElementById('principal').focus();
        return;

    }

    if (isNaN(rate)) {
        alert('Sorry, we only accept numbers. Can you please enter a number for the value of Interest rate.');
        return;

    }
    if (rate <= 0) {
        alert('Sorry, we only accept positive numbers. Can you please enter a positive number for the value of Interest rate.');
        return;
    }
    if (isNaN(years)) {
        alert('Sorry, we only accept numbers. Can you please enter a number for the value of No. of Years.');
        return;
    }

    const recieveAmount = principal * rate / 100 * years;
    const recieveYear = new Date().getFullYear() + years;

    document.getElementById('deposit').innerText = principal;
    document.getElementById('interest').innerText = rate;
    document.getElementById('recieveAmount').innerText = recieveAmount;
    document.getElementById('receiveYear').innerText = recieveYear;
    document.getElementById('messageDiv').classList.remove('none');
}
function onSliderChange(event) {
    const sliderValue = event.target.value;
    document.getElementById('sliderValue').innerText = sliderValue + '%';
}
