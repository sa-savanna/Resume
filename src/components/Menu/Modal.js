import React from 'react'

const Modal = ({ setModal, file }) => {
    
    return (
        <>
            <div className='blackshadow'>
                <div className='custom-modal'>
                {file && <iframe src={file} title='file' width="100%" height="100%" />}
                    <div className='delete-icon' onClick={() => setModal(false)} >
                        x
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal