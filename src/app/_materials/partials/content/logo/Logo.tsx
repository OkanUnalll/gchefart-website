import CSVG from "../../../helpers/CSVG"
import { toAbsoluteUrl } from "../../../helpers/AssetsHelpers"

type Props = {
    className?: string
    design: string
    classNameIn?: string
}

const Logo = ({className, design, classNameIn}: Props ) => {  
    return (
        <CSVG className={className} path={toAbsoluteUrl(`/media/logos/gchef-logo-${design}.svg`)} svgClassName={classNameIn} />
    )
}

export default Logo