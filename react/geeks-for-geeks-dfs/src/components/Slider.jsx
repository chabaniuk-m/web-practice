import "./Slider.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"  
import { useState } from "react"
import links from "../assets/data/slider"
import { useRef } from "react"
import { useGlobalContext } from "../context"

export default () => {
  const { disableSlider } = useGlobalContext()
  const list = useRef(null);

  return <div className={`slider ${disableSlider ? 'inactive' : ''}`}>
    <button className="left" onClick={() => {
      scrollBy(-100, 0)
      console.log(list.current)
    }}>
      <FiChevronLeft />
    </button>
    <ul ref={list}>
      {links.map((link, index) => {
        const { title, url } = link
        return <li key={index}>
          <a href={url} target='_blank'>{title}</a>
        </li>
      })}
    </ul>
    <button className="right">
      <FiChevronRight />
    </button>
  </div>
}