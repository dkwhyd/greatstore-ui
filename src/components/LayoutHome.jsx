import Cart from "./Cart";

export default function LayoutHome({ children }) {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/6 bg-gray-100">
        <Cart />
      </div>
      <div className="w-5/6 bg-green-500 ">{children}</div>
    </div>
  );
}
