import React, { useEffect, useState } from 'react'
import "./style.css"
import { IoIosSearch } from "react-icons/io";

const SearchCategory = ({ categories, setSearchData }) => {

    const [search, setSearch] = useState("");

    useEffect(() => {
        const filtered = categories.filter((c) =>
            c.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchData(filtered);
    }, [search, categories, setSearchData]);

    return (
        <>
            <div className='position-relative w-75 m-auto '>
                <div className='position-absolute' style={{top: "8px" , right:"10px"}}>
                    <span>
                        <IoIosSearch size={22}/>
                    </span>
                </div>
                <input
                    type="text"
                    placeholder="Search by Category Name"
                    className="search-bar d-flex justify-content-center align-items-center m-auto rounded rounded-3 w-100  mb-5 p-2"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </>
    )
}

export default SearchCategory