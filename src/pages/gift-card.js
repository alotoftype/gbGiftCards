import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GCdetails from '../components/gcdetails';
import PgiftCard from '../images/phsyical-giftCard.png';
import EgiftCard from '../images/e-gift-card.jpeg';
import Header from '../components/newHeader';
import Footer from '../components/newFooter';

export default class GiftCard extends Component {

    state = {
        step: 2,
        type:'',
        cart:[]
    }

    next = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    }
    
    back = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }
    
    handleChange = name => event => {
        event.preventDefault()
        this.setState(
            {...this.state, [name]: event.target.value
        })

    }
    addToCart = (item) => event => {
        const { cart } = this.state
        event.preventDefault()
        this.setState({
            cart: [...cart, item]
        })

    }

    render() {
    const { step } = this.state
    switch(step){
        case 1: 
            return ( 
                <>
                <Header/>
                <main>
                <section>
                <h1>Select a gift Card Type</h1>
                    <section className="main">
                        <div className="left columns-2"><img src={PgiftCard} alt=""/>   
                        <h3>Physical Gift Card</h3>
                        <Button variant="outlined"
                        onClick={this.handleChange("physical-giftCard")}
                        color="primary"
                        size="large"
                        >
                        Physical GiftCard
                        </Button>
                        </div>
                        <div className="right columns-2"><img src={EgiftCard} alt=""/>
                        <h3>E Gift Card</h3>
                        <Button variant="outlined"
                        onClick={this.handleChange("digital-giftCard")}
                        color="primary"
                        size="large"
                        value="gift-card"
                        > 
                        Digital Gift Card
                        </Button>
                        </div>
                    </section>
                    <button onClick={this.back}> Back </button> <button onClick={this.next}> continue</button>
                    </section>
                    </main>
                <footer>

                </footer>
            </>
            )

            case 2: 
            return (
            <>
            <Header/>
            <main>
                        <h1> Purchase a Gift Card </h1>
            <section className="section gc">

                <GCdetails cart={this.state.cart}
                addToCart={this.addToCart}
                handleChange={this.handleChange}
                />
            </section>
            </main>
            <Footer/>
            </>
            )   
            case 3: 
            return (
                <>
                <Header/>
                <main>
                    <h1>Success</h1>
                </main>
                <Footer />
                </>
            )     
            default:
               return  (
                <>
                <header>
                    header
                </header>
                <main>
                <section>
                <h1>Select a gift Card Type</h1>
                    <section className="main">
                        <div className="left columns-2"><img src={PgiftCard} alt=""/>   
                        <h3>Physical Gift Card</h3>
                        <input id="1"onClick={this.handleChange} type="button" value="pgc"/>
                        </div>
                        <div className="right columns-2"><img src={EgiftCard} alt=""/>
                        <h3>E Gift Card</h3>
                        <input id="2" type="button" onClick={this.handleChange}  value="egc"/>  </div>
                    </section>
                    <button onClick={this.back}> Back </button> <button onClick={this.next}> continue</button>
                    </section>
                    </main>
                <footer>

                </footer>
            </>
            )

    }

    }}
