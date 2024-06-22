import './Style.css'
import  porject_default from '../assets/jigar-panchal-8BAyCFRCHqY-unsplash.jpg'

function Contact (){
    return (
        <main>
        <h3>Projects</h3>
        <p>I try to work on projects that grab interest that i don't think a regular person would try to build. Hope you like it :)</p>
        
        <div className='project-box'>
            <img src={porject_default} alt="image of projrect" />
            <div className='project-info'>
                <p>Name : Classified <br/>
                Project type: Website<br/>
                Built : 100%<br/>
                Owner : Raneil Simms<br/>
                Status : OnGoing</p>
                <button>info </button>
                {/*<button> Go to site </button>*/}
            </div>    
        </div>
        </main>

    )
}


export default Contact