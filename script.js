const funFacts = [
    "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "Wombat poop is cube-shaped.",
    "A day on Venus is longer than a year on Venus.",
    "The Eiffel Tower can be 15 cm taller during the summer."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('fact').innerText = fact;
});
