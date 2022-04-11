import "../../../pages/ResetPassword/ResetPassword.css"

const BackgroundContainer: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  return (
    <div className="logincon">
      <div className="box">{children}</div>
    </div>
  )
}
export default BackgroundContainer
