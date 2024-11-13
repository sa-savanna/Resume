import React, { memo } from 'react'
import { ProgressBar } from 'react-bootstrap';


const TableLang = ({ data }) => {

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

    let list = ''
    let progressBar = ''
    let infoTitle = ''
    let infoValidity = ''


    if (data) {
        list = data.list.map((i, key) => (
            <p key={key}>{i.name}</p>
        ))
        progressBar = data.list.map(({ isLearning, level }, key) => (
            <ProgressBar
                key={key}
                now={calculatePercentOfKnowledge(level)}
                label={level}
                animated={isLearning}
            />
        ))
        infoTitle = data.info.map(({ title }, key) => (
            <p key={key}>{title}</p>
        ))
        infoValidity = data.info.map(({ valid }, key) => (
            <p key={key}>{valid}</p>
        ))

    }


    return (
        <>
            <div className="bodyLang">
                <div>
                    <div className="header">Languages</div>
                    <div className="table">
                        <div>{list}</div>
                        <div className='progressBar'>
                            {progressBar}

                        </div>
                        <div></div>
                        <legend className='legend'>
                            <ProgressBar label='* learning' animated={true} now={100} />
                            <ProgressBar label='* on pause' animated={false} now={100} />
                        </legend>
                    </div>
                </div>
                <div>
                    <div className="header">Info</div>
                    <div className="table">
                        <div >
                            {infoTitle}
                        </div>
                        <div>
                            {infoValidity}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default memo(TableLang)