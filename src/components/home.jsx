import NavBar from './navbar';
import Header from './header';
import Features from './features';

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="container-navbar">
                <NavBar />
            </div>
            <div className="header-container">
                < Header />
            </div>
            <div>
                < Features />
            </div>
        </div>
    )
}