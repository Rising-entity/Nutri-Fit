import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Section3.css';
import search from '../images/search.png';

export default function Section3(props) {
    const [searchText, setSearchText] = useState('');

    const handleSearchClick = () => {
        // Redirect to "/Nutrients" page only when searchText is not empty
        if (searchText.trim() !== '') {
            props.onClick();
        } else {
            // Show an alert when the search icon is clicked but no input is entered
            alert('Please enter something to search.');
        }
    };

    return (
        <>
            <hr />

            <div className='section3 container'>
                <div>
                    {/* <h5>try us</h5> */}
                    <h4>Get nutritional value by searching food</h4>
                    <p id='mypara'>
                        NUTRI-FIT's Food Nutrition Calculator allows you to choose from thousands of foods and brands, and see nutrition facts such as calories, fat, protein, carbohydrates, fiber and sugar. Get started by entering your food name.
                    </p>
                    <input
                        type='text'
                        className='searchInput'
                        id='searchFood'
                        placeholder='search here'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {/* Use a conditional statement to enable/disable the Link */}
                    {searchText.trim() !== '' ? (
                        <Link to='/Nutrients'>
                            <img src={search} alt='' onClick={handleSearchClick} />
                        </Link>
                    ) : (
                        // Display a disabled search icon
                        <img src={search} alt='' className='disabledSearchIcon' />
                    )}
                </div>
            </div>

            <hr />
        </>
    );
}
