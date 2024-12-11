import Data from "../assets/json/resume.json";
import "../assets/css/projectboard.css";

import ProjectPopup from "./projectpopup";
import { useState } from "react";

function ProjectBoard({projectId}:{projectId: number}) {
  const [ModalOpen, SetModalOpen] = useState(false);
  const project = Data.projects[projectId];
  

  const handleButtonClick = () => {
    SetModalOpen(false);
    console.log(Data.work);
  };

  

  return (
    <>
      {ModalOpen && <ProjectPopup onClose={handleButtonClick} userId={projectId}></ProjectPopup>}
      <div className="section">
        <div className="row justify-content-center">
            <div className="col-3 logo animate__animated animate__fadeIn animate__delay-2s">
              <div onClick={() => SetModalOpen(true)} className="text-center">
                <img src={project.mainImg} width="50" />
                <div className="row">
                  <div className="col-12">
                    <p><strong>{project.title}</strong></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBoard;
