import { GiHamburgerMenu } from "react-icons/gi"

export const Navbar = () => {
  return (
    <div className=" w-screen h-fit flex flex-row justify-between items-center px-4 md:px-8 lg:px-12 py-4">
      <div className="text-2xl">
        <GiHamburgerMenu />
      </div>
      <h2 className="font-semibold text-xl tracking-[0.25em]">LIVERPOOL HOUSE</h2>
      <div className="flex flex-row gap-8 font-normal">
        <div>Order</div>
        <div>About us</div>
      </div>
    </div>
  )
}
