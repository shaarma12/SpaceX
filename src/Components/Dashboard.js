import React from 'react'
import LaunchFaciities from './LaunchFaciities'
import StarLink from './StarLink'
import Launch from './Launch'

function Dashboard() {
    return (
        <div className='overflow-y-scroll h-full flex justify-center'>
            <div>
                <Launch/>
                <Launch/>
            </div>
            <div>
                <LaunchFaciities />
                <StarLink/>
            </div>
        </div>
    )
}

export default Dashboard
