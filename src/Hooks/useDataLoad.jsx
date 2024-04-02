import { useEffect, useState } from "react";

const useDataLoad = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('/data.json');
            const datas = await res.json();
            setData(datas);
        }
        fetchData()
    },[])
    return {data}
};

export default useDataLoad;