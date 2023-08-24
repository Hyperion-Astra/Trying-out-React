import React, {useState} from 'react';
import { Connect, connect } from 'react-redux';
import { 
    increaseCounter,
    decreaseCounter 
} from '../redux/actions/actions';

const Proof = (Props) => {
    const [name, setName] = useState("Apple TV");
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        setQuantity((qty) => {
            return qty + 1
        })
    }
    
    const handleDecrease = () => {
        setQuantity((quantity) => quantity - 1)
    }

    return (
        <>
            <span>
                <h1>{Props.name}</h1>
                <h1>{Props.counter}</h1>
            </span>
            <button onClick={Props.decreaseCounterAction}>Decrease</button>
            <button onClick={Props.increaseCounterAction}>Increase</button>
        </>
    );
};
const mapStateToProps = state => {
    return {
        name: state.first_name,
        counter: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        increaseCounterAction: () => dispatch(increaseCounter()),
        decreaseCounterAction: () => dispatch(decreaseCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Proof)