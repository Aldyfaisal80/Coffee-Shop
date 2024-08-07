/* eslint-disable react/prop-types */
const Badge = ({ children }) => {
    return (
        <div className="w-1/2 bg-[#35291e] rounded-[3vh] p-3">
            {children}
        </div>
    )
}

const Description = ({ title, categorties, price, icon, className }) => {
    return (
        <div className="text-white mt-[20px]">
            <div className="font-bold">{title}</div>
            <div className="text-gray-300 font-light">{categorties}</div>
            <span className={`flex justify-between ${className}`}>
                <span className="font-bold">{price}</span>
                {icon}
            </span>
        </div>
    )
}

Badge.Description = Description

export default Badge