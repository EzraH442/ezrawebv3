import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/homepage/banner"

import ThreeColumns from "../components/homepage/triple-column";
import PersonalInfo from "../components/homepage/personalinfo";

import left from "../images/column2.jpg";
import right from "../images/right.jpg";
import summit from "../images/summit.jpg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Ezra's Website Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

        <ThreeColumns
            pos={1}
            title="Backpacking"
            text="I like to go backpacking!"
            images={{
                image1: {
                    src: left,
                    alt: "Backpacking across a large scree field",
                },
                image2: {
                    src: right,
                    alt: "Great views from the top of a mountain",
                },
            }}
        />

        <ThreeColumns
            pos={3}
            title="Scrambling"
            text="I also love climbing mountains!"
            images={{
                image1: {
                    src: summit,
                    alt: "Backpacking across a large scree field",
                },
                image2: {
                    src: summit,
                    alt: "Great views from the top of a mountain",
                },
            }}
        />
        <PersonalInfo />
        <Footer />
      <Footer/>
    </div>
  )
}

export default Home
