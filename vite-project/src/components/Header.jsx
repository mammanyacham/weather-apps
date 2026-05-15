import appLogo from '/images/logo.svg'
import dropdownIcon from '/images/icon-dropdown.svg'
import unitsIcon from '/images/icon-units.svg'

export default function Header({switchUnitsText, toggleUnits}) {


 return(
<>
    <header>
        <img src={appLogo} alt='logo' className='app-logo'/>
        <div className='dropdown-btn-div'>
            <button className='dropdown-btn'>
                <img src={unitsIcon} alt="Units" />
                    units
                <img src={dropdownIcon} alt="Dropdown" />
            </button>
        </div>
    </header>
    <div className='dropdown'>
        <button onClick={toggleUnits}><p>{switchUnitsText}</p></button>
        <div>
            <span className='dropdown-section'>Temperature</span>
            <p className='tool'>Celsius (°C)</p>
            <p className='tool'>Fahrenheit (°F)</p>
        </div>

        <div>
            <span className='dropdown-section'>Wind Speed</span>
            <p className='tool'><span>km/h</span></p>
            <p className='tool'><span>mph</span></p>
        </div>

        <div>
            <span className='dropdown-section'>Percipitation</span>
            <p className='tool'><span>Millimeters (mm)</span></p>
            <p className='tool'><span>inches (in)</span></p>
        </div>
    </div> 
</>
)
}