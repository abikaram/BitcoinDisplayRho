import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CurrentPrice, HistoricalPrice } from './GetPrices';




export class Home extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            currencyList: [],
            currency: "USD"
        };
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    changeCurrency(e) {
        this.setState({
            currency: e.target.value
        });
    }

    componentDidMount() {
        const urlAPI = 'https://api.coinbase.com/v2/currencies';

        fetch(urlAPI).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request Failed');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            this.setState({
                currencyList: jsonResponse.data
            });
        })
    }

    render() {
        if (this.state.currencyList) {
            return (
                <div>
                    <label>Select a currency:
                        <select id="Currencies" defaultValue="USD" onChange={this.changeCurrency}>
                            <option value="USD">US Dollar</option>
                            {this.state.currencyList.map((cur) => <option value={cur.id} key={cur.id}>{cur.name}</option>)}
                        </select>
                    </label>
                    <CurrentPrice currency={this.state.currency} />
                    <HistoricalPrice currency={this.state.currency} />
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
    }
}

export class Copyright extends Component {

    render() {
        return (
            <footer id="disclaim">
                This data was produced from the <a href='https://developers.coinbase.com/api' target="_blank" rel="noopener noreferrer">Coinbase Digital Currency API</a>.
                <br />Copyright A. Abi-Karam, {new Date().getFullYear()}
            </footer>
                );
    }
}

ReactDOM.render(<Copyright />, document.getElementById("copy"));

class PauseButton extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            animated: document.body.style.animationPlayState
        };
        this.handleClick = this.handleClick.bind(this);
        this.coloring = "btn btn-light"
        this.text = "Pause Background"
    }

    handleClick() {
        const anima = document.body;
        const running = anima.style.animationPlayState || 'running';
        anima.style.animationPlayState = running === 'running' ? 'paused' : 'running';
        this.coloring = running === 'running' ? 'btn btn-dark' : 'btn btn-light';
        this.text = running === 'running' ? 'Resume Background' : 'Pause Background';
        this.setState({ animated: anima.style.animationPlayState });
    }

    render() {
        return <button onClick={this.handleClick} className={this.coloring}>{this.text}</button>;
    }
}

ReactDOM.render(<PauseButton />, document.getElementById("bottomButton"));