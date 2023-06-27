import { getInitials } from "../helpers/utils";

const ProfilePhoto = ({profilePhoto, name, size = ''}) => {

  return (
    <>
	 {profilePhoto && (
        <img src={profilePhoto} alt={name} className={`${size}rounded-circle align-self-center`} />
      )}
      {!profilePhoto && (
		<>
	  		{/* <i className={`${size} uil uil-user profile-photo`}></i> */}
			<div className="avatar-sm m-auto">
				<span className='avatar-title rounded-circle bg-soft-primary text-primary'>{getInitials(name)}</span>
			</div>
		</>
	  )}
    </>
  );
};

export default ProfilePhoto;
