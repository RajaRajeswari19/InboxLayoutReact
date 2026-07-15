import "./DeleteButton.css";
import type { DeleteButtonProps, } from "../../types/Email";

export default function DeleteButton({ onClick,}: DeleteButtonProps) {
  return (
    <i className="fas fa-trash delete-icon" onClick={onClick}/>
  );
}
