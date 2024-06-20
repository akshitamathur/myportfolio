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
  const profileDeep = profile.highlights[userId];
  
  console.log(profileDeep);
  console.log("we are in popup");

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
                <h1>{profile.position}</h1>
                <h2>
                  <a href={profile.website}>{profile.company}</a>,{" "}
                  {profile.startDate} - {profile.endDate}
                </h2>

                <h4>{profile.summary}</h4>

               <ul>{}</ul>
               {/* {profileDeep.map(list => <li>{list.valueOf().toString()}</li>)} */}
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popup;
