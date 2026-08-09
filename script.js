// ================= PORTFOLIO WEBSITE =================

console.log("Portfolio Website");

// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ================= CONTACT FORM =================

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector("#name")?.value.trim();
        const email = document.querySelector("#email")?.value.trim();
        const message = document.querySelector("#message")?.value.trim();

        if (!name || !email || !message) {

            alert("Please fill in all fields.");

            return;
        }

        const subject = encodeURIComponent(
            "Portfolio Contact Message from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        // CHANGE THIS EMAIL TO YOUR EMAIL
        const myEmail = "your-email@gmail.com";

        window.location.href =
            `mailto:${myEmail}?subject=${subject}&body=${body}`;

    });

}


// ================= SEND MESSAGE BUTTON =================
// If your button is not inside a form

const sendMessageButton = document.querySelector("#send-message");

if (sendMessageButton) {

    sendMessageButton.addEventListener("click", function () {

        const email = "your-email@gmail.com";

        window.location.href =
            `mailto:${email}?subject=Portfolio%20Contact`;

    });

}


// ================= DOWNLOAD CV =================

const cvButton = document.querySelector("#download-cv");

if (cvButton) {

    cvButton.addEventListener("click", function () {

        const cvFile = "Arij_Fatima_CV.pdf";

        const link = document.createElement("a");

        link.href = cvFile;
        link.download = cvFile;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    });

}


// ================= PROJECT BUTTONS =================

document.querySelectorAll(".project-button").forEach(button => {

    button.addEventListener("click", function () {

        const projectLink = this.getAttribute("href");

        if (projectLink && projectLink !== "#") {
            window.open(projectLink, "_blank");
        }

    });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header a[href^='#']");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});