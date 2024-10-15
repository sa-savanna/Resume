import React from 'react'

const Modal = ({ setModal, resume }) => {
    
    return (
        <>
            <div className='blackshadow'>
                <div className='custom-modal'>
                {resume && <iframe src={resume} title='resume' width="100%" height="100%" />}
                    <div className='delete-icon' onClick={() => setModal(false)} >
                        x
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal