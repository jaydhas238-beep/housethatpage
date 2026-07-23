document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const projectType = document.getElementById("projectType").value;
        const location = document.getElementById("location").value.trim();

        const message =
`Hello HouseThat,

I would like to enquire about a project.

Name: ${name}

Phone: ${phone}

Project Type: ${projectType}

Project Location: ${location}

Looking forward to discussing my project with your team.`;

        const whatsappNumber = "917972219776"; // Replace with HouseThat WhatsApp number

        const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);

        if (isMobile) {

            window.location.href =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        } else {

            window.open(
                `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`,
                "_blank"
            );

        }

    });

});
