const nameEl = document.querySelector('#name');
const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const bmiBtn = document.querySelector('#bmi-btn');

function getBmi(height, weight, point = '2') {
    let bmi = (weight / (height / 100) ** 2).toFixed(point);
    return bmi;
}

comments = [
    { 'bmi': 18.5, 'comment': '體重過輕' },
    { 'bmi': 24, 'comment': '健康體位' },
    { 'bmi': 35, 'comment': '體位異常' }
];
bmiBtn.addEventListener('click', () => {
    let bmi = getBmi(heightEl.value, weightEl.value);
    alert(`${nameEl.value}  bmi:${bmi}`);
    let bmiComment = '體位異常'
    for (i = 0; i < comments.length; i++) {
        if (bmi <= comments[i]['bmi']) {
            bmiComment = comments[i]['comment'];
            break;
        }
    }
    document.querySelector('#result').innerHTML = `<h2>bmi:${bmi} ${bmiComment}</h2>`;
})

