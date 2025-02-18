import { useEffect, useState } from "react";
import { getUsers } from "../../api";
import { useDispatch } from "react-redux";
import { setListUsers } from "../../store/slices/userSlice.js"; 

const useFetchUsers = () => {

    const dispatch = useDispatch();
    const [dataUsers, setDataUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            await getUsers().then((res) => {
                setDataUser(res),
                dispatch(setListUsers(res))
            })
        } catch(error) {
            console.log(error)
        }
        setIsLoading(false);
    }; 

    useEffect(() => {
        fetchData();
    },[])

    return {
        dataUsers,
        isLoading,
        refetch: fetchData
    }
}
export default useFetchUsers; 