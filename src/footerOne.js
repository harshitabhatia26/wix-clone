const FooterOne = () => {
    return (
        <div className="py-24 bg-teal-900 font-bold flex flex-col justify-center items-center">
            <div className="text-2xl md:text-5xl py-8 text-white">
                Want Help Picking a Template?
            </div>
            <div className=" text-md md:text-xl font-normal pb-8 text-white">
                Get tips for finding a template that's right for you.
            </div>
            <div className="text-sm border border-black rounded-3xl bg-white px-4 py-2 md:px-8 md:py-4 md:text-lg font-normal hover:text-white hover:bg-teal-900 hover:border-white cursor-pointer">
                Help Me Choose
            </div>
        </div>
    )
}

export default FooterOne;