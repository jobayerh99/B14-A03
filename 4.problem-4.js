const bonusScore = (scores) => {

    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid"
    }

    const isAllOk = scores.every(score => typeof score === 'number');
    
    if (!isAllOk) {
        return "Invalid"
    }

    const addBonus = scores.map(score => score + 10);

    const total = addBonus.reduce((score, currentScore) => score + currentScore, 0);

    return total;
}
