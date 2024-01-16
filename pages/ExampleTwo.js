import { useEffect } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ExampleTwo() {

    //has [] at the end. this makes sure the useEffect only runs once on page load
    useEffect(() => {
        console.log("run")
    }, [])

    return(
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}