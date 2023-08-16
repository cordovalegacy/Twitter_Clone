
// !Packages
import { BsHouseFill as Home } from '@react-icons/all-files/bs/BsHouseFill'
import { BsBellFill as Notifications } from '@react-icons/all-files/bs/BsBellFill'
import { FaUser as Profile } from '@react-icons/all-files/fa/FaUser'
import { BiLogOut as Logout } from '@react-icons/all-files/bi/BiLogOut'

// !Components
import SideBarLogo from './SideBarLogo'
import SideBarItem from './SideBarItem'
import SideBarTweetButton from './SideBarTweetButton'

const SideBar = () => {

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: Home
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: Notifications
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: Profile
        },
    ]

    return (
        <div className='col-span-1 h-full w-full relative'>
            <div className='flex flex-col items-center h-full'>
                <div className='space-y-2 py-2 w-full'>
                    <SideBarLogo />
                    {
                        items.map((item) => (
                            <SideBarItem
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                            />
                        ))
                    }
                    <SideBarItem onClick={() => {}} icon={Logout} label='Logout'/>
                    <SideBarTweetButton />
                </div>
            </div>

        </div>
    )
}

export default SideBar
