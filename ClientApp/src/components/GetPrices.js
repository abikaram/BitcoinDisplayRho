import React, { Component } from 'react';
import { PriceChart } from './Chart';

export class CurrentPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: "",
            updateTime: "",
        };
        this.fetchPresent = this.fetchPresent.bind(this);
    }

    render() {
        return (
            <div id="current">
                <h2>Current Price ({this.props.currency}):</h2>
                <h3>{this.state.rate}</h3>
                <h6>Updated: {this.state.updateTime.toString()}</h6>
            </div>
        );
    }

    fetchPresent() {
        const urlAPI = 'https://api.coinbase.com/v2/prices/BTC-'+this.props.currency+'/spot';
            fetch(urlAPI).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request Failed');
            }, networkError => console.log(networkError.message)
            ).then(jsonResponse => {
                this.setState({
                    rate: jsonResponse.data.amount,
                    updateTime: new Date()
                });
            })
       
    }

    startInterval() {
        this.intervalID = setInterval(this.fetchPresent, 60000);
    }

    componentDidMount() {
        this.fetchPresent();
        this.startInterval();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currency !== this.props.currency) {
            clearInterval(this.intervalID);
            this.fetchPresent();
            this.startInterval();
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

}

export class HistoricalPrice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rate: "",
            date: new Date().toISOString().slice(0, 10)
        };
    }
    
    render() {
        return (
            <div id="historical">
                <h3>Historical Rates</h3>
                <label>View Rate by Date: 
                <input type="date" min='2010-07-17' max={new Date().toISOString().slice(0, 10)} defaultValue={new Date().toISOString().slice(0, 10)} onChange={(e) => this.setState({date: e.target.value})}/>
                    <h4>{this.state.rate}</h4>
                </label>
                <PriceChart />
            </div>
        );
    }

    fetchPast() {
        const urlAPI = 'https://api.coinbase.com/v2/prices/BTC-' + this.props.currency + '/spot?date=' + this.state.date;
            fetch(urlAPI).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request Failed');
            }, networkError => console.log(networkError.message)
            ).then(jsonResponse => {
                this.setState({
                    rate: jsonResponse.data.amount
                });
            })
        
    }

    componentDidMount() {
        this.fetchPast();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currency !== this.props.currency || prevState.date !== this.state.date) {
            this.fetchPast();
        }
    }
}