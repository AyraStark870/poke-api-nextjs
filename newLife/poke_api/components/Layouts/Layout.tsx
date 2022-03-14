import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../UI"

interface Props{
   title?:string
}


export const Layout:FC<Props> = ({children, title}) => {
  return (
    <>
    <Head>
      <title>{title||'Pokemon App'}</title>
      <meta name="author" content="Clau Rguez"/>
      <meta name="description" content="info sobre pokemon"/>
    </Head>
    <Navbar/>
    <main style={{padding:'0px 20px'}}>
        {children}
    </main>
    </>
  )
}
