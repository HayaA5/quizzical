import sun from '../assets/images/blob 5.png'
import floorCorner from '../assets/images/blobs.png'
export default function Start({ toggleStart }) {
    return (
        <div className="start-page-container">
            <img src={sun} className='sun' />
            <header>Quizzical</header>
            <p>Some description if needed</p>
            <button className="btn-start-quizz" onClick={toggleStart}>Start Quiz</button>
            <img src={floorCorner} className='floor-corner' />
        </div>
    )
}