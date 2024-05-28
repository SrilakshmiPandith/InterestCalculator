import logo from '../assets/Money.png';

export default function Header(){
    return(
        <div id="header">
            <img src={logo} alt='logo'/>
            <h1>SIP Calculator</h1>
            <h3>Calculating your returns with ease!</h3>
        </div>
    );
}