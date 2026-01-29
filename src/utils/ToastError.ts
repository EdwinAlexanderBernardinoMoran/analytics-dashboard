import { toast } from "sonner"

export const ToastError = (message: string, description: string) => {
    toast.error(message, {
        description: description,
        duration: 5000,
        position: 'top-right',
        action: {
            label: 'Close',
            onClick: () => toast.dismiss()
        }
    })
}