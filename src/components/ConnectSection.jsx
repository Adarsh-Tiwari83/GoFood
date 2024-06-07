import { FaArrowRight, FaRegHeart,FaRegComment,FaRegUser} from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import './ConnectSection.scss';

const ConnectSection = () => (
    <div className="connect-section">
        <div className="connect-header">
            <div className="connect-title">
                Connect with Us <FaArrowRight />
            </div>
            <div className="social-icons">
                <div className="icon facebook"><FaRegHeart/></div>
                <div className="icon twitter"><FaRegComment /></div>
                <div className="icon instagram"><FaRegUser /></div>
                <div className="icon youtube"><IoCartOutline /></div>
            </div>
        </div>
        <div className="spacer">
            <img src="./food.png" alt="" />
        </div>
    </div>
);

export default ConnectSection;


