import React, { Component } from 'react';
import Input from '../../components/input/input'
import    './Auth.scss'
class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: "email",
                    placeholder: "Please enter your email",
                },
                value: "",
                validation: {
                    isEmail: true,
                    required: true,
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: "password",
                    placeholder: "Please enter your password"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }

        }
    }

    checkValidity(value, rules) {

        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }



    render() {

        const formArray = []
        for (let key in this.state.controls) {
            formArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
      
        let formElement = formArray.map(elem => (
            <Input
                key={elem.id}
                elementType={elem.config.elementType}
            />
        ))
        return (
            <div class="wrapper">
              

                <form class="form-signin">
                    <h2 class="form-signin-heading">Please login</h2>
                    <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                    <input type="password" class="form-control" name="password" placeholder="Password" required="" />
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Switch To</button>
                </form>
            </div>
        )
    }


}



export default Auth