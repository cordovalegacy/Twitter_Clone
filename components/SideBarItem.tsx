import { IconType } from "@react-icons/all-files"

interface SideBarItemProps {
    href?: string
    label: string
    icon: IconType
    onClick?: () => void
}

const SideBarItem: React.FC<SideBarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick
}) => {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className={`${label === "Logout" && 'absolute bottom-0 left-0'} h-20 w-full p-4 lg:h-28 flex items-center py-2 lg:gap-4 justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition`}>
                <Icon className="w-12 h-12 lg:w-12 lg:h-12  text-white" />
                <p className="hidden lg:block text-lg text-white">
                    {label}
                </p>
            </div>
        </div>
    )
}

export default SideBarItem
