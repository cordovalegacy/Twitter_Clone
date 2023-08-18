

// !Packages
import { useRouter } from "next/router"
import { useCallback } from "react" //works like useEffect
import { BiArrowBack as Back } from '@react-icons/all-files/bi/BiArrowBack'

// !Types
interface HeaderProps {
    label: string
    showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {

    const router = useRouter()

    const goBack = useCallback(() => {
        router.back()
    }, [router])

    return (
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-2">
                {
                    showBackArrow && (
                        <Back
                            onClick={goBack}
                            className="text-white text-xl w-20 cursor-pointer hover:opacity-70 transition"
                        />
                    )
                }
                <h1 className="text-white text-xl font-semibold">{label}</h1>

            </div>

        </div>
    )
}

export default Header
