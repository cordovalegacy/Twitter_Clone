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
            <div className="h-20 w-full p-4 lg:h-32 flex items-center py-2 lg:flex-col lg:gap-2 justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition">
                <Icon className="w-12 h-12 lg:w-16 lg:h-16  text-white" />
                <p className="hidden lg:block text-xl text-white">
                    {label}
                </p>
            </div>
        </div>
    )
}

export default SideBarItem
