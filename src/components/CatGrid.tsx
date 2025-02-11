import { Button } from "@progress/kendo-react-buttons";
import "@progress/kendo-theme-default/dist/all.css";
import { useDispatch, useSelector } from "react-redux";
import { galleryDetais } from "../redux/slices/catGallerySlice";

function CatGrid() {
  const dispatch = useDispatch() as any;

  const state = useSelector((state: any) => state.catGalleryData);
  console.log({ state });
  const handleClick = () => {
    dispatch(galleryDetais());
  };

  return (
    <div>
      <span>Cat Gallery</span>
      <Button
        themeColor="primary"
        onClick={handleClick}
        icon="search"
        className="view-cats-button"
      ></Button>
    </div>
  );
}

export default CatGrid;
