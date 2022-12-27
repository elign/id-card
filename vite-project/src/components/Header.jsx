import Harshit from "../images/harshit.png"
import { BUTTON_TYPES } from '../data/button.js'
import Button from "./buttons/Button"

const Header = () => {

    return (
        <div className="header">
            <div className="cover-image"></div>

            <h1>Harshit Khandelwal</h1>
            <h4>React Developer</h4>
            <a href="https://github.com/elign" target="_blank">GitHub</a>

            
            <div className="header-buttons">
                <a href="mailto:harshitshivam001@gmail.com" target="_blank">
                    <Button type={BUTTON_TYPES.PRIMARY} btnText="Email" icon={<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="icon icon-tabler icon-tabler-mail" 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="#000" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                    </svg>}/>
                </a>

                <a href="https://www.linkedin.com/in/elign/" target="_blank">
                    <Button type={BUTTON_TYPES.SECONDARY} btnText="LinkedIn" icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>}/>
                </a>
            </div>
        </div>
    )
}

export default Header