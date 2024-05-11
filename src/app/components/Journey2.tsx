import { journeyPara2, journeyPara2p5 } from "../constants"

export default function Journey2 () {
    return (
        <div id="section" className='bg-white dark:bg-black h-lvh overflow-hidden'>
            <div id='page_2' className='flex justify-end'>
                <div id='text' className='translate-y-32 space-y-28 w-3/4 md:w-auto mr-16 md:mr-32'>
                    <div id='paras' className=' text-gray-dark dark:text-gray-light md:max-w-screen-sm lg:max-w-screen-lg text-sm md:text-xl xxl:text-2xl text-justify space-y-16'>
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