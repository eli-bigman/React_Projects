
function Navbar(){
    return (
<div className="container">
    <nav className="navbar" >
        
        <div className="pulse">
            <a href="">
            <img src="public\pulse-logo.svg" alt="Logo" />
            </a>
        </div>
        <ul className="nav-list">
            <a href="">
                <li>Features</li>
            </a>
            <a href="">
                <li>Customer Stories</li>
            </a>
            <a href="">
                <li>Pricing</li>
            </a>
            <a href="">
                <li>Blog</li>
            </a>
        </ul>

        <button className="sign_up">Sign Up</button>
            
    </nav>
</div>
)}

export default Navbar;