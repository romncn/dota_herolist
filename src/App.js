import React from 'react';
import './App.css';
import axios from 'axios';
import swal from 'sweetalert2';



const Filter = (props) => {
  return (
    <div>
      <div class="dropdown ml-1 mr-1">
        <button class="btn filter-btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          {props.filter}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          {props.types.map((type, i) => {
            return <button onClick={() => props.filterFunc(type)} class="dropdown-item" type="button">{type}</button>
          })}
        </div>
      </div>
    </div>
  )
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      herodetails: [{}],
      heroShow: [{}],
      heroRole: [
        'All',
        'Carry',
        'Nuker',
        'Escape',
        'Disabler',
        'Initiator',
        'Durable'],
      heroAtkType: [
        'All',
        'Melee',
        'Ranged'
      ],
      heroName: [
        'All',
        'Axe', 'Earthshaker', 'Pudge', 'Sand King',
        'Anti-Mage', 'Bloodseeker', 'Drow Ranger', 'Juggernaut',
        'Bane', 'Crystal Maiden', 'Witch Doctor', 'Disruptor'
      ],
    }
  }

  Alert = (hero) => {
    swal.fire({
      imageUrl: 'http://cdn.dota2.com/apps/dota2/images/heroes/' + hero.name.substring(14) + '_full.png',
      imageWidth: 400,
      imageHeight: 200,
      title: hero.localized_name,
      text: hero.attack_type,
      footer: hero.roles,
      showConfirmButton: false,

    })
  }
  componentDidMount = () => {
    axios.get(
      'https://api.opendota.com/api/heroes'
    ).then((response) => {
      this.setState(
        {
          herodetails: response.data,
          heroShow: response.data
        }
      )
    })
  };

  FilterRole = (type) => {
    let role = this.state.herodetails
    if (type !== 'All') 
    role = this.state.herodetails.filter((hero) => hero.roles.includes(type) === true)
    this.setState({
      heroShow: role,
      filter: { type: type }
    })
  }
  FilterAtk = (type) => {
    let atk = this.state.herodetails
    if (type !== 'All') 
    atk = this.state.herodetails.filter((hero) => hero.attack_type.includes(type) === true)
    this.setState({
      heroShow: atk,
      filter: { type: type }
    })
  }
  FilterName = (type) => {
    let name = this.state.herodetails
    if (type !== 'All') 
    name = this.state.herodetails.filter((hero) => hero.localized_name.includes(type) === true)
    this.setState({
      heroShow: name,
      filter: { type: type }
    })
  }

  render() {
    return (
      <div>
        
        <div className="fliter-block p-2">
          <div className="container">
              <div className="row">
                <span className="text-white m-2">FILTER</span>
                <Filter filter={'Role'} types={this.state.heroRole} filterFunc={this.FilterRole} />
                <Filter filter={'Attack Type'} types={this.state.heroAtkType} filterFunc={this.FilterAtk} />
                <Filter filter={'Hero Name'} types={this.state.heroName} filterFunc={this.FilterName} />
              </div>
          
            </div>
        </div>
        <p />
        <div className="Content">
          <div className="heroes-list p-2">

            {/* show strength hero */}
            <div className="strength-hero">
              <h3 className="text-white">STRENGTH</h3>
              <div className="container-fluid">
                <div className="row">

                  {this.state.heroShow.map((hero) => {
                    if (hero.primary_attr == "str") {
                      const subname = hero.name.substring(14);
                      return <div>
                        <img onClick={() => this.Alert(hero)} cursor="point" className="hero-img mr-1 ml-1 mt-2 "
                          src={'http://cdn.dota2.com/apps/dota2/images/heroes/' + subname + '_vert.jpg'} width="50" height="70" />
                      </div>
                    }
                  })}

                </div>
              </div>
            </div>

            {/* show agility hero */}
            <div className="agility-hero">
              <h3 className="text-white">AGILITY</h3>
              <div className="container-fluid">
                <div className="row">
                  {this.state.heroShow.map((hero) => {
                    if (hero.primary_attr == "agi") {
                      const subname = hero.name.substring(14);
                      return <div>
                        <img onClick={() => this.Alert(hero)} className="hero-img mr-2 mt-2"
                          src={'http://cdn.dota2.com/apps/dota2/images/heroes/' + subname + '_vert.jpg'} width="48" height="70" />
                      </div>
                    }
                  })}

                </div>
              </div>
            </div>

            {/* show intelligence hero */}
            <div className="intelligence-hero">
              <h3 className="text-white">INTELLIGENCE</h3>
              <div className="container-fluid">
                <div className="row">
                  {this.state.heroShow.map((hero) => {
                    if (hero.primary_attr == "int") {
                      const subname = hero.name.substring(14);
                      return <div>
                        <img onClick={() => this.Alert(hero)} className="hero-img mr-2 mt-2"
                          src={'http://cdn.dota2.com/apps/dota2/images/heroes/' + subname + '_vert.jpg'} width="48" height="70" />
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
