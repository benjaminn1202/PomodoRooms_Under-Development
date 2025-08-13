function Home() {

  return (
    <>
        <section className="heroSection">
            <div className="sectionContainer heroContainer">
                <div className="heroDimmer"></div>
                <h1>Welcome Back!</h1>
                <p>Ready to boost your productivity with friends?</p>
            </div>
        </section>

        <section className="roomSelectionSection">
            <div className="sectionContainer roomSelectionContainer">
                <div className="createOrJoinRoomContainer">
                    <h2 className="createRoomHeading">Create Room</h2>
                    <label>Room Name</label>
                    <input type="text" placeholder="e.g. Study Session, Work Focus" id="create-roomName"></input>
                    <button className="createRoomButton" id="createRoomButton">Create Room</button>
                </div>

                <div className="createOrJoinRoomContainer">
                    <h2 className="joinRoomHeading">Join Room</h2>
                    <label>Room Code</label>
                    <input type="text" placeholder="Enter 6-digit code" id="join-roomCode"></input>
                    <button className="joinRoomButton"  id="joinRoomButton">Join Room</button>
                </div>
            </div>
        </section>
    </>
  );
}

export default Home;
