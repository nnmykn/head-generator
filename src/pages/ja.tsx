import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"
import { Input } from "baseui/input"
import {Search} from 'baseui/icon'
import {Button} from 'baseui/button'

// identicon lib
import BoringAv from "boring-avatars"

const Page = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick = (e) =>  {
        e = inputRef.current.value
        window.location.assign(`/${e}`)
    }
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://head.go5.run/ja/"/>
                <title key="site:title">Head Generator | ð¹ï¸Generates a head in HTML</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                <Notification  kind={KIND.warning}>
                    {() => "ããã¯éçºä¸­ã®ãã¢çã§ããåºæ¬çã«ã¯æ­£å¸¸ã«åä½ãã¾ããã"}
                </Notification>
                </div>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
                <div></div>
                <Link href="/ja"><a>
                    <button className={styles.button}><span>JP site</span></button>
                </a></Link>
                <div></div>
            </main>
        </div>
    )
}


export default Page