type Props = {
    path: string
    responsivePath?: string
    fit?: string
    className?: string
    children?: any
    layerColor?: string
    layerOpacity?: string
    imageBlur?: boolean
}

const Banner = (
    {
        path, 
        responsivePath, 
        fit = "auto", 
        className, 
        children, 
        layerColor = "black", 
        layerOpacity = "0", 
        imageBlur = false
    }: Props ) => {
    
    return (
        <div className={`${className} relative overflow-hidden`}>
            {children && (
                <div className={`absolute top-0 left-0 w-full h-full z-20 bg-${layerColor} bg-opacity-${layerOpacity}`} >
                    {children}
                </div>
            )}
            <img className={`w-full h-full ${responsivePath && 'lg:block hidden'} object-${fit} ${fit === "auto" && "relative"} ${imageBlur && `blur-md`} absolute`} src={path} alt="banner" />
            {responsivePath && (
                <img className={`w-full h-full lg:hidden block object-${fit} ${fit === "auto" && "relative"} ${imageBlur && `blur-md`} absolute`} src={responsivePath} alt="banner" />
            )}
        </div>
    )
}

export default Banner