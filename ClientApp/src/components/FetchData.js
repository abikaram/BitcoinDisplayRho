import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div>
        <h1 id="tabelLabel" >About Bitcoin</h1>
            <p>Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
            Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.
            The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.</p>
            BTC Links:
            <ul>
                <li><a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer">Bitcoin.org</a></li>
                <li><a href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer">Coinbase</a></li>
                <li><a href="https://www.coindesk.com/" target="_blank" rel="noopener noreferrer">Coindesk</a></li>
            </ul>
            <h2>About the Site</h2>
                <p>
                Hello and thanks for stopping by! As of summer 2021 I am a college student studying Computer Science. I built this site using React and ASP .NET to help familarize myself with web development. Let me know what you think!
                    <br />Check it out on <a href="https://github.com/abikaram" target="_blank" rel="noopener noreferrer">github</a> to learn more.
                </p>
      </div>
    );
  }
}