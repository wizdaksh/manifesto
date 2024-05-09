import Image from "next/image"

export default function Menu() {
    return (
        <header className="flex flex-row flex-1 justify-between p-5 font-walkway overflow-hidden">
            {/* Fixed shortcut menu for single page */}
            <div className="border-solid border border-black md:w-3/4 w-auto">
                <nav className="text-black flex flex-row justify-between">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/1/17/Yin_yang.svg" alt="ying & yang"  width={30} height={30} className="p-1"/>
                    <ul className="lg:flex flex-row space-x-24 pr-3.5 text-2xl align-middle hidden">
                        <li>Start</li>
                        <li>Journey</li>
                        <li>Mantras</li>
                        <li>Future</li>
                    </ul>
                </nav>
            </div>
            
            {/* Dark mode switcher */}
            <div className="flex flex-row ">
                <div className="">
                    <button className="bg-black text-white p-1 border border-solid border-black">
                        Dark
                    </button>
                </div>
                <div className="">
                    <button className="text-black bg-white p-1 border border-solid border-black">
                        Light
                    </button>
                </div>
            </div>
        </header>
    )
}