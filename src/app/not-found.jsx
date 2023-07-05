import Link from 'next/link'

const NotFound = () => {
    return (<>
    <div className="flex items-center flex-col justify-center space-y-5 w-screen h-[90vh]">
        <h2 className="text-[55px] text-gray-600 font-bold text-center">404 Page Not Found</h2>
        <Link href="/" className="px-8 py-2 bg-purple-600 text-white rounded-md">Go Back</Link>
    </div>
    </>)
}


export  default NotFound;