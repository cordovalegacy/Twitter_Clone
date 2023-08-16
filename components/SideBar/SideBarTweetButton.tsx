
// !Packages
import { useRouter } from "next/router"
import { useCallback } from 'react'
import { FaFeather as Feather } from '@react-icons/all-files/fa/FaFeather'
import useLoginModal from "@/hooks/useLoginModal"


const SideBarTweetButton = () => {

    const router = useRouter()
    const loginModal = useLoginModal()

    const onLogin = useCallback(() => {
        loginModal.onOpen()
    }, [loginModal])

    return (
        <div onClick={onLogin}>
            <div className="fixed bottom-6 right-6 rounded-full h-[60px] w-[60px] mx-auto p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
                <Feather className="w-24 text-white text-3xl"/>
            </div>
        </div>
    )
}

export default SideBarTweetButton
