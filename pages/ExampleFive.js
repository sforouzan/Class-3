import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleFive() {
    
    // we want to setup a counter
    // after every one second the number increases by 1
    // we want to display that number as it increases
    // no button is needed, it will update automatically
    
    const [count, setCount] = useState(0);

    useEffect(() => {
            const interval = setInterval(() => {
                setCount(count + 1);
            }, 1000); // after 1 second then it will do the console log below
            
            return () => clearInterval(interval);
        }, [count])

    return(
        <>
        <Header/>
        <main>
            <h1>Number Counter</h1>
            <h3>Example using Interval</h3>

        <div>{count}</div>
        
        </main>
        <Footer/>
        </>
    )
}