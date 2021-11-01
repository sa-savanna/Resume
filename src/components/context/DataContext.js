import React, { useState, createContext, useEffect, useCallback } from 'react'
import axios from "../../axios"

export const DataContext = createContext();

const DataProvider = props => {

    const [dataAbout, setDataAbout] = useState(null)
    const [dataContact, setDataContact] = useState(null)
    const [dataPortfolio, setDataPortfolio] = useState(null)
    const [loading, setLoading] = useState(true)

    const getData = useCallback(() => {
        axios.get(`/Data.json`)
            .then(res => {
                setLoading(true)
                setDataAbout(res.data.about)
                setDataContact(res.data.contact)
                setDataPortfolio(res.data.portfolio)
                setLoading(false)
            })
            .catch(error => console.error(error))
    },[])

    useEffect(() => {
        getData()
    }, [getData])

     

    return (
        <DataContext.Provider
            value={{ dataAbout, dataContact, dataPortfolio, loading }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataProvider
