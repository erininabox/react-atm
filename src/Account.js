import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        balance: 0
    }
    
    handleDeposit = e => {
        e.preventDefault()
        if (isNaN(this.state.amount)) {
            console.log("Not a number")
        } else if (this.state.amount < 0) {
            console.log("Enter a positive number")
        }
        else {
            this.setState({
                balance: this.state.balance + Number(this.state.amount)
            })
        }
        this.setAmount(0)
    }

    handleWithdraw = e => {
        e.preventDefault()
        if (isNaN(this.state.amount)) {
            console.log("Not a number")
        } 
        else if (this.state.amount < 0) {
            console.log("Enter a positive number")
        }
        else if (this.state.balance < this.state.amount) {
             console.log('Insufficient funds')
        }
        else if (this.state.balance >= this.state.amount) {
            this.setState({ balance: this.state.balance + Number(this.state.amount)})
        }
        this.setAmount(0)
    }

    setAmount = amount => {
        this.setState({
            amount: amount
        })
    }

    render () {
        let balanceClass = 'balance'
        if (this.state.balance <= 0) {
            balanceClass += ' zero'
        }

        return (
            <div className="account">
                <h2>{this.props.name}</h2>
                <div className={balanceClass}>${this.state.balance}</div>
                <form>
                    <input 
                        type="text" 
                        placeholder="enter an amount" 
                        value={this.state.amount} 
                        onChange={ e => this.setAmount(e.target.value) }
                    />
                    <input type="submit" value="Deposit" onClick={this.handleDeposit} />
                    <input type="submit" value="Withdraw" onClick={this.handleWithdraw} />
                </form>
            </div>
        )
    }
}

export default Account