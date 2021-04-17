import * as React from "react";
import { Drawer } from "baseui/drawer";

export default ({
  isOpen,
  onClose,
  children
}) => {
  //const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Drawer
      isOpen={isOpen}
      autoFocus
      onClose={() => onClose()}
    >
      <div className="px-1">
      {children}

      </div>
    </Drawer>
  );
}