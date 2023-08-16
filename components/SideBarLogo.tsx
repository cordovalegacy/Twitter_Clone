
// !Packages
import { useRouter } from "next/router"
import { AiFillTwitterCircle as Twitter } from '@react-icons/all-files/ai/AiFillTwitterCircle'

const SideBarLogo = () => {

    const router = useRouter()

    return (
        <div className="h-16 w-full lg:h-32 py-10 p-4 mr-2 flex items-center justify-center cursor-pointer transition mt-5" onClick={() => router.push('/')}>
            <Twitter className="w-14 h-14 lg:w-20 lg:h-20 text-white hover:bg-blue-500 hover:scale-105 duration-200 hover:bg-opacity-40 hover:rounded-full"/>
        </div>
    )
}

export default SideBarLogo
