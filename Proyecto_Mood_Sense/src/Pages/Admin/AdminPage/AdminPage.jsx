import React from "react";
import AdminGauche from "../AdminGauche";
import AdminGrapics from "../AdminGrapics";
import AdminCard from "../AdminCard";
import AdminNavFilter from "../AdminNavFilter";

const AdminPage = () => {
  return (
    <div>
      <div>
        <AdminNavFilter />
      </div>
      <div>
        <AdminGrapics />
      </div>
      <div>
        <AdminGauche />
      </div>
      <div>
        <AdminCard />
      </div>
    </div>
  );
};

export default AdminPage;
