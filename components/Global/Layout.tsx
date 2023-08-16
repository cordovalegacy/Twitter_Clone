
// !Components
import FollowBar from "../FollowBar/FollowBar"
import SideBar from "../SideBar/SideBar"

// !Types
interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-full bg-slate-900">
            <div className="h-full mx-auto w-full">
                <div className="grid grid-cols-4 h-full">
                    <SideBar />
                    <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-700">
                        {children}
                    </div>
                    <FollowBar />
                </div>
            </div>
        </div>
    )
}

export default Layout
