import React, { useRef, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const inputName = nameInputRef.current.value;
        const inputAge = ageInputRef.current.value;
        if (inputName.trim().length === 0 || 
            inputAge.trim().length === 0 ||
            +inputAge < 1) {

            setError({ title: 'Invalid', message: 'Please enter a valid name and age' });
            return;
        }
        props.onAddUser(inputName, inputAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;