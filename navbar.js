document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav>
            <img src="Images/eLearning_logo.png" alt="Website logo" />
            <div class="menu-icon" onclick="toggleMenu()">&#9776;</div>
            <div class="navigation">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">Content</a></li>
                    <li><a href="topics.html">Topics</a></li>
                    <li><a href="samples.html">Sample Programs</a></li>
                    <li><a href="flashcards.html">Flashcards</a></li>
                    <li><a href="mcqs.html">MCQs</a></li>
                    <li><a href="fun-facts.html">Fun Facts</a></li>
                    <li><a href="quizzes.html">Quizzes</a></li>
                    <li><a href="resources.html">Resources</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("active");
}
