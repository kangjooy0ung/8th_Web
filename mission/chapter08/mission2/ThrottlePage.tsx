import { useEffect, useState } from "react"
import useThrottle from "../hooks/useThrottle"

const ThrottlePage = () => {
    const [scrollY, setScrollY] = useState<number>(0)
    
    const handleScroll = useThrottle(() => {
        setScrollY(window.scrollY)
    }, 2000)
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])
    

    
    return (
        <div className="h-dvh flex flex-col items-center justify-center">
            <div>
                <h1>쓰로톨링을 찾아서...</h1>
                <p>ScrollY: {scrollY}px</p>
            </div>
        </div>
    )
}

export default ThrottlePage