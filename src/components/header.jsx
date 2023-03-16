import balloon from './images/balloon.jpg';

export default function Header() {
    return (
        <div>
            <img className="headerImg" src={balloon} alt="hot air balloon"></img>
            <div className="headerTxt">
                <h1>Hot Air Balloon</h1>
                <div className="headerInfo">
                    <h2>Making Dreams Come True</h2>
                    <p>Fast and Easy</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    )
}