import { useDispatch } from "react-redux";
import { addCount,removeCount,clearCount } from "../utils/CountSlice";

const ButtonCount = ()=> {
    const dispatch = useDispatch()
    const addToCount = ()=>{
     dispatch(addCount())
    }
    const removeToCount = ()=>{
        dispatch(removeCount())
    }
    const clearToCount = ()=>{
        dispatch(clearCount())
    }

    return(
        <>
        <button onClick={addToCount}>Add Count</button>
        <button onClick={removeToCount}>Remove Count</button>
        <button onClick={clearToCount}>Clear Count</button>

        </>
    )
}


export default ButtonCount