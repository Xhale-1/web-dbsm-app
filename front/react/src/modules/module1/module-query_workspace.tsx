import { useState, useEffect } from "react"

const Query_workspace = () => {
    const [data, setData] = useState<string| null>()

    useEffect(() => {
        fetch("/api/devs_bd_status")
            .then(response => {
                console.log("Response status:", response.status);
                console.log("Response headers:", Object.fromEntries(response.headers.entries()));
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Received data:", data);
                console.log("Data type:", typeof data);
                console.log("Is array:", Array.isArray(data));
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setData(null);
            })
    }, []);

    if (!data) return <div>Ошибка загрузки</div>;
    return (
        <div>
            <p>devcount: {data[0]}</p>
            <p>symcount: {data[1]}</p>
        </div>
    )
}

export default Query_workspace