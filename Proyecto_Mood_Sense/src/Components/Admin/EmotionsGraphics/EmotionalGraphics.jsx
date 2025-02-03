import React from "react";
import AdminGauche from '../AdminGauche'
import AdminGrapics from '../AdminGrapics'
import AdminCard from '../AdminCard'
import GeneralAdministrative from "../Administrativa/GeneralAdministrative";
import './Admin.css';

function EmotionalGraphics() {
  return (
    <>
      <div className="AdminPage">
        <div className="AdminPage-Navbar">
        </div>
        <div>
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
    </>
  );
}

export default EmotionalGraphics;
