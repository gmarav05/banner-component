import { BsCheckCircleFill } from "react-icons/bs";
import { PiWarningFill } from "react-icons/pi";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

const COLORS = {
    success: "text-green-800 bg-green-50",
    warning: "text-yellow-800 bg-yellow-50",
    error:   "text-red-800 bg-red-50",
    neutral: "text-blue-800 bg-blue-50",
}

const ICON = {
    success: <BsCheckCircleFill className="text-green-400" />,
    warning: <PiWarningFill className="text-yellow-400" />,
    error:   <FaCircleXmark className="text-red-400" />,
    neutral: <FaCircleInfo className="text-blue-400" />,
}

export default function Banner({children, status, title}) {
    return (
        <>
        


        </>
    )
}