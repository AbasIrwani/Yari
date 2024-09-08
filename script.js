let leftScore = 0;
let rightScore = 0;
let currentSide = '';

function showPopup(side) {
    currentSide = side;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('scorerName').value = '';
}

function saveGoal() {
    const scorerName = document.getElementById('scorerName').value;
    if (!scorerName) {
        alert('ناوی گۆڵکار تۆماربکە');
        return;
    }

    const now = new Date();
    const goalTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    const goalDetails = `${scorerName} (${goalTime})`;

    if (currentSide === 'left') {
        leftScore++;
        document.getElementById('scoreLeft').textContent = leftScore;
        const leftScorers = document.getElementById('leftScorers');
        const listItem = document.createElement('li');
        listItem.textContent = goalDetails;
        leftScorers.appendChild(listItem);
    } else if (currentSide === 'right') {
        rightScore++;
        document.getElementById('scoreRight').textContent = rightScore;
        const rightScorers = document.getElementById('rightScorers');
        const listItem = document.createElement('li');
        listItem.textContent = goalDetails;
        rightScorers.appendChild(listItem);
    }

    closePopup();
}
