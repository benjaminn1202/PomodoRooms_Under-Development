function Contact() {

    return (
    <>
        <section class="contactSection">
            <div class="sectionContainer">
                <div class="contactHeader">
                    <h1 class="contactTitle">Get In Touch</h1>
                    <h2 class="contactTagline">Let's connect and collaborate.</h2>
                    <p class="contactDescription">
                        Have questions about Pomodoro Rooms or want to discuss a project? 
                        I'd love to hear from you! Reach out through any of the channels below, 
                        and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div class="contactInfoSection">
                    <h2 class="contactInfoHeading">Contact Information</h2>
                    <div class="contactGrid">
                        <div class="contactCard">
                            <i class="fas fa-envelope contactIcon"></i>
                            <h3>Email</h3>
                            <p><a href="mailto:benj.rollan.02@gmail.com">benj.rollan.02@gmail.com</a></p>
                        </div>
                        <div class="contactCard">
                            <i class="fas fa-phone contactIcon"></i>
                            <h3>Phone</h3>
                            <p><a href="tel:+639197269497">+63 919 726 9497</a></p>
                        </div>
                        <div class="contactCard">
                            <i class="fas fa-map-marker-alt contactIcon"></i>
                            <h3>Location</h3>
                            <p>Quezon City, Philippines</p>
                        </div>
                    </div>
                </div>

                <div class="socialLinksSection">
                    <h3 class="socialTitle">Connect With Me</h3>
                    <div class="socialLinks">
                        <a href="https://linkedin.com/in/benjamin-rollan-a2690a229" class="socialLink" target="_blank">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn Profile</span>
                        </a>
                        <a href="https://benjaminn1202.github.io/Portfolio" class="socialLink" target="_blank">
                            <i class="fas fa-globe"></i>
                            <span>Portfolio Website</span>
                        </a>
                        <a href="https://github.com/benjaminn1202" class="socialLink" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>GitHub Projects</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
  }
  
  export default Contact;
  