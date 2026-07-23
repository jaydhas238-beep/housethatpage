
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("careerForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const city = document.getElementById("city").value.trim();
        const position = document.getElementById("position").value;
        const message = document.getElementById("message").value.trim();

        const subject = `Application - ${position}`;

        const body = `Name: ${name}

Email: ${email}

Phone: ${phone}

Current City: ${city}

Position: ${position}

About Me:

${message}

--------------------------------------

Please attach your resume before sending this email.`;

        const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);

        if (isMobile) {

            window.location.href =
                `mailto:studio@housethat.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        } else {

            const gmailURL =
                `https://mail.google.com/mail/?view=cm&fs=1&to=studio@housethat.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.open(gmailURL, "_blank");

        }

    });

});
