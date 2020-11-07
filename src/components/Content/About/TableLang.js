import React from 'react'
import { Fragment } from 'react';
import { ProgressBar } from 'react-bootstrap';

const data = {
    languages: ["English", "French", "Dutch", 'Russian', 'Ukranian'],
    levels: ['B2', 'B1', '2.2', 'Native', 'Native'],
    info: [
        { name: 'Work permit', title: 'unlimited' },
        { name: 'Card residence', title: 'till Feb. 2023' },
        { name: 'Driver licence', title: "category B" }
    ]
}



function calculatePercentOfKnowledge(level) {

    if (level === "A1") {
        return Math.round(100 / 6)
    } else if (level === 'A2') {
        return Math.round(100 / 3)
    } else if (level === 'B1') {
        return Math.round(100 / 2)
    } else if (level === 'B2') {
        return Math.round(100 * 2 / 3)
    } else if (level === 'C1') {
        return Math.round(100 * 5 / 6)
    } else if (level === '1.1') {
        return Math.round(100 / 10)
    } else if (level === '1.2') {
        return Math.round(100 / 5)
    } else if (level === '2.1') {
        return Math.round(100 * 3 / 10)
    } else if (level === '2.2') {
        return Math.round(100 * 2 / 5)
    } else if (level === '2.3') {
        return Math.round(100 / 2)
    } else if (level === '2.4') {
        return Math.round(100 * 3 / 5)
    } else if (level === '3.1') {
        return Math.round(100 * 7 / 10)
    } else if (level === '3.2') {
        return Math.round(100 * 4 / 5)
    } else if (level === '4.1') {
        return Math.round(100 * 9 / 10)
    } else {
        return 100;
    }
}

const TableLang = () => {
    return (
        <Fragment>
            <div className="bodyLang">
                <div>
                    <span className="headLang">Languages</span>
                    <div className="tableLang">
                        <div>
                            {
                                data.languages.map(i => (
                                    <p key={i}>{i}</p>
                                ))
                            }
                        </div>
                        <span>
                            <ProgressBar now={calculatePercentOfKnowledge(data.levels[0])} label={data.levels[0]} />
                            <ProgressBar now={calculatePercentOfKnowledge(data.levels[1])} label={data.levels[1]} />
                            <ProgressBar now={calculatePercentOfKnowledge(data.levels[2])} label={data.levels[2]} />
                            <ProgressBar now={calculatePercentOfKnowledge(data.levels[3])} label={data.levels[3]} />
                            <ProgressBar now={calculatePercentOfKnowledge(data.levels[4])} label={data.levels[4]} />
                        </span>
                    </div>
                </div>
                <div>
                    <span className="headLang">Info</span>
                    <div className="tableLang">
                        <p>{data.info[0].name}</p>
                        <span>{data.info[0].title}</span>
                        <p>{data.info[1].name}</p>
                        <span>{data.info[1].title}</span>
                        <p>{data.info[2].name}</p>
                        <span>{data.info[2].title}</span>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default TableLang
