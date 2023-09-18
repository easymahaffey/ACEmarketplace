import './landing.scss'

import aceLogo from '../../resources/logos/ACEMarketplacelogo.png'
import SearchBar from '../search/SearchBar'

const Landing = () => {

    return(




      <div id="landing-area">

        <h1>HOLA TESTING!!!!</h1>

        <div id="top-area">

          <div id="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>

          <div id="search-area">
          <SearchBar/>
          </div>

        </div>
        
      </div>
    )
}

export default Landing
