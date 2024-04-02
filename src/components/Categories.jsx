
import useDataLoad from "../Hooks/useDataLoad";
import CategoryCard from "./CategoryCard";

const Categories = ({filterData}) => {
   
  const { data } = useDataLoad();
  
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
      {filterData.map((item) => (
        <CategoryCard key={item.id} item={item}></CategoryCard>
      ))}
    </div>
  );
};

export default Categories;
