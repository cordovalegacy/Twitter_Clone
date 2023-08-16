
// !Packages
import { useRouter } from "next/router"
import { AiFillTwitterCircle as Twitter } from '@react-icons/all-files/ai/AiFillTwitterCircle'

const SideBarLogo = () => {

    const router = useRouter()

    return (
        <div className="h-16 w-full lg:h-28 py-5 p-4 mr-2 flex items-center justify-center cursor-pointer transition mt-5" onClick={() => router.push('/')}>
            <Twitter className="w-14 h-14 lg:w-16 lg:h-16 text-white hover:bg-blue-500 hover:scale-105 duration-200 hover:bg-opacity-40 hover:rounded-full"/>
        </div>
    )
}

export default SideBarLogo
