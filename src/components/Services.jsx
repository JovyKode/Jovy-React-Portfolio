import webicon from '../assets/website-hosting-icon.webp'
import appbuild from '../assets/desktop-mobile-icon.webp'
import  net from '../assets/pc-network-icon.webp'
import mobilerepair from '../assets/mobile-portrait-mode-icon.png'
import office from '../assets/office-365-icon.webp'
import windows from   '../assets/windows-icon.webp'

const Services = () => {
    return (
        <main>
            <h3>Services</h3>
            <p>Down below consist of Computer services i can provide depandinding on the state of the device\devices when looked at .We can talk about price when device is examined aswell.</p>
            <div className='services'>
                <ul>
                    <li><img src={windows}/>Computer Repair ,Customization and parts Installation</li>
                    <li><img src={office}/>Microsoft Office (word, excel, Powerpoint, Outlook, etc) </li>
                    <li><img src={mobilerepair}/>Phone Repair </li>
                    <li><img src={net}/>Network Setup</li>
                    <li><img src={webicon}/>Building Scalable Website</li>
                    <li><img src={appbuild}/>Building mobile and Desktop apps</li> 
                </ul>
            </div>
        </main>
    )
}


export default Services