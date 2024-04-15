
import React, { useState, useEffect } from 'react';
import './Data.css';
import * as BiIcons from 'react-icons/bi';

function CsvReader() {
    const [dataRows, setDataRows] = useState([]);
// wl484: added serveal new constants to set different useState (displaying vs not displaying) 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        fetch('/src/Data/2023 Data Chart1.csv') 
            .then(response => response.text())
            .then(text => {
                // Split text by newlines and then by commas to get rows and cells
                const rows = text.split('\n').map(row => row.split(','));
                setDataRows(rows);
            })
            .catch(error => console.error('Error fetching CSV file:', error));
    }, []);

    // wl4843: event handler that set the displaying data base on user inputed term 
    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    // wl484: added if-else statement to set the page to not displaying all data when user deleted their input
        if (searchTerm.trim() === '') {
            setFilteredData([]);
    // wl484: set useState to false, which is not displaying data when there is no user input
            setShowData(false) 
        } else {
   // wl484: logic of searching for keyword (location which is the 4th row of our csv dataset)
    const filteredRows = dataRows.filter(row => {
// wl484: set both the user input and the data in csv to lowercase for better flexiability
        return row[3] && row[3].toLowerCase().includes(searchTerm.toLowerCase());
        });
// wl484: changes useState to ture meaning displaying data when there is user input
    setFilteredData(filteredRows);
    setShowData(true);

        }

    };
// wl484: the following is what will display in screen itself
    return (
        <div>
            <h2>Search for Crime history at Your Location:</h2>
            <div className = "SearchBarContainer">
                <BiIcons.BiSearch className = "SearchIcon"></BiIcons.BiSearch>
            {/* wl484: this is the field for user to type in input for searching */}
                <input 
                    className = "SearchBar"
                    type="text"
                    placeholder="Search by Location"
                    value={searchTerm}
                    onChange={handleSearchChange}
                > 
                </input>
            </div>
            {/* wl484: displays the filtered outputs into table format using rows */}
            <table>
                <tbody>
                    {filteredData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* wl484: displays message if user inputted invalid location name that doesn't match any dataset */}
            {showData && filteredData.length === 0 && (
                <p>No Crime Data found on this location.</p>
            )}
        </div>

    );
}
export default CsvReader; 