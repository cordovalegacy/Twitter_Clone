
// !Packages
import { create } from 'zustand'

// !Types
interface LoginStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useLoginModal = create<LoginStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useLoginModal