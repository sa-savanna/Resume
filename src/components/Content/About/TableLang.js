import React from 'react'
import { FaCircle } from 'react-icons/fa';
import { Fragment } from 'react';
import css from "../topBar.module.css"

const TableLang = () => {
    return (
        <Fragment>
            <div className={css.bodyLang}>
                <div>
                    <span className={css.headLang}>Languages</span>
                    <div className={css.tableLang}>
                        <p>English</p>
                        <span>
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle />
                            <FaCircle />
                        </span>
                        <p>French</p>
                        <span>
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle />
                            <FaCircle />
                            <FaCircle />
                        </span>
                        <p>Dutch</p>
                        <span>
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle style={{ color: '#007bff' }} />
                            <FaCircle />
                            <FaCircle />
                            <FaCircle />
                            <FaCircle />
                        </span>
                        <p>Russian, Ukranian</p>
                        <span>
                            Native
                        </span>
                    </div>

                </div>
                <div>
                    <span className={css.headLang}>Info</span>
                    <div className={css.tableLang}>
                        <p> Work permit</p>
                        <span>unlimited</span>
                        <p> Card residence</p>
                        <span>till Feb. 2023</span>
                        <p> Driver licence</p>
                        <span>category B</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TableLang
