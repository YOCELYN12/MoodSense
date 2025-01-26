import React from "react";
import { UserAuth } from "../../context/Context";
import Administrators_UI from "../../Components/AdministratorsUI/Aministrators_UI";
import Students_UI from "../../Components/StudentsUI/Students_UI";

const Home = () => {
  const { getUserLogin } = UserAuth();
  const [Rol, setRol] = useState(false);

  const AsyncGet = async () => {
    try {
      const { data } = await getUserLogin();
      if (!data) {
        console.log("No hay usuario registrado");
      } else {
        setRol(data[0].rol);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AsyncGet();
  }, []);

  return (
    <>
      {(Rol === "admin" && <Administrators_UI />) ||
        (Rol === "student" && <Students_UI />)}
    </>
  );
};

export default Home;
