import {ButtonHTMLAttributes} from "react";
//import styles from "./SuperButton.module.css";
// type Props = {
//     onClick: () => void
//     color: boolean
//     title: string
//     children: React.ReactNode
// }

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    bgColor?: string;
}

export const SuperButton = (props: BtnProps) => {

    const { color, children, onClick, title, className, disabled } = props;

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick && onClick(e)
    }

    // const finalClassName =
    //     styles.button +
    //     (disabled
    //         ? " " + styles.disabled
    //         : color === "red"
    //             ? " " + styles.red
    //             : color === "secondary"
    //                 ? " " + styles.secondary
    //                 : " " + styles.default) +
    //     (className ? " " + className : "");
    return (
        <button className={className} color={color} disabled={disabled} onClick={(e) => onClickHandler(e)}>
            {children || title}
        </button>
    )
}
