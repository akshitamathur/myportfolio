import Profile from "../assets/json/resume.json";
import "../assets/css/popup.css";

export const Popup = ({
  onClose,
  userId,
}: {
  onClose: any;
  userId: number;
}) => {
  const profile = Profile.work[userId];
  

  // console.log("we are in popup");

  return (
    <>
      <div className="modalContainer animate__animated animate__fadeIn">
        <div className="modalBody">
          <div className="modalHeading">
            <span onClick={() => onClose()} className="close">
              <i className="animate__animated animate__fadeIn animate__delay-1s white bi bi-x-lg"></i>
            </span>
          </div>
          <div className="modalContent">
            <div className="row">
              <div className="col-3">
                <img src={profile.logo} width="100%" />
              </div>
              <div className="col-8">
                <h1 className="text-center">{profile.position},{" "}<em><a href={profile.website}>{profile.company}</a></em></h1>
                <h2 className="text-center">
                  {profile.startDate} - {profile.endDate} 
                </h2>
                <h4 className="text-center">{profile.location}</h4>
<p></p>
                <p><strong>{profile.summary}</strong></p>

                <p><u>Highlights</u></p>
               <ul>{profile.highlights.map((list) => (
                    <li>{list}</li>
                 ))}</ul>
                 <p></p>
               <p>Skills:{" "}
                {profile.techSkills?.map((skill) => (
                   <em><span>{skill}, </span></em>
                ))}
               </p>
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popup;
