import "./Content.css"
import links from "../assets/data/topicNav"
import { FiChevronDown } from "react-icons/fi"
import { useRef } from "react"


export default () => {
  return <section className="content">
    {links.map((link, index) => {
      const { title } = link
      if ('url' in link) {
        return <div key={index} className="link">
          <a href={link.url}>{title}</a>
        </div>
      }
      const container = useRef(null)
      return <div className="con">
             <button key={index} onClick={(event) => {
                if (event.target.classList.contains('expanded')) {
                  // collapse
                  event.target.style.transition = `background-color 50ms linear ${50 * link.topics.length}ms`
                  event.target.classList.remove('expanded')
                  container.current.style.height = '0'
                } else {
                  // expand
                  event.target.style.transition = `background-color 1ms linear 1ms`
                  event.target.classList.add('expanded')
                  container.current.style.height = `${link.topics.length * 62}px`
                }
             }}>
               <span>{title}</span>
               <FiChevronDown className="arrow" />
             </button>
             <div ref={container} style={{transition: `height ${50 * link.topics.length}ms linear`}}>
              {link.topics.map((sublink, idx) => {
                const { title, url } = sublink
                return <button key={idx} className="sublink">
                  <a href={url}>{title}</a>
                </button>
              })}
             </div>
           </div>
    })}
  </section>
}