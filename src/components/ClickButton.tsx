import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

type ButtonProps = {
    className?: string,
    name: string,
    handleClick?: () => void
}

const ClickButton = (props: ButtonProps) => {
    return (
        <>
            <Button onClick={props.handleClick} variant="outline" className={cn("p-4 max-px-12 font-semibold", props.className)}>{props.name}</Button>
        </>
    )
}

export default ClickButton