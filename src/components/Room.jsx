function Room() {

    return (
    <>
        <section class="roomSection">
            <div class="sectionContainer roomContainer">
                <div class="roomHeader">
                    <h1 class="roomTitle" id="roomTitleHeader">My PomodoRoom</h1>
                    <p class="roomCode" id="roomCodeHeader">Focus together, stay productive.</p>
                </div>

                <div className="roomContent">
                    <div class="roomTimeContainer">
                        <h2 class="sessionTitle">Focus Session</h2>

                        <div class="clock">
                            <div class="progressBar"></div>
                            <span class="time">25:00</span>
                        </div>

                        <div class="buttonGrid">
                            <button class="startButton" id="startButton">Start</button>
                            <button class="pauseButton" id="pauseButton">Pause</button>
                            <button class="stopButton" id="stopButton">Stop</button>
                            <button class="resetButton" id="resetButton">Reset</button>
                        </div>
                    </div>

                    <div className="participantsContainer">
                        <h2 className="participantsHeading">Participants (5)</h2>

                        <div class="participantItem">
                            <img src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/480191602_2430968513914367_1186939029363574916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEslkro2aaH736N2uoh1qsHDH_I4aaTCoIMf8jhppMKglPeb4pRzaxdBHD2PDm3U0S6Y9rO8ZhflaOE6mqwutyn&_nc_ohc=RSwSEzdp01wQ7kNvwFMuqMI&_nc_oc=AdlFYtlsVtTKQbfG67vq8i5Ou8WFtkL9j4LoxFF9mgKjcsT6nIqXCi77O8e07k1w34M&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=oo8K2EJSI3ZGSukruzAZUw&oh=00_AfX_YRjt71IyHESaoanFulz6_BVwZDyAiCk8LuHvooWR7g&oe=68A14B7C" class="participantProfilePicture"></img>
                            <div class="participantInfo">
                                <h3 class="participantName">Participant Name</h3>
                                <p class="participantQuote">Ready to focus</p>
                            </div>
                            <span class="pillHostIndicator">Host</span>
                        </div>
                        <div class="participantItem">
                            <img src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/480191602_2430968513914367_1186939029363574916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEslkro2aaH736N2uoh1qsHDH_I4aaTCoIMf8jhppMKglPeb4pRzaxdBHD2PDm3U0S6Y9rO8ZhflaOE6mqwutyn&_nc_ohc=RSwSEzdp01wQ7kNvwFMuqMI&_nc_oc=AdlFYtlsVtTKQbfG67vq8i5Ou8WFtkL9j4LoxFF9mgKjcsT6nIqXCi77O8e07k1w34M&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=oo8K2EJSI3ZGSukruzAZUw&oh=00_AfX_YRjt71IyHESaoanFulz6_BVwZDyAiCk8LuHvooWR7g&oe=68A14B7C" class="participantProfilePicture"></img>
                            <div class="participantInfo">
                                <h3 class="participantName">Participant Name</h3>
                                <p class="participantQuote">Ready to focus</p>
                            </div>
                        </div>
                        <div class="participantItem">
                            <img src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/480191602_2430968513914367_1186939029363574916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEslkro2aaH736N2uoh1qsHDH_I4aaTCoIMf8jhppMKglPeb4pRzaxdBHD2PDm3U0S6Y9rO8ZhflaOE6mqwutyn&_nc_ohc=RSwSEzdp01wQ7kNvwFMuqMI&_nc_oc=AdlFYtlsVtTKQbfG67vq8i5Ou8WFtkL9j4LoxFF9mgKjcsT6nIqXCi77O8e07k1w34M&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=oo8K2EJSI3ZGSukruzAZUw&oh=00_AfX_YRjt71IyHESaoanFulz6_BVwZDyAiCk8LuHvooWR7g&oe=68A14B7C" class="participantProfilePicture"></img>
                            <div class="participantInfo">
                                <h3 class="participantName">Participant Name</h3>
                                <p class="participantQuote">Ready to focus</p>
                            </div>
                        </div>
                        <div class="participantItem">
                            <img src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/480191602_2430968513914367_1186939029363574916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEslkro2aaH736N2uoh1qsHDH_I4aaTCoIMf8jhppMKglPeb4pRzaxdBHD2PDm3U0S6Y9rO8ZhflaOE6mqwutyn&_nc_ohc=RSwSEzdp01wQ7kNvwFMuqMI&_nc_oc=AdlFYtlsVtTKQbfG67vq8i5Ou8WFtkL9j4LoxFF9mgKjcsT6nIqXCi77O8e07k1w34M&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=oo8K2EJSI3ZGSukruzAZUw&oh=00_AfX_YRjt71IyHESaoanFulz6_BVwZDyAiCk8LuHvooWR7g&oe=68A14B7C" class="participantProfilePicture"></img>
                            <div class="participantInfo">
                                <h3 class="participantName">Participant Name</h3>
                                <p class="participantQuote">Ready to focus</p>
                            </div>
                        </div>
                        <div class="participantItem">
                            <img src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/480191602_2430968513914367_1186939029363574916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEslkro2aaH736N2uoh1qsHDH_I4aaTCoIMf8jhppMKglPeb4pRzaxdBHD2PDm3U0S6Y9rO8ZhflaOE6mqwutyn&_nc_ohc=RSwSEzdp01wQ7kNvwFMuqMI&_nc_oc=AdlFYtlsVtTKQbfG67vq8i5Ou8WFtkL9j4LoxFF9mgKjcsT6nIqXCi77O8e07k1w34M&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=oo8K2EJSI3ZGSukruzAZUw&oh=00_AfX_YRjt71IyHESaoanFulz6_BVwZDyAiCk8LuHvooWR7g&oe=68A14B7C" class="participantProfilePicture"></img>
                            <div class="participantInfo">
                                <h3 class="participantName">Participant Name</h3>
                                <p class="participantQuote">Ready to focus</p>
                            </div>
                        </div>
                    </div>

                    <div className="sessionProgressContainer">
                        <h2 className="sessionProgressHeading">Session Progress</h2>

                        <div className="sessionProgressInformationContainer">
                            <p><strong>Focus Time:</strong> 2/4 Completed</p>
                            <p><strong>Break Time:</strong> 5 minutes break coming up</p>
                            <p><strong>Total Time:</strong> 1hr 15min</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
  }
  
  export default Room;
  