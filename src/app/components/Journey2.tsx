import { journeyPara2, journeyPara2p5 } from "../constants"

export default function Journey2 () {
    return (
        <div id="section" className='bg-white dark:bg-black h-lvh overflow-hidden'>
            <div id='page_2' className='flex flex-col'>
                <div id='text' className='ml-16 md:ml-0 space-y-28 translate-y-3/4 md:translate-x-1/3'>
                    <div id='paras' className='text-gray-dark dark:text-gray-light w-5/6 md:w-full md:max-w-screen-md text-sm md:text-xl text-justify space-y-16'>
                        <div id='para_2' className='flex flex-row space-x-3'>
                            <p>{journeyPara2}</p>
                            <div className=''>III</div>
                        </div>
                        <div id='para_2p5' className='flex flex-row space-x-3'>
                            <p>{journeyPara2p5}</p>
                            <div className=''>IV</div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}