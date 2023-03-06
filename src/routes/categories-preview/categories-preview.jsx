import { useContext } from "react";
import { categoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(categoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={product} />;
      })}
    </>
  );
};

export default CategoriesPreview;
