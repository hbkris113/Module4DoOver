module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortune = ["You will be rich."];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];

    res.status(200).send(randomFortune);
  },

  getAssurance: (req, res) => {
    const assurance = [
      "You are the best relative in your family.",
      "You are the most gorgeous one",
      "You are the chosen one",
      "You are the always the fliest in a room.",
    ];

    // choose random Assurance
    let randomIndex = Math.floor(Math.random() * assurance.length);
    let randomAssurance = assurance[randomIndex];

    res.status(200).send(randomAssurance);
  },
  getQuotes: (req, res) => {
    const quotes = [
      "A dream becomes a goal when action is taken toward its achievement. - Bo Bennett",
      "If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes. - Andrew Carnegie",
      "You can do anything if you set goals. You just have to push yourself. - RJ Mitte",
      "Setting goals is the first step in turning the invisible into the visible. - Anthony Robbins",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    ];

    // choose random Quotes
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuotes = quotes[randomIndex];

    res.status(200).send(randomQuotes);
  },
  getAdvice: (req, res) => {
    const advice = [
      "Don't be afraid to ask for help.",
      "Challenge Yourself",
      "Be nice to yourself",
      "Don't be afraid to say no",
      "Don't compare yourself to others",
      "Don't be afraid to take risks",
      "Don't be afraid to make mistakes",
      "Don't be afraid to spend some time alone",
      "Don't be afraid to speak up",
      "Don't be afraid to be wrong",
      "Don't be afraid to take a break",
      "Don't be afraid to learn from your mistakes",
      "Don't be afraid to be yourself",
      "Don't be afraid to be different",
      "Don't be afraid to be vulnerable",
    ];

    // choose random Advice
    let randomIndex = Math.floor(Math.random() * advice.length);
    let randomAdvice = advice[randomIndex];

    res.status(200).send(randomAdvice);
  }
};
