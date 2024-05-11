import { journeyPara1, journeyPara1p5} from '../constants/index';

export default function Journey() {
    return (
        <div id="section" className='bg-white dark:bg-black h-lvh'>
            <div id='page_1' className='flex flex-col'>
                <div id='text' className='ml-16 md:ml-36  translate-y-32 space-y-28'>
                    <div id="heading" className='font-walkway w-5/6'>
                        <h1 className='text-black dark:text-white text-6xl md:text-8xl flex flex-auto justify-center md:justify-normal'>The Journey</h1>
                    </div>
                    <div id='paras' className='text-gray-dark dark:text-gray-light w-5/6 md:w-full md:max-w-screen-md text-sm md:text-xl text-justify space-y-16'>
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