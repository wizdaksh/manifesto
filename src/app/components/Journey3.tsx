import { journeyPara3, journeyPara3p5} from '../constants/index';

export default function Journey() {
    return (
        <div id="section" className='bg-white dark:bg-black h-lvh overflow-hidden'>
            <div id='page_2' className='flex flex-col'>
            <div id='text' className='ml-16 md:ml-36  translate-y-32 space-y-28'>
            <div id='paras' className='text-gray-dark dark:text-gray-light w-5/6 md:w-full md:max-w-screen-md text-sm md:text-xl text-justify space-y-16'>
                        <div id='para_1' className='flex flex-row space-x-3'>
                            <div className=''>V</div>
                            <p>{journeyPara3}</p>
                        </div>
                        <div id='para_1p5' className='flex flex-row space-x-3'>
                            <div className=''>VI</div>
                            <p>{journeyPara3p5}</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}