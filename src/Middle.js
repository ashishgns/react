import React, {Component} from 'react'

const Mission = (props) => {
	const missionids = props.mid.map((mission, index) => {
		return <li key={index}>{mission}</li>
	})

	return <ul>{missionids}</ul>
}

const Box = (props) => {
  const boxes = props.boxData.map((box, index) => {
    return (
      <div className="prod-box" key={index}>
        <figure>
          <img src={box.links.mission_patch_small} alt={box.mission_name} />
        </figure>
        <div className="prod-content">
           <h6>{box.mission_name}</h6>
           <div className="mission-id"><strong>Mission Ids:</strong>
           		<Mission mid={box.mission_id} />
           </div>
           <div className="launch-year">
              <strong>Launch Year:</strong> <span>{box.launch_year}</span>
           </div>
           <div className="launch-year">
              <strong>Successful Launch:</strong> <span>{String(box.launch_success)}</span>
           </div>
           <div className="launch-year">
              <strong>Successful Landing:</strong> <span>{String(box.rocket.first_stage.cores[0].land_success)}</span>
           </div>
        </div>
      </div>  
    )
  })

  return <div className="content-wrapper">{boxes}</div>
}

const LaunchYear = (props) => {

	const arr = [];
  props.lyear.map((data, index) => {
    if(arr.indexOf(data.launch_year) === -1) {
      arr.push(data.launch_year)
    }
    return true;
  })

	const years = arr.map((year, index) => {
		if(index === 0){
			return <li key={index} className="active" onClick={() => props.filterByYear(year)}>{year}</li>
		} else {
			return <li key={index} onClick={() => props.filterByYear(year)}>{year}</li>
		}
	})

	return (<div className="filtertype-box">
                <div className="filter-heading">
                  Launch Year
                </div>
                <ul>{years}</ul></div>)
}

const LaunchSuccess = (props) => {
	
	const fdata = props.flag.map((idx, index) => {
    return <li key={index} onClick={() => props.filterByLaunch(idx)}>{idx}</li>
  })

	return (<div className="filtertype-box">
                <div className="filter-heading">
                  Successful Launch
                </div>
                <ul>{fdata}</ul>
              </div>)
}

const LandSuccess = (props) => {
	const fdata = props.flag.map((idx, index) => {
    return <li key={index} onClick={() => props.filterByLand(idx)}>{idx}</li>
  })

	return (<div className="filtertype-box">
                <div className="filter-heading">
                  Successful Landing
                </div>
                <ul>{fdata}</ul>
              </div>)
}

const Head = () => {
  const name = 'Infozion'

	return (
		<div className="container">
      <h2>SpaceX Launch Programs {name}</h2>
    </div>
	)
}

const Foot = () => {
  const name = 'Infozion'

	return (
		<div className="container">
      <h2 className="text-center">Developed by: <small>{name}</small></h2>
    </div>
	)
}

class Middle extends Component {

  render() {

  	const {boxData, flag, filterByYear, filterByLaunch, filterByLand} = this.props

    return (
      <div className="main">
        <Head />
        <div className="container">
          <div className="inner-wrapper">
            <div className="sidebar">
              <h4>Filters</h4>
              <LaunchYear lyear={boxData} filterByYear={filterByYear} />
              <LaunchSuccess flag={flag} filterByLaunch={filterByLaunch} />
              <LandSuccess flag={flag} filterByLand={filterByLand} />
            </div>
						<Box boxData={boxData} /> 
          </div>
        </div>
        <Foot />
     	</div>
    );
  }
}

export default Middle