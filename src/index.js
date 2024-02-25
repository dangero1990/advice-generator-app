const dice = document.getElementById('dice');
const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');

async function fetchData() {
  try {
    const randomNum = Math.floor(Math.random() * 218);
    const response = await fetch(`https://api.adviceslip.com/advice/${randomNum}`);
    const data = await response.json();
    adviceId.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
  } catch (error) {
    console.log(error);
  }
}

dice.addEventListener('click', fetchData);
window.onload = fetchData;
