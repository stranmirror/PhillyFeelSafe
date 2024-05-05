
import React, { useState, useEffect } from 'react';
import './Data.css';
import * as BiIcons from 'react-icons/bi';
import DataMap from './DataMap';

function CsvReader() {
    const [dataRows, setDataRows] = useState([]);
// wl484: added serveal new constants to set different useState (displaying vs not displaying) 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const pageSize = 10;

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

    const startIndex = ( currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageData = dataRows.slice(startIndex, endIndex);

    const goToPage = ( pageNumber ) => {
        setCurrentPage( pageNumber );
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
                    placeholder="Search by Block and Street"
                    value={searchTerm}
                    onChange={handleSearchChange}
                > 
                </input>
            </div> 
            <span>Precise Search Example: 0000 block Philly Ave</span>
            <br></br>
            <span>General Search Example: Philly Ave</span>
            {/* Author: Weihao Li, 4/21/24 - check if condition are meet and if meet display the map*/}
            {showData && filteredData.length > 0 && <DataMap filteredData={filteredData} />}
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
            <div>
                <button disabled={currentPage === 1} onClick={() => goToPage(currentPage -1)}>Previous</button>
                <span>Page {currentPage} of {Math.ceil(dataRows.length / pageSize)}</span>
                <button disabled={currentPage === Math.ceil(dataRows.length / pageSize)} onClick={() => goToPage(currentPage + 1)}>Next</button>
            </div>
        </div>

    );
}
export default CsvReader; 