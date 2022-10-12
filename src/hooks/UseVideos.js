import { useState, useEffect } from "react";
import YouTube from '../api/YouTube'

const UseVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        Search(defaultSearchTerm);
    }, [defaultSearchTerm])

    const Search = async (term) => {
        const response = await YouTube.get('/search', {
            params: {
                q: term
            }
        })

        setVideos(response.data.items);
    }

    return [videos, Search]
}

export default UseVideos