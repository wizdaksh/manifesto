import { journeyPara1, journeyPara1p5} from '../constants/index';

export default function Journey() {
    return (
        <div id="section" className='bg-white dark:bg-black h-lvh overflow-hidden'>
            <div id='page_1' className='flex flex-col'>
                <div id='text' className='ml-16 md:ml-36  translate-y-32 space-y-28 w-3/4 md:w-5/6 lg:w-full'>
                    <div id="heading" className='font-walkway w-5/6'>
                        <h1 className='text-black dark:text-white text-6xl md:text-8xl flex flex-auto justify-center md:justify-normal'>The Journey</h1>
                    </div>
                    <div id='paras' className='text-gray-dark dark:text-gray-light md:max-w-screen-sm lg:max-w-screen-lg text-sm md:text-xl xxl:text-2xl text-justify space-y-16'>
                        <div id='para_1' className='flex flex-row space-x-3'>
                            <div className=''>I</div>
                            <p>{journeyPara1}</p>
                        </div>
                        <div id='para_1p5' className='flex flex-row space-x-3'>
                            <div className=''>II</div>
                            <p>{journeyPara1p5}</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}