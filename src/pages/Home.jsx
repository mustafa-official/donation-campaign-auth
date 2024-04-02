import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import useDataLoad from "../Hooks/useDataLoad";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const { data } = useDataLoad();
  const [filterData, setfilterData] = useState([]);
  useEffect(() => {
    setfilterData(data);
  }, [data]);
  const handleSearch = () => {
    if (value.trim() != "") {
      const filterDatas = data.filter(
        (item) => item.category.toLowerCase() === value.toLowerCase()
      );
      setfilterData(filterDatas);
    } else {
      setfilterData(data);
    }
  };

  if (navigation.state === "loading") return <Spinner></Spinner>;
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Campaign | Home</title>
      </Helmet>
      <Banner
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
      ></Banner>
      <Categories filterData={filterData}></Categories>
    </div>
  );
};

export default Home;
