import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props)  {
  let [search,setSearch] = useState("")
 function postSearch(e){
    e.preventDefault()
    props.changeSearch(search)
    setSearch("")
  }
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary background sticky-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light" to="/" onClick={()=>props.changeSearch("")}>NewsApp</NavLink>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="material-symbols-outlined">menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><NavLink className="nav-link text-light" to="/All" onClick={()=>props.changeSearch("")}>All</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/Polities" onClick={()=>props.changeSearch("")}>Polities</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/Crime" onClick={()=>props.changeSearch("")}>Crime</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/Science" onClick={()=>props.changeSearch("")}>Science</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/Technology" onClick={()=>props.changeSearch("")}>Technology</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/Entertaiment" onClick={()=>props.changeSearch("")}>Entertaiment</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/Sports" onClick={()=>props.changeSearch("")}>Sports</NavLink></li>
        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul class="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/Cricket" onClick={()=>props.changeSearch("")}>Cricket</NavLink></li>
            <li><NavLink className="dropdown-item" to="/IPL" onClick={()=>props.changeSearch("")}>IPL</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Economics" onClick={()=>props.changeSearch("")}>Economics</NavLink></li>
            <li><NavLink className="dropdown-item" to="/International" onClick={()=>props.changeSearch("")}>International</NavLink></li>
            <li><NavLink className="dropdown-item" to="/India" onClick={()=>props.changeSearch("")}>India</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Jokes" onClick={()=>props.changeSearch("")}>Jokes</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul class="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => props.changeLanguage("hi")}>Hindi</button></li>
            <li><button className="dropdown-item" onClick={() => props.changeLanguage("en")}>English</button></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search"onSubmit={(e) => postSearch(e)}>
        <input className="form-control me-2" name='search' value={search} type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }

