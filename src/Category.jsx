import { FaBorderAll } from "react-icons/fa6";
import { MdBreakfastDining } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { FaPastafarianism } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { MdDomain } from "react-icons/md";

 const Categories=[
    {
        id:1,
        name:"All",
        image:<FaBorderAll className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:2,
        name:"Breakfast",
        image:<MdBreakfastDining className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:3,
        name:"Soups",
        image:<LuSoup className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:4,
        name:"Pasta",
        image:<FaPastafarianism className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:5,
        name:"Main-Course",
        image:<MdDomain className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:6,
        name:"Pizza",
        image:<LiaPizzaSliceSolid className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:7,
        name:"Burger",
        image:<FaBurger className="w-[60px] h-[60px] text-green-600"/>
    }
]
export default Categories