import React, { useState, createContext, useEffect, useCallback } from 'react'
import { db, storage } from "../../axios"
import "firebase/storage";
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const DataContext = createContext();

const DataProvider = props => {

    const [dataAbout, setDataAbout] = useState(null)
    const [dataContact, setDataContact] = useState(null)
    const [dataPortfolio, setDataPortfolio] = useState(null)
    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState(null);
    const [cvFile, setCvFile] = useState(null)
    const [portfolioImagesUrl, setImagesUrl] = useState([]);

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
        const imageAvatar = ref(storage, 'images/Ava.JPG')
        const cvStorageRef = ref(storage, "Resume.pdf")
        const imagesRef = ref(storage, 'images/portfolio/');

        getDownloadURL(imageAvatar)
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


        listAll(imagesRef)
            .then((res) => {
                const imageUrls = res.items.map((item) => {
                    return getDownloadURL(item);
                });

                Promise.all(imageUrls)
                    .then((urls) => {
                        setImagesUrl(urls);
                    })
                    .catch((error) => {
                        console.error('Error getting image URLs:', error);
                    });
            })
            .catch((error) => {
                console.error('Error listing images:', error);
            });
    }, [])


    useEffect(() => {
        getData()
    }, [getData])

    return (
        <DataContext.Provider
            value={{ dataAbout, dataContact, dataPortfolio, loading, imageUrl, cvFile, portfolioImagesUrl }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataProvider
