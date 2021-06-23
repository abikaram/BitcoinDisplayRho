import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

export class PriceChart extends Component {
    constructor(props) {
        super(props);
        this.state = ({ data: [] });
    }

    fetchData() {
        fetch(`https://api.coindesk.com/v1/bpi/historical/close`).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request Failed');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            let dates = jsonResponse.bpi;
            let inData = [['x', 'Price Rate']];
            for (const entry in dates) {
                inData.push([entry, dates[entry]]);
            }
            this.setState({ data: inData });
        })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                <Chart
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.data}
                    options={{
                        chart: {
                            title: 'Rates from Past 30 Days',
                            subtitle: 'BTC - USD'
                        },
                        hAxis: {
                            title: 'Date',
                        },
                        vAxis: {
                            title: 'USD',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}