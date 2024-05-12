import Video from "./Video";

export default function Thanks () {
    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-white dark:bg-black">
            <Video />
            <div className="absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2">
                <h1 className="text-black dark:text-white">Thank you!</h1>
            </div>
        </div>
    )
}