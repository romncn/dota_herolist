import React from 'react';
import './App.css';
import axios from 'axios';




class App extends React.Component {
  state = {
    herodetails: []
  }
  // console.log('response data', response)
  componentDidMount = () => {
    axios.get(
      'https://api.opendota.com/api/heroes'
    ).then((response) => {
      const herodetails = response.data;
      this.setState(
        {
          herodetails
        }
      )
      console.log('response data', this.state.herodetails)
    })
  };
  render() {
    return (
      <div>
        <div className="Filter">
          <div className="container">
            <div className="fliter-block p-2">
              <span className="text-white m-2">FILTER</span>
              <select className="custom-select bg-secondary text-white" id="inlineFormCustomSelect">
                <option selected>BY ROLE</option>
                <option value="1">carry</option>
                <option value="2">supp</option>
                <option value="3">mid</option>
              </select>
              <select className="custom-select bg-secondary text-white ml-2" id="inlineFormCustomSelect">
                <option selected>BY ATTACK TYPE</option>
                <option value="1">Melee</option>
                <option value="2">Range</option>
              </select>
              <select className="custom-select bg-secondary text-white ml-2" id="inlineFormCustomSelect">
                <option selected>Hero Name</option>
                <option value="1">Melee</option>
                <option value="2">Range</option>
              </select>

            </div>
          </div>
        </div>
        <p />
        <div className="Content">
          <div className="heroes-list p-2">
            <div className="strength-hero">
              <h3 className="text-white">STRENGTH</h3>
              <div className="row">
                {this.state.herodetails.map((hero) => {
                  if(hero.primary_attr == "str"){
                    return <div className ="col-3 text-white">
                      name : {hero.localized_name}
                      <br/> type : {hero.primary_attr}
                    </div>
                  }
                })}
              </div>


            </div>
            <div className="agility-hero">
              <h3 className="text-white">AGILITY</h3>
                {/* <img src="http://cdn.dota2.com/apps/dota2/images/heroes/antimage_vert.jpg" ></img> */}


            </div>
            <div className="intelligence-hero">
              <h3 className="text-white">INTELLIGENCE</h3>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
