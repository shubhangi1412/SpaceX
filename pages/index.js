import React from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head'

function HomePage({data}) {
    return (<div>
       <Head>
        <title>SpaceX App</title>
        <meta charSet="utf-8" />
        <meta name="description" content="SpaceX is a sigle-page application developed in React, which enables user to browse through various SpaceX Programs Launched."/>
        <meta name="keywords" content="SpaceX"/>
        <meta name="author" content="Shubhangi Singh"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout data={data} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 350;
          line-height: 1.6;
          color: #000000;
          font-family: sans-serif;
        }
        h1 {
          font-weight: 600;
        }
        p {
          margin: 0px;
        }
        b {
          color: black;
          font-size: 19px;
          font-weight: 900;
          font-family: Calibri ;
        }
      `}</style>

      </div>);
  }
  
  export default HomePage;


  export async function getServerSideProps() {
    const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
    const data = await res.json()
    return { props: { data } }
  }