const generateLeaderboard = (students) => {
    if (!Array.isArray === students) {
        return "Invalid";
    }

    if (students.length === []) {
        return "Invalid";
    }

    const qualified = students.filter(student => {
        student.score > 70;
    });

    const names = qualified.map(({ name }) => {
        name.toUpperCase();
    });

    return names.slice(0, 2);
}


console.log(generateLeaderboard([
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 }
]
))
