import React, { useEffect, useState } from 'react'
import { LAUNCHPADNAME_API } from '../constant';

const useLaunchpad = (launchID) => {
    const [launchpadName, setLaunxhpadName] = useState('');
    useEffect(() => {
        getLaunchPadInfo();
    }, [launchID]);
    const getLaunchPadInfo = async () => {
        const response = await fetch(LAUNCHPADNAME_API + launchID);
        const dataJson = await response.json();
        setLaunxhpadName(dataJson?.name)
    }
    return { launchpadName };
}

export default useLaunchpad
