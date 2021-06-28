import './style.css';
import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Middle from './Middle'

class App extends Component {

  state = {
    data: [],
    flag: ['true', 'false']
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = 'https://api.spaceXdata.com/v3/launches?limit=10'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  filterByYear = (year) => {

    const url = 'https://api.spaceXdata.com/v3/launches?launch_year='+year+'&limit=10'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  filterByLaunch = (launch) => {

    const url = 'https://api.spaceXdata.com/v3/launches?launch_success='+launch+'&limit=10'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  filterByLand = (land) => {

    const url = 'https://api.spaceXdata.com/v3/launches?land_success='+land+'&limit=10'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {

    const { data, flag } = this.state

    return (
      <div className="page-wrapper">
        <Header />
        <Middle boxData={data} flag={flag} filterByYear={this.filterByYear} filterByLaunch={this.filterByLaunch} filterByLand={this.filterByLand} />
        <Footer />
      </div>
    );
  }
}

export default App;
