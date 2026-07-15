import "./EmailCard.css";
import type { Email } from "../../types/Email";
import DeleteButton from "../DeleteButton/DeleteButton";

interface Props {
  email: Email;
  onDelete: (id: string) => void;
}

function EmailCard({email,onDelete}: Props) {
  return (
    <div className="email-card">
      <div className="card-header">
        <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(email.name)}&background=667&color=fff`}
          alt={email.name} className="card-avatar"/>
        <div>
          <h4>{email.name}</h4>
          <p>{email.email}</p>
        </div>
      </div>

      <p className="card-body">{email.body}</p>

      <div className="card-footer">
        <DeleteButton onClick={() => onDelete(email.id)}/>
      </div>
    </div>
  );
}

export default EmailCard;