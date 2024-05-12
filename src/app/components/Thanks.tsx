import Video from "./Video";

export default function Thanks () {
    return (
        <div className="w-screen h-screen">
            <div className="absolute flex translate-x-1/2 translate-y-1/2">
                <h1 className="text-black dark:text-white">Thank you!</h1>
            </div>
            <Video />
        </div>
    )
}