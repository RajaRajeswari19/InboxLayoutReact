import "./EditButton.css";
import type { EditButtonProps, } from "../../types/Email";

function EditButton({ onClick }: EditButtonProps) {
  return (
    <div className="edit-icon" onClick={onClick}>
      <i className="fas fa-pen-to-square"></i>
    </div>
  );
}

export default EditButton;