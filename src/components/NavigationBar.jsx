import { useState } from 'react'

function NavigationBar() {
  const [navState, setNavState] = useState(3);

  return (
    <>
      <nav>
        <a className='navHeader'>
          <img className='navIcon' src='/pomodorooms.png' alt='Logo' />
          <span className='navHeading'>PomodoRooms</span>
        </a>

        <div className='navContent'>
          {navState === 1 && (
            <>
              <a className='navItem'>
                <span className='navItemText'>Profile</span>
              </a>
              <a className='navItem'>
                <span className='navItemText'>About</span>
              </a>
              <a className='navItem'>
                <span className='navItemText'>Contact</span>
              </a>
            </>
          )}

          {navState === 2 && (
            <>
              <a className='navItem'>
                <span className='navItemText'>Home</span>
              </a>
              <a className='navItem'>
                <span className='navItemText'>Logout</span>
              </a>
            </>
          )}

          {navState === 3 && (
            <>
              <a className='navItem'>
                <span className='navItemText'>Leave Room</span>
              </a>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
