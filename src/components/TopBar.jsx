import { FaUser } from "react-icons/fa";
export default function TopBar() {
  return (
    <div className="flex flex-row justify-between h-10 mx-6 pt-1 ">
      <h1 className="font-bold text-red-500 text-xl w-3/6">Great Store</h1>
      <div className="flex flex-row leading-7 justify-end w-3/6">
        <p className="line">User asdasdas</p>
        <FaUser className="mt-1 mx-2" />
      </div>
    </div>
  );
}
