import SVG from 'react-inlinesvg'

type Props = {
    className?: string
    path: string
    svgClassName?: string
}

const CSVG = ({className, path, svgClassName = 'h-[50px]'}: Props) => {
    return (
        <span className={`${className}`}>
            <SVG src={path} className={svgClassName} />
        </span>
    )
}

export default CSVG