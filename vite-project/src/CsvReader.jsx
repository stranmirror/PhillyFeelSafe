
import React, { useState, useEffect } from 'react';
import './Data.css';
import * as BiIcons from 'react-icons/bi';
import DataMap from './DataMap';

function CsvReader() {
// wl484: added new headers constants to fetch new data
    const [headers, setHeaders] = useState([]);
    const [dataRows, setDataRows] = useState([]);
// wl484: added serveal new constants to set different useState (displaying vs not displaying) 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showData, setShowData] = useState(false);
// wl484: two constants added to set up paging function
    const [ currentPage, setCurrentPage ] = useState(1);
// wl484: set number of maximum data in table format per page
    const pageSize = 20;
// wl484: set number of maximum pages displaying at once
    const maxDisplayedPages = 5;

    useEffect(() => {
        fetch('/src/Data/2023 Data Chart1.csv') 
            .then(response => response.text())
            .then(text => {
                // Split text by newlines and then by commas to get rows and cells
                const rows = text.split('\n').map(row => row.split(','));
                // feching header data from csv file row 0 
                setHeaders(rows[0]);
                setDataRows(rows.slice(1));
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

        setCurrentPage(1);

    };
{/* From ChatGPT, 5/05/24 */}
{/* Modified by Weihao Li, 5/05/24 */}
{/* The following const are for pagination feature */}
// wl484: set pages to array and adding a new function that displays only the necessary page numbers
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const pages = Array.from({ length: totalPages }, (_, index) => index +1);
// wl484: basic pagination logic to make data spread out on multiple pages
    const startIndex = ( currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    const currentPageData = filteredData.slice(startIndex, endIndex);

    const goToPage = ( pageNumber ) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) { //wl484: added new logic to ensure pageNumber is within the range
        setCurrentPage( pageNumber );
        }
    };
// wl484: set the page number to only number needed 
    const startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
    const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);
// wl484: the following is what will display in screen itself
    return (
    
        <div className="background1">
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
            <span className="textSample">Precise Search Example: 0000 block Philly Ave</span>
            <br></br>
            <span className="textSample">General Search Example: Philly Ave</span>
            {/* Author: Weihao Li, 4/21/24 - check if condition are meet and if meet display the map*/}
            {showData && filteredData.length > 0 && <DataMap filteredData={filteredData} />}
            {/* wl484: displays the filtered outputs into table format using rows */}
    {showData && (
//wl484: added conditional rendering to render the table and header only when user input valid value
       <div className="tableContainer">
            <table className="dataTable">
                <thead>
                    <tr>
{/* wl484: set headers using new fetched header data*/}
                        {headers.map((header,index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
{/* wl484: the rest of data showing in data table */}
                <tbody>
                    {currentPageData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
       )}
            {/* wl484: displays message if user inputted invalid location name that doesn't match any dataset */}
            {showData && filteredData.length === 0 && (
                <p className="noSearchResult">No Crime Data found on this location.</p>
            )}
{/* From ChatGPT, 5/05/24 */}
{/* Modified by Weihao Li, 5/05/24 */}
            <div className="pageContainer">
{/* wl484: button logic that goes back one page */}
                <button disabled={currentPage === 1} onClick={() => goToPage(currentPage -1)}>Previous</button>
{/* wl484: the new index and React.Fragment are use to display ... to inform user of the collapse pages*/}
                {pages.slice(startPage - 1, endPage).map((page, index) => (
                <span className="pageNumber" key={page}>
                    {index === 0 && startPage > 1 && <span className="ellipsis">...</span>}
{/* wl484: applied a class Name to the current page button */}
                    <button className={currentPage === page ? "currentPage" : ""} onClick={() => goToPage(page)}>{page}</button>
                    {index === endPage - startPage && endPage <totalPages && <span className="ellipsis">...</span>}
                </span>
                ))}
{/* wl484: button logic that move forward one page*/}
                <button disabled={currentPage === Math.ceil(dataRows.length / pageSize)} onClick={() => goToPage(currentPage + 1)}>Next</button>
            </div>
{/* wl484: information for psa */}
            {showData && (
            <p id="psa">PSA or Police Service Area is a designated geographic area for local policing. For more information click here: 
                <a className="psaLink" href="https://districts.phillypolice.com/" target="_blank">https://districts.phillypolice.com/</a>
            </p>
            )}
        </div>
    
        

    );
}
export default CsvReader; 