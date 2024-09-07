import React from 'react'
import LaunchFaciities from './LaunchFaciities'
import StarLink from './StarLink'
import LaunchFaciitiesShort from './LaunchFacilitiesShort'
import { useSelector } from 'react-redux'
import UpComingLaunch from './UpComingLaunch'
import PreviousLaunch from './PreviousLaunch'

function Dashboard() {
    const check = useSelector((store) => store.Check.data);
    return (
        <div className='overflow-y-scroll h-full flex justify-center xl:-ml-0 lg:-ml-6 md:-ml-10'>
            <div>
                <UpComingLaunch/>
                <PreviousLaunch/>
            </div>
            <div>
                {check? < LaunchFaciities />
                    :<LaunchFaciitiesShort />}
                <StarLink/>
            </div>
        </div>
    )
}

export default Dashboard
