import React, { useState, useEffect } from 'react';
import '../styles/progressbar.scss';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simula un progreso gradual cada segundo
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);
    return (
        <div className='parentdiv'>
            <div className='childdiv' style={{ width: `${progress}%` }} >
                <span className='progresstext' >{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar;
