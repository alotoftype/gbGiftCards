import React, { Component } from 'react';
import PgiftCard from '../images/physical_gift-card.jpeg';
import EgiftCard from '../images/e-gift-card.jpeg';

export default class GiftCard extends Component {

    state = {
        type:''
    }
    render() {
        return (
            <>
                <header>
                    header
                </header>
                <main>
                <h1>Select a gift Card Type</h1>
                    <section className="main">
                        <div className="left columns-2"><img src={PgiftCard} alt=""/>   
                        <h3>Physical Gift Card</h3>
                        <button> Select </button>
                        </div>
                        <div className="right columns-2"><img src={EgiftCard} alt=""/>
                        <h3>E Gift Card</h3>
                        <button>Select </button>  </div>
                    </section>
                </main>
                <footer>

                </footer>
            </>
        )
    }
}


