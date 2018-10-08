import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import {updateObject,checkValidity} from '../../../shared/utility';
class ContactData extends Component {
    state = {
        orderForm: {            
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    require: true
                },
                valid: false,
                touched:false
            },

            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    require: true
                },
                valid: false,
                touched:false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zipcode'
                },
                value: '',
                validation: {
                    require: true,
                    minLength:6,
                    maxLenght:6
                },
                valid: false,
                touched:false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    require: true
                },
                valid: false,
                touched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    require: true
                },
                valid: false,
                touched:false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'fastest',
                validation:{},
                valid:true
            }
        },
        formIsValid:false
    }

    orderHandler = (event) => {
        event.preventDefault();        
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId:this.props.userId
        };
        
        this.props.onOrderBurger(order,this.props.token);
    }

    
    inputChangedHandler = (event, inputIdentifier) => {
        

        const updatedFromElement = updateObject(this.state.orderForm[inputIdentifier],{
            value:event.target.value,
            valid:checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
            touched:true
        }); 
        
        const updateOrderFrom = updateObject(this.state.orderForm,{
            [inputIdentifier]:updatedFromElement
        });

        let formIsValid=true;
        for(let input in updateOrderFrom){
            formIsValid=updateOrderFrom[input].valid && formIsValid;
        }
        this.setState({ orderForm: updateOrderFrom, formIsValid:formIsValid });


    }
    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>              
                {
                    formElementArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    ))
                }
                <Button
                disabled={!this.state.formIsValid}
                    clicked={this.orderHandler}
                    btnType="Success">Order</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Contact Data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
    }
} 
const mapDispatchToProps= dispatch=> {
    return{
        onOrderBurger:(orderData,token)=>dispatch(actions.perchaseBurger(orderData,token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));