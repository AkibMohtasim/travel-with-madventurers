import { useEffect } from "react";
import { useState } from "react"

const useAdventures = () => {
    const [adventures, setAdventures] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/adventures')
            .then(res => res.json())
            .then(data => setAdventures(data));
    }, []);
    return [adventures, setAdventures];
}

export default useAdventures;