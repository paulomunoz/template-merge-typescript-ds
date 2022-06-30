import React, { useEffect } from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  onUpdate?: () => void;
  /**
   * @uxpinignoreprop
   * */
  uxpId?: string;
}

export default function Button(props: ButtonProps) {
  useEffect(() => {
    const wrapper = document.getElementById("canvas-wrapper");
    if (wrapper) {
      wrapper.setAttribute("style", "overflow-y: auto;overflow-x: hidden;justify-content: center;");
    }

    var container = document.getElementsByClassName("canvas-container")[0];
    if (container) {
      container.setAttribute("style", `${container.getAttribute("style")} margin: 0;`);
    }
  }, []);

  return (
    <MuiButton onClick={props.onClick} disabled={props.disabled}>
      {props.label} 0.2
    </MuiButton>
  );
}
