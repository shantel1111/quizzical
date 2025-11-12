# 🧠 Quizzical
A dynamic quiz game built with React!
Quizzical fetches multiple-choice questions from an API and challenges users to test their knowledge in a fast, fun, and interactive way. Users can select answers, check results, and play again to beat their score.

---

## ✨ Features
- 🧩 Fetches random trivia questions from an external API
- 🎯 Multiple-choice answers for each question
- 🔀 Randomized answer order each round
- ✅ Check your score instantly after answering
- 🔁 Play Again button to restart with new questions
- 🎨 Visual feedback for correct, wrong, and selected answers
- ⚡ Responsive layout and smooth state transitions

---

## 🛠️ Technologies Used
- React (Hooks: useState, useEffect)
- JavaScript (ES6+)
- HTML5 & CSS3
- nanoid for unique question IDs
- clsx for conditional class styling
- html-entities to decodes special characters from API

---

## 🕹️ How to Use
1. Open the app in a web browser.
2. A set of quiz questions will load automatically.
3. Click an answer for each question.
4. Once done, click Check Answers to reveal your score.
5. Correct answers are highlighted in green, wrong ones in red.
6. Click Play Again to start a new round with fresh questions!
   
---

## 💡 Future Improvements
- Add categories and difficulty filters
- Integrate a loading spinner while fetching
- Track high scores across rounds
- Add a timer or leaderboard
- Include sound effects or animations for correct answers
  
---
   
## 📦 Installation
```bash
# Clone the repo
git clone https://github.com/shantel1111/quizzical.git

# Go into the project folder
cd quizzical

# (Optional) Install dependencies if using a build tool
npm install

# (Optional) Start the project locally
npm run dev
