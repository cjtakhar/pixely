import { FaDollarSign, FaHandsHelping } from "react-icons/fa";
import {GiMaterialsScience} from "react-icons/gi";

export default function Features() {
    return (
        <div>
            <div className="features-container">
                <h2>Why Choose Air Time?</h2>
                <div className="features">
                    
                    <h3>< FaDollarSign />Low Rates</h3>
                    <h3>< GiMaterialsScience />R & D</h3>
                    <h3>< FaHandsHelping />Support</h3>
                </div>
            </div>
        </div>
    )
}