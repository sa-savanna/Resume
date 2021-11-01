import React from 'react'
import { ProgressBar } from 'react-bootstrap';


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

const TableLang = ({data}) => {

    let list = []
    let progressBar = []
    let infoTitle = []
    let infoValidity = []

    
    if (data) {
        list = data.list.map((i, key) => (
            <p key={key}>{i.name}</p>
        ))
        progressBar = data.list.map((i, key) => (
            <ProgressBar
                key={key}
                now={calculatePercentOfKnowledge(i.level)}
                label={i.level}
                animated={i.isLearning}
            />
        ))
        infoTitle = data.info.map((i, key) => (
            <p key={key}>{i.title}</p>
        ))
        infoValidity = data.info.map((i, key) => (
            <p key={key}>{i.valid}</p>
        ))

    }


    return (
        <>
            <div className="bodyLang">
                <div>
                    <span className="headLang">Languages</span>
                    <div className="tableLang">
                        <div>
                            {list}
                        </div>
                        <span>
                            {progressBar}
                        </span>
                    </div>
                </div>
                <div>
                    <span className="headLang">Info</span>
                    <div className="tableLang">
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

export default TableLang