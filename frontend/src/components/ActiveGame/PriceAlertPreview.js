import React, { Component } from 'react';
import GamePreview from '../helper/GamePreview';
import SubmitEmailForm from './SubmitEmailForm';
import { Alert } from 'reactstrap';
import './PriceAlertPreview.css';

class PriceAlertPreview extends Component {
    render() {
        const { title, price, onSale } = this.props.activeGame;
        const { userEmail } = this.props.userInfo;
        const expiration = new Date(new Date().getTime() + 10886400000).toDateString().slice(3);

        return (
            <div className='priceAlertPreview'>
                <GamePreview {...this.props.activeGame}>
                    {onSale &&
                        <Alert color='warning'>
                            <p>You're still welcome to set up this price alert in case {title} gets an even greater discount.</p>
                        </Alert>}

                    {this.props.userInfo.userEmail ?
                        <p>You will receive a message at <strong>{userEmail}</strong> if the price drops below ${price} before {expiration}.</p> :
                        <div>
                            <p>Enter an email address to receive a message if the price drops below ${price} before {expiration}.</p>
                            <SubmitEmailForm {...this.props} context={'PriceAlertPreview.js'} />
                        </div>}

                    {this.props.children}
                </GamePreview>
            </div>
        );
    }
}

export default PriceAlertPreview;