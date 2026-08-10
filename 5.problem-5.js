const generateLeaderboard = (students) => {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    const isAllHaveScoreAndNumber = students.every(std => typeof std === 'number');

    if (!isAllHaveScoreAndNumber) {
        return "invalid"
    }

    const qualified = students.filter(student => student.score >= 70);

    const names = qualified.map(({ name }) => name.toUpperCase());

    return names.slice(0, 3);
}


console.log(generateLeaderboard([{name:"Rafi",score:"90"}]))
