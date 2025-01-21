import chef_log from '../assets/chef-claude-icon.png'

function Header() {
    return (
        <header>
            <img src={chef_log} alt="website logo" />
            <span>AI Chef</span>
        </header>
    )
}

export default Header;