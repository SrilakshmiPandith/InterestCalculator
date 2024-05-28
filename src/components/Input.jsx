import Parameters from "./Parameters";
import { useContext, useState } from "react";
import { InpContext } from "../store/input-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Input({ invType, updateInvType, onUpdate }) {
  let inv = "Monthly";
  if (invType === "One-Time") {
    inv = "Total";
  }

  return (
    <div id="inputs">
      <div id="typ">
        <button
          className={invType === "SIP" ? "active" : undefined}
          onClick={() => updateInvType("SIP")}
        >
          Monthly SIP
        </button>
        <button
          className={invType === "One-Time" ? "active" : undefined}
          onClick={() => updateInvType("One-Time")}
        >
          One-time
        </button>
     </div>      
     <Parameters min={500} max={1000000} unit="₹" step={500} onUpdate={onUpdate} >
        {inv} Investment
      </Parameters>
      <Parameters min={1} max={20} unit="%" step={0.5} onUpdate={onUpdate} >
        Rate of Interest(% p.a)
      </Parameters>
      <Parameters min={1} max={40} unit="Yr" step={1} onUpdate={onUpdate} >
        Time period
      </Parameters>
    </div>
  );
}
