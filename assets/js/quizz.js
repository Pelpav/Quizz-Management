document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');

    const quizQuestions = [
        { question: "Quel est le prénom de Naruto ?", options: ["Sasuke", "Naruto", "Kakashi", "Itachi"], answer: 1 },
        { question: "Dans quel anime trouve-t-on les 7 boules de cristal ?", options: ["One Piece", "Dragon Ball", "Naruto", "Bleach"], answer: 1 },
        // Ajoutez plus de questions ici
    ];

    quizQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('h3');
        questionText.textContent = q.question;
        questionElement.appendChild(questionText);

        q.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = optionIndex;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionElement.appendChild(label);
        });

        quizContainer.appendChild(questionElement);
    });

    document.getElementById('submit-quiz').addEventListener('click', () => {
        const answers = [...document.querySelectorAll('input[type=radio]:checked')];
        let score = 0;
        answers.forEach((answer, index) => {
            if (parseInt(answer.value) === quizQuestions[index].answer) {
                score++;
            }
        });
        alert(`Vous avez obtenu ${score} sur ${quizQuestions.length}`);
    });
});
