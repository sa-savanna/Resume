import React, { useState, createContext, useEffect, useCallback } from 'react'
import { db, storage } from "../../axios"
import "firebase/storage";
import { ref, getDownloadURL } from 'firebase/storage';

export const DataContext = createContext();

const DataProvider = props => {

    const [dataAbout, setDataAbout] = useState(null)
    const [dataContact, setDataContact] = useState(null)
    const [dataPortfolio, setDataPortfolio] = useState(null)
    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState(null);
    const [cvFile, setCvFile] = useState(null)

    const getData = useCallback(() => {
        db.get(`/Data.json`)
            .then(res => {
                setDataAbout(res.data.about)
                setDataContact(res.data.contact)
                setDataPortfolio(res.data.portfolio)
                setLoading(false)
            })
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    useEffect(() => {
        const imageStorageRef = ref(storage, 'images/Ava.JPG')
        const cvStorageRef = ref(storage, "Resume.pdf")
        getDownloadURL(imageStorageRef)
            .then((file) => {
                setImageUrl(file);
            })

            .catch((error) => {
                console.error('Error getting download URL:', error);
            });

        getDownloadURL(cvStorageRef)
            .then((pdf) => {
                setCvFile(pdf)
            })
            .catch((error) => {
                console.error('Error getting download URL:', error);
            });
    }, []);


    useEffect(() => {
        getData()
    }, [getData])

    return (
        <DataContext.Provider
            value={{ dataAbout, dataContact, dataPortfolio, loading, imageUrl, cvFile }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataProvider
