import React, { useEffect, useState } from 'react'
import { ROCKETNAME_API } from '../constant';

const useRocket = (rocketId) => {
    const [rocketname, setRocketname] = useState('');
    useEffect(() => {
        rocketName();
    }, [rocketId]);
    const rocketName = async() => {
        const data = await fetch(ROCKETNAME_API+rocketId);
        const dataJson = await data.json();
        setRocketname(dataJson?.name);
    }
    return { rocketname };
}

export default useRocket
