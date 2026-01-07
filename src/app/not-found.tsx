import { NotFoundData } from "@/components/NotfoundData";
import { div } from "motion/react-client";

export default function NotFound() {
  return (
    <div className="p-3 flex justify-center items-center h-full mt-34">
      <div className="border rounded-md shadow-sm">
        <NotFoundData />
      </div>
    </div>
  )
}