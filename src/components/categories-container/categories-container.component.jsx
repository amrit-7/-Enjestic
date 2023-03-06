import "./categories.styles.scss";
import Directory from "../directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1587855049254-351f4e55fe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/655/254/desktop-wallpaper-gigi-hadid-smiling-2019-gigi-hadid.jpg",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://images.hdqwalls.com/download/zayn-2020-qg-1920x1080.jpg",
  },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Directory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
