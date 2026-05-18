import { useState } from 'react'
import appLogo from '/images/logo.svg'
import dropdownIcon from '/images/icon-dropdown.svg'
import unitsIcon from '/images/icon-units.svg'
import checkMark from '/images/icon-checkmark.svg'
import retryIcon from '/images/icon-retry.svg'

export default function Header({switchUnitsText, toggleUnits, isMetric}) {

    const [dropdownState, setDropdownState] = useState(true)

    const highlightMetric =  `tool ${isMetric ? 'highlight' : ''}`
    const highlightImperial = `tool ${!isMetric ? 'highlight' : ''}`

    const checkMarkMetric =  isMetric ? <img src={checkMark}/> : null
    const checkMarkImperial = !isMetric ? <img src={checkMark}/> : null


    function toggleDropdown() {
        setDropdownState(prev => !prev)
    }

 return(
<>
    <header>
        <img src={appLogo} alt='logo' className='app-logo'/>
        <div className='dropdown-btn-div'>
            <button className='dropdown-btn' onClick={toggleDropdown}>
                <img src={unitsIcon} alt="Units" />
                    units
                <img src={dropdownIcon} alt="Dropdown" />
            </button>
        </div>
    </header>
    <div className={dropdownState ? 'hide-dropdown' : 'dropdown'}>
        <button onClick={toggleUnits} className='switch-btn'><p>{switchUnitsText}</p> <img src={retryIcon}/></button>
        <div>
            <span className='dropdown-section'>Temperature</span>
            <p className={highlightMetric}>Celsius (°C) 
                {checkMarkMetric}
            </p>
            <p className={highlightImperial}>Fahrenheit (°F)
                {checkMarkImperial}
            </p>
        </div>

        <div>
            <span className='dropdown-section'>Wind Speed</span>
            <p className={highlightMetric}>
                <span>km/h</span>
                {checkMarkMetric}
            </p>
            <p className={highlightImperial}>
                <span>mph</span>
                {checkMarkImperial}
            </p>
        </div>

        <div>
            <span className='dropdown-section'>Percipitation</span>
            <p className={highlightMetric}>
                <span>Millimeters (mm)</span>
                {checkMarkMetric}
            </p>
            <p className={highlightImperial}><span>inches (in)</span>{checkMarkImperial}</p>
        </div>
    </div> 
</>
)
}