import React from 'react'
import Card from '../component/card/card'
import Header from '../component/header/header'
import Navbar from '../component/navbar/navbar'

export default function Home() {
    return (
        <>
            <div className="container-fluid p-0">
                <Navbar />
            </div>
            <div className='header-wrapper'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <Header />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
