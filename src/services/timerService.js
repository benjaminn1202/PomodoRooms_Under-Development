// timerService.js
export const timerSettings = {
    focusDuration: 25 * 60, // 25 minutes in seconds
    shortBreakDuration: 5 * 60, // 5 minutes in seconds
    longBreakDuration: 15 * 60, // 15 minutes in seconds
    roundsBeforeLongBreak: 4
  };
  
  export const calculateNextTimerState = (currentState) => {
    const { currentTime, isRunning, isBreak, currentRound, totalRounds } = currentState;
    
    if (!isRunning) {
      return { ...currentState, isRunning: true };
    }
    
    if (currentTime > 0) {
      return { ...currentState, currentTime: currentTime - 1 };
    }
    
    // Time's up - transition to next state
    if (isBreak) {
      // Break finished, start focus
      return {
        currentTime: timerSettings.focusDuration,
        isRunning: false,
        isBreak: false,
        currentRound: currentRound + 1,
        totalRounds
      };
    } else {
      // Focus finished, start break
      const isLongBreak = currentRound % timerSettings.roundsBeforeLongBreak === 0;
      return {
        currentTime: isLongBreak ? timerSettings.longBreakDuration : timerSettings.shortBreakDuration,
        isRunning: false,
        isBreak: true,
        currentRound,
        totalRounds
      };
    }
  };
  
  export const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };