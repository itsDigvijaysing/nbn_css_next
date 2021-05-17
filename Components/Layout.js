import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footers'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"></link>
            </Head>
            <Navbar />
            {children}
            {/* <Footer /> */}

        </>
    )
}

export default Layout
