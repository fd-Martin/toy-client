import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title=`Toy-World-${title}`;
    },[title])
}

export default useTitle;