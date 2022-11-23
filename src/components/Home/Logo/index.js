import { useRef } from 'react'

import m from '../../../assets/images/m.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()

    const solidLogoRef = useRef()


    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={m}
                alt="JavaScript,  Developer"
            />

        </div>
    )
}

export default Logo