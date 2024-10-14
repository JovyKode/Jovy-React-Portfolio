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
            <p>Down below consist of Computer services i can provide depending on the state of the device\devices when looked at .We can talk about price after device is examined.</p>
            <div className='services'>
                <ul>
                    <li><img src={windows}/>Computer Repair ,Customization and parts Installation</li>
                    {/*<li><img src={office}/>Microsoft Office (word, excel, Powerpoint, Outlook, etc) </li>*/}
                    <li><img src={mobilerepair}/>Phone Repair </li>
                    <li><img src={net}/>Network Setup</li>
                    <li><img src={webicon}/>Web Design</li>
                    <li><img src={appbuild}/>Mobile and Desktop Apps Design</li> 
                </ul>
            </div>
        </main>
    )
}


export default Services