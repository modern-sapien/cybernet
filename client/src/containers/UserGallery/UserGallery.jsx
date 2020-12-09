import { useParams } from "react-router-dom";
import Main from "../Main/Main";


const UserGallery = () => {
  const { id } = useParams();

  return (
    <>
      <Main props={id} />
    </>
  );
};

export default UserGallery;
