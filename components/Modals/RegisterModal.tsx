
// !Packages
import { useCallback, useState } from "react"

// !Components
import useRegisterModal from "@/hooks/useRegisterModal"
import useLoginModal from "@/hooks/useLoginModal"
import Input from "../Global/Input"
import Modal from "./Modal"


const RegisterModal = () => {

    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if(isLoading) return

        registerModal.onClose()
        loginModal.onOpen()

    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)
            // todo add register

            registerModal.onClose()
        }
        catch (err) {
            console.log("Something went wrong: ", err)
        }
        finally {
            setIsLoading(false)
        }
    }, [registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account?
                {" "}<span className="text-white cursor-pointer hover:underline" onClick={onToggle}>Sign In</span>
            </p>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Create an Account"
            actionLabel="Register"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal
