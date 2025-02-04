const quotes = [
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "The roots of education are bitter, but the fruit is sweet. – Aristotle",
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
    "Education is not preparation for life; education is life itself. – John Dewey",
    "The only person who is educated is the one who has learned how to learn and change. – Carl Rogers",
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "The mind is not a vessel to be filled, but a fire to be kindled. – Plutarch",
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    "Change is the end result of all true learning. – Leo Buscaglia",
    "The great aim of education is not knowledge but action. – Herbert Spencer",
    "You cannot open a book without learning something. – Confucius",
    "Tell me and I forget, teach me and I remember, involve me and I learn. – Benjamin Franklin",
    "A good education is a foundation for a better future. – Elizabeth Warren",
    "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. – Dr. Seuss",
    "Education is the movement from darkness to light. – Allan Bloom",
    "What we learn with pleasure we never forget. – Alfred Mercier",
    "Education breeds confidence. Confidence breeds hope. Hope breeds peace. – Confucius",
    "Intelligence plus character—that is the goal of true education. – Martin Luther King Jr.",
    "The function of education is to teach one to think intensively and to think critically. – Martin Luther King Jr.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – Malcolm X",
    "To educate a man in mind and not in morals is to educate a menace to society. – Theodore Roosevelt",
    "The best way to predict your future is to create it. – Abraham Lincoln",
    "In learning you will teach, and in teaching you will learn. – Phil Collins",
    "Learning is a treasure that will follow its owner everywhere. – Chinese Proverb",
    "Education is the foundation upon which we build our future. – Christine Gregoire",
    "You are always a student, never a master. You have to keep moving forward. – Conrad Hall",
    "Education is not the filling of a pail, but the lighting of a fire. – William Butler Yeats",
    "The function of education is to teach one to think intensively and to think critically. – Martin Luther King Jr.",
    "The more I read, the more I acquire, the more certain I am that I know nothing. – Voltaire",
    "Education is the key to unlocking the world, a passport to freedom. – Oprah Winfrey",
    "Learning is the only thing the mind never exhausts, never fears, and never regrets. – Leonardo da Vinci",
    "Educating the mind without educating the heart is no education at all. – Aristotle",
    "One child, one teacher, one pen, and one book can change the world. – Malala Yousafzai",
    "It is the supreme art of the teacher to awaken joy in creative expression and knowledge. – Albert Einstein",
    "Education is a shared commitment between dedicated teachers, motivated students, and enthusiastic parents with high expectations. – Bob Beauprez",
    "The highest result of education is tolerance. – Helen Keller",
    "Education is not the learning of facts, but the training of the mind to think. – Albert Einstein",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
    "Education's purpose is to replace an empty mind with an open one. – Malcolm Forbes",
    "A good teacher can inspire hope, ignite the imagination, and instill a love of learning. – Brad Henry",
    "Education is what remains after one has forgotten what one has learned in school. – Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family. – Kofi Annan",
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle"
];

let currentQuoteIndex = 0;

const quoteElement = document.getElementById('quote');
const nextButton = document.getElementById('next-button');

function showQuote() {
    quoteElement.innerText = quotes[currentQuoteIndex];
}

nextButton.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    showQuote();
});

// Initial quote display
showQuote();