import React, { Component } from 'react';
import LineChart, { parseFlatArray } from 'react-linechart';
import './LineChart.css'

class SimpleLineChart extends Component{
	constructor() {
        super();
        this.state = {
			chartData : [],
			defaultProps :{
				data : {},
				color : '#FFFFFF'
			}
        };
	  }
	  
	  makePath() {
		const {data, color} = this.props;
		let pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";
	
		pathD += data.map((point, i) => {
		  return "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
		});
	
		return (
		  <path className="linechart_path" d={pathD} style={{stroke: color}} />
		);
	  }
	  
    render(){
        const gsmData = [
			{
				"Year": 1880,
				"Glob": -19,
				"NHem": -33,
				"SHem": -5
			},
			{
				"Year": 1881,
				"Glob": -10,
				"NHem": -18,
				"SHem": -2
			},
			{
				"Year": 1882,
				"Glob": -15,
				"NHem": -12,
				"SHem": -4
			}
        ];
        //console.log("LineChart : ", gsmData);
        const gsmFlat = parseFlatArray(gsmData, "Year", ["Glob", "NHem", "SHem"]);
		return(
            <div>
                <LineChart 				
                    width={500} 
					height={300}
					showLegends
                    legendPosition="top-right"
					data={gsmFlat}
					onPointHover={(obj) => `x: ${obj.x}<br />y: ${obj.y}`}
					margin={{top: 10, left: 120, bottom: 10}}
					color={'#ffffff'}
                />		
			</div>
        )
    }
}

SimpleLineChart.defaultProps = {
    data : {},
    color : '#FFFFFF'
}

export default SimpleLineChart;
