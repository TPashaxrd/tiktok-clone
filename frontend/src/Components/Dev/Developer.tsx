import { useEffect } from "react"

export default function Developer() {
    
    useEffect(() => {
        const clearLocalStorage = (e: KeyboardEvent) => {
            if (e.key === 'F12') {
                e.preventDefault();
             }
        };
        
        
        window.addEventListener('keydown', clearLocalStorage);
        return () => {
            window.removeEventListener("keydown", clearLocalStorage);
        }
    }, [])

    return (
        <>
        </>
    )
}