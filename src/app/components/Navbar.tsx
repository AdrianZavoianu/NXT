import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMyLocation, MdSunny } from "react-icons/md";
import SearchBox from "./SearchBox";

type Props={}

export default function Navbar({}:Props){

    return(
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
        <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
            <div className="flex gap-2 mx-0">
                <h2 className="text-gray-500 text-3xl">Weather</h2>
                <MdSunny className="text-3xl mt-1 text-yellow-300" />
            </div>
            <section className="flex gap-2 items-center">
                <MdOutlineMyLocation className="text-3xl text-gray-400 hover:opacity-80 cursor-pointer" />
                <IoLocationSharp className="text-3xl" />
                <p className="text-slate-900/80 text-lg">India</p>
                <SearchBox value="Delhi" onChange={()=>{}} onSubmit={()=>{}}/>
            </section>

        </div>
    </nav>
    )
}