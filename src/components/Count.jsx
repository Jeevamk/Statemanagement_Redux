import { useSelector } from "react-redux";

const Count = ()=>{
    const count = useSelector((store)=>store.count.count)
    return (
        <div>
            <h1> Count {count}</h1>
        </div>
    )
}


export default Count;