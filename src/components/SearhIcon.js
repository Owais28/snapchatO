import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";
// import { FiSearch } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

export default function SearhIcon() {


    const [openSearch, setOpenSearch] = React.useState(false)

    React.useEffect(
        () => {
            // console.log(openSearch)
            const searchIcon = document.querySelector('.search__icon')
            const searchInput = document.querySelector('.search__bar')

            if(openSearch){
                searchIcon.classList.add('mr-1','ml-1')
                searchInput.classList.add('visibility', 'mr-1')
                searchInput.focus()
            } else {
                searchIcon.classList.remove('mr-1', 'ml-1')
                searchInput.classList.remove('visibility', 'mr-1')
                searchInput.value = ''
            }
        }
    ,[openSearch])


    return <div className="search__container" onClick={() => setOpenSearch((prevOption) => !prevOption)}>
        <div className="search__wrapper">
        <IoSearch className="search__icon"/>
        <input type="search" className="search__bar" placeholder="Serach" />
        </div>

    </div>;
}
