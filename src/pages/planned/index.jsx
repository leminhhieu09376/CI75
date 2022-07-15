import React from 'react'
import { SPlanned } from './style'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Header from '../../component/header'

const Planned = () => {
    return (
        <SPlanned>

            <div className='container'>
                <Header className="header" />
                <div className='content-container'>
                    <div className='content-item'>
                        <div className="time">
                            <p>  <AiOutlineClockCircle /> 12:15 - 1:15</p>
                            <button>Done</button>
                        </div>
                        <div className="content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.accusamus, consequatur totam hic!
                        </div>

                    </div>
                    <div className='content-item'>
                        <div className="time">
                            <p>  <AiOutlineClockCircle /> 12:15 - 1:15</p>
                            <button>Done</button>
                        </div>
                        <div className="content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.accusamus, consequatur totam hic!
                        </div>

                    </div>
                    <div className='content-item'>
                        <div className="time">
                            <p>  <AiOutlineClockCircle /> 12:15 - 1:15</p>
                            <button>Done</button>
                        </div>
                        <div className="content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.accusamus, consequatur totam hic!
                        </div>

                    </div>
                </div>
            </div>
        </SPlanned>
    )
}

export default Planned