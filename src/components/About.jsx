function About() {

    return (
    <>
        <section class="aboutSection">
            <div class="sectionContainer aboutContainer">
                <div class="aboutHeader">
                    <h1 class="aboutTitle">About PomodoRooms</h1>
                    <h2 class="aboutTagline">Focus together, stay productive.</h2>
                    <p class="aboutDescription">
                        PomodoRooms helps you stay productive by working together in real-time
                        virtual rooms. It's a cozy, collaborative way to focus, stay on track, and
                        take breaks, all based on the proven Pomodoro Technique.
                    </p>
                </div>

                <div class="featureHighlight">
                    <h3 class="featureTitle">Why Choose PomodoRooms?</h3>
                    <div class="featureList">
                        <div class="featureItem">
                            <i class="fas fa-users"></i>
                            <span>Collaborative Focus</span>
                        </div>
                        <div class="featureItem">
                            <i class="fas fa-clock"></i>
                            <span>Proven Technique</span>
                        </div>
                        <div class="featureItem">
                            <i class="fas fa-chart-line"></i>
                            <span>Track Progress</span>
                        </div>
                        <div class="featureItem">
                            <i class="fas fa-heart"></i>
                            <span>Stay Motivated</span>
                        </div>
                    </div>
                </div>

                <div class="howItWorksSection">
                    <h2 class="howItWorksHeading">How It Works</h2>
                    <div class="stepsContainer">
                        <div class="stepContainer">
                            <i class="fas fa-user-plus stepIcon"></i>
                            <h3>Step 1: Sign Up / Log In</h3>
                            <p>Create an account to save your sessions and track your productivity over time. Join our community of focused learners and workers.</p>
                        </div>
                        <div class="stepContainer">
                            <i class="fas fa-door-open stepIcon"></i>
                            <h3>Step 2: Create or Join a Room</h3>
                            <p>Start your own Pomodoro session or join friends and colleagues via a simple room code. Collaborate in real-time with anyone, anywhere.</p>
                        </div>
                        <div class="stepContainer">
                            <i class="fas fa-brain stepIcon"></i>
                            <h3>Step 3: Focus & Break Cycles</h3>
                            <p>Work in timed focus sessions (25 minutes), followed by refreshing short breaks (5 minutes). The proven rhythm for maximum productivity.</p>
                        </div>
                        <div class="stepContainer">
                            <i class="fas fa-handshake stepIcon"></i>
                            <h3>Step 4: Stay Connected</h3>
                            <p>See who's in the room, track collective progress, and keep each other motivated throughout the day. Achieve more together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
  }
  
  export default About;
  