import React from 'react'
import { FaCircle } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import { Fragment } from 'react';
import css from "../topBar.module.css"

const TableLang = () => {
    return (
        <Fragment>
            <div className={css.bodyLang}>
                <span className={css.headLang}>Languages</span>
                <Table borderless className={css.tableLang}>
                    <tbody>
                        <tr>
                            <td>English</td>
                            <td>
                                <span>
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle />
                                    <FaCircle />

                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>French</td>
                            <td>
                                <span>
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle />
                                    <FaCircle />
                                    <FaCircle />
                                </span>
                            </td>

                        </tr>
                        <tr>
                            <td>Dutch</td>
                            <td>
                                <span>
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle style={{ color: '#007bff' }} />
                                    <FaCircle />
                                    <FaCircle />
                                    <FaCircle />
                                    <FaCircle />
                                </span>
                            </td>

                        </tr>
                        <tr>
                            <td>Russian</td>
                            <td><span>
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                            </span>
                            </td>

                        </tr>
                        <tr>
                            <td>Ukranian</td>
                            <td><span>
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                                <FaCircle style={{ color: '#007bff' }} />
                            </span>
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}

export default TableLang
