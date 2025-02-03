// NavbarWithMenu.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { menuItems } from "./MenuItemsShow";
import GroupDash from "../../../Pages/GroupDashboard/GroupDash";
import { MenuProfile } from "./MenuItemsShow";
import { Context } from "../../../context/Context";
import EmotionalGraphics from "../EmotionsGraphics/EmotionalGraphics";
import "./NavbarAdmin.css";


const Administrators_UI = () => {
  const { signOut, getUserInfo, getUsersSupabase } = Context(); //se llaman a las funciones del contexto.
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [Component, setComponent] = useState('GE');
  const [User, setUser] = useState();

  //Trae los datos del usuario logueado:
  const GetUserActive = async () => {
    try {
      const userData = await getUserInfo();
      const { data_tables } = await getUsersSupabase();

      for (const user in data_tables) {
        if (data_tables[user].email == userData.email) {
          console.log(data_tables[user]);
          setUser(data_tables[user]); //Trae los datos del usuario.
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetUserActive();
  }, []);

  //Hace el cambio de componentes.
  const handleChange = (e) => {
    setComponent(e);
  };

  const HandleOptions = async (option) => {
    if (option == "leave") {
      await signOut(); //Sale del perfil logeado desde supabase.
      Navigate("/");
    }
  };

  return (
    <div className="navbar-container-Administrators_UI">
      <nav className="navbar-main-Administrators_UI">
        <div className="navbar-content-Administrators_UI">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-hamburger-button-Administrators_UI"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="navbar-search-container-Administrators_UI">
            <div className="navbar-search-wrapper-Administrators_UI">
              <input
                type="text"
                placeholder="Buscar..."
                className="navbar-search-input-Administrators_UI"
              />
              <Search
                className="navbar-search-icon-Administrators_UI"
                size={20}
              />
            </div>
          </div>
          {/* 
          {User && ()} */}

          <div className="navbar-profile-section-Administrators_UI">
            <div
              className="navbar-profile-trigger-Administrators_UI"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              {User && (
                <span className="navbar-profile-name-Administrators_UI">
                  {User.name} {User.last_name}
                </span>
              )}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyz_0V9qTtac_r88rDsutx-PyuvhVOrx_Aw&s"
                alt="Profile"
                className="navbar-profile-image-Administrators_UI"
              />
              <ChevronDown
                size={16}
                className={`navbar-profile-arrow-Administrators_UI ${
                  isProfileMenuOpen ? "rotate-Administrators_UI" : ""
                }`}
              />
            </div>

            {isProfileMenuOpen && (
              <div className="profile-dropdown-menu-Administrators_UI">
                <div className="profile-dropdown-header-Administrators_UI">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyz_0V9qTtac_r88rDsutx-PyuvhVOrx_Aw&s"
                    alt="Profile"
                    className="profile-dropdown-image-Administrators_UI"
                  />
                  <div className="profile-dropdown-info-Administrators_UI">
                    <span className="profile-dropdown-name-Administrators_UI">
                      {User.name}
                    </span>
                    <span className="profile-dropdown-email-Administrators_UI">
                      {User.email}
                    </span>
                  </div>
                </div>
                <div className="profile-dropdown-divider-Administrators_UI"></div>
                {MenuProfile.map((item, index) => (
                  <>
                    <button
                      key={index}
                      onClick={() => HandleOptions(item.option)}
                      className="p-parrafo-admin"
                    >
                      {item.title}
                    </button>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`sidebar-menu-Administrators_UI ${
          isOpen ? "sidebar-menu-open-Administrators_UI" : ""
        }`}
      >
        <div className="sidebar-menu-items-Administrators_UI">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="sidebar-menu-item-wrapper-Administrators_UI"
            >
              <div
                className="sidebar-menu-item-Administrators_UI"
                onClick={() => handleChange(item.component)}
              >
                {item.title}
              </div>

              {/* {item.submenu && isSubmenuOpen && (
                <div className="sidebar-submenu-Administrators_UI">
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className="sidebar-submenu-link-Administrators_UI"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="sidebar-overlay-Administrators_UI"
          onClick={() => setIsOpen(false)}
        />
      )}
      {Component === "GE" ? (
        <EmotionalGraphics />
      ) : Component === "EG" ? (
        <GroupDash />
      ) : Component === "EE" ? (
        console.log("En proceso.....")
      ) : (
        Component === "P" && console.log("En procvesss")
      )}
      ;
    </div>
  );
};

export default Administrators_UI;
