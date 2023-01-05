import React from "react"

export default class Login extends React.Component {
    state = {
        name: "",
        password: "",
        remember: false
    }

    handleLogin = (event) => {
        event.preventDefault()
        let newState ={
            name: event.target.elements.name.value,
            password: event.target.elements.password.value,
            remember: event.target.elements.remember.checked,
        }

        this.setState(() => {
            return { ...newState}
        })
        
        console.log(newState);
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <label htmlFor="name">Name </label>
                <input required autoFocus type="text" name="name" ></input>
                <br></br>
                <label htmlFor="password">Password </label>
                <input required type="password" name="password" ></input>
                <br></br>
                <label htmlFor="remember">Remember </label>
                <input type="checkbox" name="remember"></input>
                <br></br>
                <button type="reset">Reset</button>
                <button type="submit">Login</button>
            </form>
        )
    }
}