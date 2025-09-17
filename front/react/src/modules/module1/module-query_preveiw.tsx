import { useState, useEffect } from "react"; 

const Query_preview = () => {
    const [data, setData] = useState<number[] | null>(null);
    const [loading, setLoading] = useState(true);

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
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (data === null) return <div>Ошибка загрузки</div>;

    return (
        <div>
            <p>devs: {data[0]}</p>
            <p>syms: {data[1]}</p>
        </div>
    );
};

export default Query_preview;
