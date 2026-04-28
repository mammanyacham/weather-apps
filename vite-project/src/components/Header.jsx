import appLogo from '/images/logo.svg'

export default function Header() {
 return(
 <header>
    <img src={appLogo}/>
    
    <select className='dropdown' type='dropdown'>
        <option>units</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
 </header>)
}