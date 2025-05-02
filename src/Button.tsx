type Props = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({title, disabled, onClick}: Props) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <button disabled={disabled} onClick={() => onClickHandler()}>{title}</button>
    )
}
