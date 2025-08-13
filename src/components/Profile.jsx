function Profile() {

    return (
      <>
        <section className="profileSection">
            <div className="sectionContainer profileContainer">
                <h1 className="profileTitle">Profile</h1>
                <p className="profileText">Here, you can see your details and edit them!</p>

                <div className="profileContent">
                    <div className="profileInformationContainer">
                        <h2>Profile Information</h2>

                        <div class="profilePictureContainer">
                            <img src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/480191602_2430968513914367_1186939029363574916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEslkro2aaH736N2uoh1qsHDH_I4aaTCoIMf8jhppMKglPeb4pRzaxdBHD2PDm3U0S6Y9rO8ZhflaOE6mqwutyn&_nc_ohc=RSwSEzdp01wQ7kNvwFMuqMI&_nc_oc=AdlFYtlsVtTKQbfG67vq8i5Ou8WFtkL9j4LoxFF9mgKjcsT6nIqXCi77O8e07k1w34M&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=oo8K2EJSI3ZGSukruzAZUw&oh=00_AfX_YRjt71IyHESaoanFulz6_BVwZDyAiCk8LuHvooWR7g&oe=68A14B7C" className="profilePicture"></img>
                            <button className="pickProfilePictureButton" id="pickProfilePictureButton"><i class="fas fa-pen"></i></button>
                        </div>

                        <label>Username</label>
                        <input type="text" placeholder="e.g. benjaminn1202" id="profileName"></input>
                        <label>Email</label>
                        <input type="text" placeholder="e.g. benjaminn1202@gmail.com" id="profileEmail"></input>
                        <button className="updateProfileButton" id="updateProfileButton">Update Profile</button>
                    </div>

                    <div className="profileStatisticsContainer">
                        <h2>Statistics</h2>

                        <div className="pomodoroStatisticContainer pomodorosCompletedContainer">
                            <h3>123</h3>
                            <p>Pomodoros Completed</p>
                        </div>
                        
                        <div className="pomodoroStatisticContainer roomsJoinedContainer">
                            <h3>123</h3>
                            <p>Rooms Joined</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Profile;
  