const quotes = {
  science: [
    {
      quote: ` "The important thing is to never stop questioning."`,
      author: "- Albert Einstein",
    },
    {
      quote: `"Science is a way of thinking much more than it is a body of knowledge." `,
      author: "- Carl Sagan",
    },
    {
      quote: `"Science and everyday life cannot and should not be separated." `,
      author: "Rosalind Franklin",
    },
    {
      quote: `"Science is not only a disciple of reason but also one of romance and passion." `,
      author: "- Stephen Hawking",
    },
    {
      quote: `"The good thing about science is that it's true whether or not you believe in it." `,
      author: "- Neil deGrasse Tyson",
    },
  ],
  motivation: [
    {
      quote: `"The only way to do great work is to love what you do."`,
      author: "- Steve Jobs",
    },
    {
      quote: `"Success is not the key to happiness. Happiness is the key to success."`,
      author: " - Albert Schweitzer",
    },
    {
      quote: `"Don't watch the clock; do what it does. Keep going."`,
      author: "- Sam Levenson",
    },
    {
      quote: `"The future depends on what you do today."`,
      author: "- Mahatma Gandhi",
    },
    {
      quote: `"Your limitation—it's only your imagination." `,
      author: "- Moshin Khan",
    },
  ],
};

let category = "science";
let index = 0;

const quoteText = document.getElementById("quote-text"),
  categorySelect = document.getElementById("category"),
  themeToggle = document.getElementById("theme-toggle"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  random = document.getElementById("random"),
  increase = document.getElementById("increase"),
  decrease = document.getElementById("decrease"),
  body = document.body;

const displayQuote = () => {
  const quote = quotes[category][index];
  quoteText.innerHTML = `${quote.quote}<br><br> <strong>${quote.author}</strong>`;
};

displayQuote();

// Change category
categorySelect.addEventListener("change", (e) => {
  category = e.target.value;
  index = 0;
  displayQuote();
});

// Change quotes
prev.addEventListener("click", () => {
  index = (index - 1 + quotes[category].length) % quotes[category].length;
  displayQuote();
});

next.addEventListener("click", () => {
  index = (index + 1) % quotes[category].length;
  displayQuote();
});

random.addEventListener("click", () => {
  index = Math.floor(Math.random() * quotes[category].length);
  displayQuote();
});

// Change font size
let fontsize = 1;

increase.addEventListener("click", () => {
  //   fontsize += 0.1;
  fontsize = Math.min(1.7, fontsize + 0.1);
  quoteText.style.fontSize = `${fontsize}em`;
});

decrease.addEventListener("click", () => {
  fontsize = Math.max(1, fontsize - 0.1);
  quoteText.style.fontSize = `${fontsize}em`;
});

// Toggle mode
themeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});
