import "./UserInfo.css";

interface UserInfoProps {
  name: string;
  email: string;
}

function UserInfo({ name, email }: UserInfoProps) {
  return (
    <div className="user-section">
      <div className="user-info">
        <span className="user-name">{name}</span>
        <span className="user-email"> {email} </span>
      </div>
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667&color=fff`}
        alt={name} className="user-avatar"/>
    </div>
  );
}

export default UserInfo;