import './Style.css'
import  porject_default from '../assets/jigar-panchal-8BAyCFRCHqY-unsplash.jpg'

function Contact (){
    return (
        <main>
            <h3>Projects</h3>
            <p>Work none stop to reach the goal that you desire.</p>
            <div className='projects'>
                <div className='project-box'>
                    <img src={porject_default} alt="image of projrect" />
                    <div className='project-info'>
                        <p>Name : Classified <br/>
                        Project type: Website<br/>
                        Built Participation : 100%<br/>
                        Owner : Raneil Simms<br/>
                        Status : temporyorary on halt</p>
                        {/*<button> Go to site </button>*/}
                    </div>  
                </div>

                <div className='project-box'>
                    <img src={porject_default} alt="image of projrect" />
                    <div className='project-info'>
                        <p>Name : Classified <br/>
                        Project type: Website<br/>
                        Built participating : 100%<br/>
                        Owner : Jowayne Henry<br/>
                        Status : ongoing</p>
                      
                        {/*<button> Go to site </button>*/}
                    </div>    
                </div>

           
            </div>
        </main>

    )
}


export default Contact