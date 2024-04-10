
import React, { useState, useEffect } from 'react';




function CsvReader() {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        fetch('${process.env.PUBLIC_URL}/vite-project/src/2023 Data Chart1.csv') // Replace 'path/to/your/file.csv' with the actual path to your CSV file
            .then(response => response.text())
            .then(text => {
                // Split text by newlines and then by commas to get rows and cells
                const rows = text.split('\n').map(row => row.split(','));
                setDataRows(rows);
            })
            .catch(error => console.error('Error fetching CSV file:', error));
    }, []);

    return (
        <div>
            <h2>CSV Data</h2>
            <table>
                <tbody>
                    {dataRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default CsvReader; 