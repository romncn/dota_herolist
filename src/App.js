import React from 'react';
import './App.css';
import axios from 'axios';
import swal from 'sweetalert2';

class App extends React.Component {
  Alert(subname) {
    swal.fire({
      icon: 'success',
      // html: <img src={'http://cdn.dota2.com/apps/dota2/images/heroes/' + {subname} + '_vert.jpg'} width="50" height="70" />,
      imageUrl: 'http://cdn.dota2.com/apps/dota2/images/heroes/' + subname  + '_full.png',
      imageWidth: 400,
      imageHeight: 200,
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    })
  }
  state = {
    herodetails: []
  }
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
                <option value="1">Carry</option>
                <option value="2">Support</option>
                <option value="3">Initiator</option>
                <option value="3">Disabler</option>
                <option value="3">Nuker</option>
              </select>
              <select className="custom-select bg-secondary text-white ml-2" id="inlineFormCustomSelect">
                <option selected>BY ATTACK TYPE</option>
                <option value="1">Melee</option>
                <option value="2">Ranged</option>
              </select>
              <select className="custom-select bg-secondary text-white ml-2" id="inlineFormCustomSelect">
                <option selected>Hero Name</option>
                <option value="1">Antimage</option>
                <option value="2">Axe</option>
              </select>

            </div>
          </div>
        </div>
        <p />
        <div className="Content">
          <div className="heroes-list p-2">

            <div className="strength-hero">
              <h3 className="text-white">STRENGTH</h3>
              <div className="container-fluid">
                <div className="row">
                  {this.state.herodetails.map((hero) => {
                    if (hero.primary_attr == "str") {
                      const localname = hero.name;
                      const subname = localname.substring(14);
                      return <div>
                        <img onClick={this.Alert} cursor="point" className="hero-img mr-1 ml-1 mt-2 " src={'http://cdn.dota2.com/apps/dota2/images/heroes/' + subname + '_vert.jpg'} width="50" height="70" />
                      </div>
                    }
                  })}
                </div>
              </div>
            </div>
            <div className="agility-hero">
              <h3 className="text-white">AGILITY</h3>
              <div className="container-fluid">
                <div className="row">
                  {this.state.herodetails.map((hero) => {
                    if (hero.primary_attr == "agi") {
                      const localname = hero.name;
                      const subname = localname.substring(14);
                      return <div>
                        <img onClick={this.Alert} className="hero-img mr-2 mt-2" src={'http://cdn.dota2.com/apps/dota2/images/heroes/' + subname + '_vert.jpg'} width="48" height="70" />
                      </div>
                    }
                  })}
                </div>
              </div>
            </div>
            <div className="intelligence-hero">
              <h3 className="text-white">INTELLIGENCE</h3>
              <div className="container-fluid">
                <div className="row">
                  {this.state.herodetails.map((hero) => {
                    if (hero.primary_attr == "int") {
                      const localname = hero.name;
                      const subname = localname.substring(14);
                      return <div>
                        <img onClick={this.Alert} className="hero-img mr-2 mt-2" src={'http://cdn.dota2.com/apps/dota2/images/heroes/' + subname + '_vert.jpg'} width="48" height="70" />
                      </div>
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default App;
