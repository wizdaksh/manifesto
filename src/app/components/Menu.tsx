import ThemeToggle from "./ThemeToggle"
import YinYang from '../../../public/images/yinyang.png';
import Image from 'next/image';

export default function Menu() {
    return (
        <header className="relative w-screen flex flex-row flex-1 justify-between p-5 font-walkway overflow-hidden bg-white dark:bg-black">
            {/* Fixed shortcut menu for single page */}
            <div className="border-solid lg:border border-black dark:border-white md:w-3/4 w-auto">
                <nav className="text-black dark:text-white flex flex-row justify-between">
                    <div className="bg-white p-1">
                        <Image src={YinYang} alt='balance' width={30} height={30}  placeholder='empty'/>
                    </div>
                    <ul className="lg:flex flex-row space-x-24 pr-3.5 text-2xl align-middle hidden">
                        <li>Start</li>
                        <li>Journey</li>
                        <li>Mantras</li>
                        <li>Future</li>
                    </ul>
                </nav>
            </div>
            {/* Dark mode switcher */}
            <div className="flex flex-row">
                <ThemeToggle />
            </div>
        </header>

    )
}