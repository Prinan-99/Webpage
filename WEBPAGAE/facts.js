const facts = [
    "Honey never spoils.",
    "Bananas are berries, but strawberries aren't.",
    "Wombat poop is cube-shaped.",
    "Octopuses have three hearts.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "A group of flamingos is called a 'flamboyance'.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "Some cats are allergic to humans.",
    "A day on Venus is longer than a year on Venus.",
    "The unicorn is the national animal of Scotland."
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
}
