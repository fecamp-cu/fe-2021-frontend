import React from "react"
import "./alertButton.style.css"
interface AlertButtonProps {
  message: string
  isEmergency?: boolean
}

const AlertButton: React.FC<AlertButtonProps> = ({ message, isEmergency, children }) => {
  return (
    <button onClick={() => alert(message)} className={isEmergency ? "emergency-alert-button" : "alert-button"}>
      {children}
    </button>
  )
}
// Components folder is for global components
// TODO: Delete this before production
// This is just a proposed project structure, feel free to change it if you want
export default AlertButton
