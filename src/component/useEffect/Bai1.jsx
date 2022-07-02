import React, { useState, useEffect } from 'react'
import "./Bai1.css"

const Bai1 = () => {
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState(0)
    const [positionArr, setPositionArr] = useState([])
    useEffect(() => {
        const handleScroll = () => {
            const position = document.documentElement.scrollTop;
            setPosition(position)
            console.log("scrolling position: ", position);
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const isVisible = () => {
        setPositionArr([...positionArr, position])
        if (positionArr[positionArr.length - 1] < positionArr[positionArr.length - 2]) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', isVisible)
        console.log(visible)

        return () => {
            window.removeEventListener('scroll', isVisible)
        }
    })
    return (
        <div className='ex1Ue'>
            <h1>Lorem Ipsum</h1>
            <p className='p'>React has been designed
                from the start for gradual adoption, and
                you can use as little or as much React as you need.
                Whether you want to get a taste of React, add some
                interactivity to a simple HTML page, or start a complex
                React-powered app, the links in this section will help you get started.

            </p>

            {
                visible === true ? <button onClick={scrollToTop} className='bTTBtn'>Back to top</button> : null
            }
        </div>

    )
}

export default Bai1