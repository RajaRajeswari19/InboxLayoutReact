import { createPortal } from "react-dom";
import type { PortalProps } from "../../types/Email";

function Portal({ children, targetId = "portal-root" }: PortalProps) {
  const target = document.getElementById(targetId);

  if (!target) {
    return <>{children}</>;
  }

  return createPortal(children, target);
}

export default Portal;
