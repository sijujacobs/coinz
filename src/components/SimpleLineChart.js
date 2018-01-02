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
        console.log("LineChart : ", gsmData);
        const gsmFlat = parseFlatArray(gsmData, "Year", ["Glob", "NHem", "SHem"]);
		return(
            <div>
                <LineChart 				
                    width={500} 
					height={300}
					showLegends
                    legendPosition="top-right"
					data={gsmFlat}
					margin={{top: 20, left: 120, bottom: 20}}
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
