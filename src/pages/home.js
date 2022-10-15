import React from 'react'
import Card from '../component/card/card'
import Header from '../component/header/header'
import Navbar from '../component/navbar/navbar'

export default function Home() {
    return (
        <>
            <div className="container-fluid p-0">
               <Navbar/> 
            </div>
            <div className="container">
                <Header/>
            </div>
        </>
    )
}
