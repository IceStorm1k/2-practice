document.addEventListener("DOMContentLoaded", function() {
    const container = document.createElement('div');
    container.id = 'numberContainer';
    document.body.appendChild(container);
    let text = document.createElement('h3');
    let text2 = document.createElement('h3');
    let text3 = document.createElement('h3');
    text3.textContent = 'Author: Asabeneh Yetayeh';
    text2.textContent = '30DaysOfJavaScript:DOM Day 2';
    text.textContent = 'Number Generator';
    text3.style.textAlign = 'center';
    text3.style.fontWeight = '300';
    text3.style.width = '100%';
    text3.style.fontSize = '1em';
    text3.style.marginTop = '-23px';
    text3.style.textDecoration = 'underline';
    text2.style.textAlign = 'center';
    text2.style.fontWeight = '300';
    text2.style.width = '100%';
    text2.style.marginTop = '-33px';
    text2.style.fontSize = '1.2em';
    text2.style.textDecoration = 'underline';
    text.style.textAlign = 'center';
    text.style.width = '100%';
    text.style.fontSize = '1.8em';
    container.appendChild(text);
    container.appendChild(text2);
    container.appendChild(text3);
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    for (let i = 0; i <= 1010; i++) {
        let numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = i;
        if (isPrime(i)) {
            numberDiv.style.backgroundColor = 'red';
            numberDiv.style.color = 'white';
        } else if (i % 2 === 0) {
            numberDiv.style.backgroundColor = 'green';
            numberDiv.style.color = 'white';
        } else {
            numberDiv.style.backgroundColor = 'yellow';
            numberDiv.style.color = 'black';
        }
        numberDiv.style.height = '2.2em';
        numberDiv.style.width = '4.7em';
        numberDiv.style.display = 'flex';
        numberDiv.style.justifyContent = 'center';
        numberDiv.style.alignItems = 'center';
        numberDiv.style.fontSize = '1.2em';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.gap = '0.2em';
        container.style.margin = '0 auto';
        container.style.width = '80%';
        container.style.padding = '5em';
        container.style.width = '30%';
        container.appendChild(numberDiv);
    }

});
