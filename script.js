const themeBtn = document.getElementById("themeBtn");


// ============================
// DARK / LIGHT MODE
// ============================

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {
        themeBtn.textContent = "☀";
    }
}

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeBtn.textContent = "☀";

        } else {

            localStorage.setItem("theme", "light");

            themeBtn.textContent = "☾";
        }

    });

}


// ============================
// CONTACT FORM
// ============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");


        if (name === "" || email === "" || message === "") {

            formMessage.textContent =
                "Please fill in all fields.";

            return;
        }


        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

    });

}

const GROQ_API_KEY = process.env.GROQ_API_KEY;