
// !Packages
import { useCallback, useState } from "react"

// !Components
import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"
import Input from "../Global/Input"
import Modal from "./Modal"


const LoginModal = () => {

    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if(isLoading) return

        loginModal.onClose()
        registerModal.onOpen()

    }, [registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)
            // todo add login

            loginModal.onClose()
        }
        catch (err) {
            console.log("Something went wrong: ", err)
        }
        finally {
            setIsLoading(false)
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
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
            <p>Need an account?
                {" "}<span className="text-white cursor-pointer hover:underline" onClick={onToggle}>Create an account</span>
            </p>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign In"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal
