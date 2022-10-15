import React from 'react'
import Card from '../component/card/card'
import Navbar from '../component/navbar/navbar'

export default function Home() {
    return (
        <>
            <div className="container-fluid">
               <Navbar/> 
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}
