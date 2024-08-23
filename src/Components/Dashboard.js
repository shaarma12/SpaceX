import React from 'react'
import LaunchFaciities from './LaunchFaciities'
import StarLink from './StarLink'
import Launch from './Launch'
import LaunchFaciitiesShort from './LaunchFacilitiesShort'
import { useSelector } from 'react-redux'

function Dashboard() {
    const check = useSelector((store) => store.Check.data);
    return (
        <div className='overflow-y-scroll h-full flex justify-center'>
            <div>
                <Launch/>
                <Launch/>
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
