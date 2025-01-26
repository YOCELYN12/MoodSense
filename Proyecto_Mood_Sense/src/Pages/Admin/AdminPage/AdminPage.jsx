import React from "react";
import AdminGauche from "../AdminGauche";
import AdminGrapics from "../AdminGrapics";
import AdminCard from "../AdminCard";
import AdminNavFilter from "../AdminNavFilter";
import NavbarAdministrative from "../../../Components/NavbarAdministrative/NavbarAdministrative";
import GeneralAdministrative from "../../../Components/Administrativa/GeneralAdministrative";
import "./Admin.css";

const AdminPage = () => {
  return (
    <div className="AdminPage">
      <div className="AdminPage-Navbar">
        <NavbarAdministrative />
      </div>
      <div>
        <div className="AdminPage-NavFilter">
          <AdminNavFilter />
        </div>
        <div>
          <div className="AdminPage-GeneralAdministrative">
            <div className="AdminPage-GeneralAdministrative-General">
              <GeneralAdministrative />
            </div>
            <div className="AdminPage-AdminGauche">
              <AdminGauche />
            </div>
          </div>
          <div className="AdminPage-Thirdpiece">
            <div className="AdminPage-Grapics">
              <AdminGrapics />
            </div>
            <div>
              <AdminCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
