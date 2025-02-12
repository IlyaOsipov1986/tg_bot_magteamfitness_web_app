import { useEffect, useState } from "react";
import { getGuides } from "../../api.js";

const useFetchGuides = () => {
  
    const [dataGuides, setDataGuides] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
      try {
        await getGuides().then((res) => setDataGuides(res));
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false);
    };

    useEffect(() => {
      fetchData();
    }, []);
  
    return {
      dataGuides,
      isLoading,
      refetch: fetchData
    };
  };
  
  export default useFetchGuides;