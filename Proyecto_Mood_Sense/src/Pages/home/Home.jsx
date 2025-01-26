import React, { useEffect } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { getUserLogin } = Context();
  const navigate = useNavigate();

  const AsyncGet = async () => {
    try {
      const { data } = await getUserLogin();
      if (!data) {
        console.log("No hay usuario registrado");
      } else {
        return data[0].rol;
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    RedirectionFunction();
  }, []);
  
  const RedirectionFunction = async () => {
    const redirection = await AsyncGet();

    if (redirection == "admin") {
      navigate("/Admin");
    } else {
      navigate("/StudentForm");
    }
  };
  
};

export default Home;
