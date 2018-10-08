import React from 'react';
import './common.css';

const Input = ({ percentage }) => {
    console.log('percentage', percentage);
    
    return (
        <div className="progress" >
            <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}/>
        </div>
    )
}
export default Input;
