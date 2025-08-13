function Login() {

    return (
    <>
    <div class="page-wrapper">
        <input type="radio" id="login-tab" name="form-toggle" checked></input>
        <input type="radio" id="signup-tab" name="form-toggle"></input>

        <div class="container">
            <div class="header">
                <img class="logo" src="/pomodorooms.png"></img>
                <h1 class="app-name">PomodoRooms</h1>
                <p class="tagline">Focus together, stay productive.</p>
            </div>

            <div class="tab-navigation">
                <label for="login-tab" class="tab-button login-tab">Log In</label>
                <label for="signup-tab" class="tab-button signup-tab">Sign Up</label>
            </div>

            <div class="form-container">
                <form class="login-form" method="post" action="/login">
                    <div class="form-group">
                        <label class="form-label" for="login-email">Email</label>
                        <input 
                            type="email" 
                            id="login-email" 
                            name="email" 
                            class="form-input" 
                            placeholder="Enter your email"
                            required
                        ></input>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="login-password">Password</label>
                        <input type="password" id="login-password" name="password" class="form-input" placeholder="Enter your password" required></input>
                    </div>

                    <button type="submit" class="btn-primary" id="login-button">Log In</button>

                    <div class="divider">
                        <span>or</span>
                    </div>

                    <a href="/auth/google" class="btn-google">
                        <div class="google-icon"></div>
                        Continue with Google
                    </a>
                </form>

                <form class="signup-form" method="post" action="/signup">
                    <div class="form-group">
                        <label class="form-label" for="signup-name">Full Name</label>
                        <input type="text" id="signup-name" name="name" class="form-input" placeholder="Enter your full name" required></input>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="signup-email">Email</label>
                        <input type="email" id="signup-email" name="email" class="form-input" placeholder="Enter your email" required></input>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="signup-password">Password</label>
                        <input type="password" id="signup-password" name="password" class="form-input" placeholder="Create a password" required></input>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="signup-confirm-password">Confirm Password</label>
                        <input type="password" id="signup-confirm-password" name="confirmPassword" class="form-input" placeholder="Confirm your password" required></input>
                    </div>

                    <button type="submit" class="btn-primary">Sign Up</button>

                    <div class="divider">
                        <span>or</span>
                    </div>

                    <a href="/auth/google" class="btn-google">
                        <div class="google-icon"></div>
                        Continue with Google
                    </a>
                </form>
            </div>
        </div>
    </div>
    </>
    );
  }
  
  export default Login;