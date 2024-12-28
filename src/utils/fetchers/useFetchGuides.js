import { useEffect, useState } from "react";
import { getGuides } from "../../api.js";

const useFetchGuides = () => {
    const [dataGuides, setDataGuides] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          await getGuides().then((res) => setDataGuides(res));
        } catch (error) {
          console.log(error)
        }
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    return {
      dataGuides,
      loading,
    };
  };
  
  export default useFetchGuides;