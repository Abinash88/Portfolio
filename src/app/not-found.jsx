

const NotFound = () => {
    return (<>
    <div className="flex items-center flex-col justify-center space-y-5 w-screen h-[90vh]">
        <h2 className="text-[55px] text-red-500 font-bold text-center">404 Page Not Found</h2>
        <a href="/" className="px-8 py-2 bg-purple-600 text-white rounded-md">Go Back</a>
    </div>
    </>)
}


export  default NotFound;