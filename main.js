let btn = document.querySelector('#btn');
let text = document.querySelector('#show-text');
let h2 = document.querySelector('h2');
let card = document.querySelector('#card');
let h5 = document.querySelector('h5');
let flag = 0;
let intervalId; // Store the interval ID to clear it later

btn.addEventListener('click', () => {
  if (flag == 0) {
    h2.style.color = 'white';
    h2.style.textAlign = 'center';
    btn.innerHTML = 'Request sending..';
    btn.style.fontWeight = '600';
    btn.style.color = 'black';
    btn.style.border = 'none';
    text.style.color = 'white';

    btn.style.backgroundColor = 'white';
    h5.style.color = 'white';
    flag = 1;
    card.style.backgroundColor = 'cornflower'; // Use 'card' instead of 'box'

    intervalId = setInterval(function () {
      h2.innerHTML = 'Sydney Black';
      h2.style.color = 'white;';
      h2.style.marginLeft = '15px';
      text.innerHTML = 'Friends';
      text.style.color = 'green';
      btn.innerHTML = 'Remove';
      btn.style.color = 'black';
      btn.style.border = 'none';
      btn.style.backgroundColor = 'white';
      h5.style.color = 'white';
      card.style.backgroundColor = 'black';
    }, 3000);
  } else {
    clearInterval(intervalId); // Clear the interval when removing the request
    h2.innerHTML = 'You often come here?';
    h2.style.marginLeft = '15px';
    h2.style.color = 'black';
    text.innerHTML = 'Stranger';
    text.style.color = 'red';
    btn.innerHTML = 'Request';
    btn.style.color = 'white';
    btn.style.backgroundColor = 'black';
    card.style.backgroundColor = 'white';
    btn.style.fontWeight = '600';
    h5.style.color = 'black';
    flag = 0;
  }
});
