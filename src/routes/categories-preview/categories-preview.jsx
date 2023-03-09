import { Fragment } from "react";
// import { categoriesContext } from "../../context/categories.context";
import { selectCategoriesMap } from "../../store/category/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(categoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={product} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
