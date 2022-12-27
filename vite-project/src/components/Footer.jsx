import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import WhatsApp from "../images/whatsapp.png"
const Footer = () => {

    return (
        <div className="footer">
            
            <a href="https://facebook.com"><img src={Facebook} /></a>
            <a href="https://instagram.com"><img src={Instagram} /></a>
            <a href="https://wa.me/917727995218?text=Hi!%20Harshit...%0A"><img src={WhatsApp} /> </a>         
            
        </div>
    )
}

export default Footer