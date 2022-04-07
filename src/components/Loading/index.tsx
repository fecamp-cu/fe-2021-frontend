import { CgSpinner } from "react-icons/cg"

const Loading = () => {
  return (
    <div className="my-40 flex w-full items-center justify-center sm:my-60">
      <CgSpinner className="z-40 h-52 w-52 animate-spin text-white" />
    </div>
  )
}
export default Loading
