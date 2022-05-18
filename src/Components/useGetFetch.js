import axios from "axios";
import { useState, useEffect } from "react";

const UseGetFetch = (url) => {
    

    const [data, setData]= useState(null);
    const [isPending, setIsPending]= useState(true);
    const [error, setError]=useState(null);
    
    useEffect(
        ()=>{

            axios.get(url)
            .then(response=>{
                if(response.data.status === 200)
                    setData(response.data.data);
                else{
                    setError(response.data.error);
                }

                setIsPending(false);
            })

        }, [url]
    ); 

    return {data, isPending, error};
}

export default UseGetFetch;