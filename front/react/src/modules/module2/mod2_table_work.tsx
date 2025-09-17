import { useEffect, useState } from "react"
import "./TableWorkCss.css";

const TableWork = () => {
    const [table, setTable] = useState<Array<Record<string,string>>>([]);
    const [count, setCount] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        fetch("/api/table")
            .then(response => response.json())
            .then(data => {
                setTable(data);
                setCount(data.length);
                setLoaded(true);
            });
    }, []);

    return(
        <div>
            <div>
                Кол-во строк: {count}
            </div>

            <div className="grid-item200">
                {loaded && (
                    <table className="tab00">
                        <thead>
                        <tr>
                            {Object.keys(table[0]).map((key) => (
                            <th key={key}>{key}</th>
                            ))}
                        </tr>
                        </thead>

                        <tbody>
                        {table.map((item, index) => (
                            <tr key={index}>
                            {Object.values(item).map((value, valueIndex) => (
                                <td key={valueIndex}>{value}</td>
                            ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default TableWork;