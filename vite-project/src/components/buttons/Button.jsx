import { BUTTON_TYPES } from "../../data/button"
import "./button.css"

const Button = (props) => {

    const {type, btnText, icon} = props;

    const getButtonClass = () => {
        
        switch(type) {
            case BUTTON_TYPES.PRIMARY:
                return "primaryBtn button";
            case BUTTON_TYPES.SECONDARY:
                return "secondaryBtn button";
            default:
                return "tertiaryBtn button";
        }
    }
    return (
        <div className={`${getButtonClass()}`}>{icon} {btnText}</div>
    )
}

export default Button;