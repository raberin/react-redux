import React, { Fragment } from 'react';

const Input = ({ label, name, type = 'text', value, onChange }) => {
    return (
        <div className={type !== 'checkbox' ? 'form-group' : 'form-check'}>
            {type !== 'checkbox' ?
                (
                    <Fragment>
                        <label htmlFor={name} className='form-text text-muted'>{label}</label>
                        <input type={type} name={name} id={name} className='form-control' value={value} placeholder={label} autoComplete='off' onChange={onChange} />
                    </Fragment>
                ) : (
                    <div>
                        <input type={type} name={name} id={name} className='form-check-input' checked={value} onChange={onChange} />
                        <label className='form-check-label' htmlFor={name}>{label}</label>
                    </div>
                )}

        </div>
    )
}
export default Input;
