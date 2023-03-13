import React, { useState } from 'react'
import GigCard from '../../components/gigCard/GigCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Gigs.scss"
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort =(type) =>{
    setSort(type)
    setOpen(false)
  }
  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrums">FIVERR -- GRAPHIC & DESIGN  </span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <FontAwesomeIcon icon={faArrowDown} onClick={()=>setOpen(!open)}/>
            {open  && (<div className="rightMenu">
              <span onClick={()=>reSort("createdAt")}>Newest</span>
              <span onClick={()=>reSort("sales")}>Best Selling</span>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gigs