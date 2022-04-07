import { CgSpinner } from "react-icons/cg"

const Loading = () => {
  return (
    <div className="mt-52 flex w-full items-center justify-center">
      <CgSpinner className="z-40 h-52 w-52 animate-spin text-white" />
    </div>
  )
}
export default Loading
