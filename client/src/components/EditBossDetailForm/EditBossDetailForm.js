import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import { updateBossDetailsFromServer } from '../../actions/patchActions';

import styles from './EditBossDetailForm.css';

import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const initialState = {
    showForm: false,
    id: null,
    fields: {
        name: '',
        description: '',
        img: ''
    },
    errors: {
        name: '',
        description: '',
        img: ''
    }
}

class EditBossDetailForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.bossDetails.id !== state.id) {
            return {
                id: props.bossDetails.id,
                fields: {
                    name: props.bossDetails.name,
                    description: props.bossDetails.description,
                    img: props.bossDetails.img
                }
            }
        }
        return null;
    }

    formIsValid() {
        const errors = {}
        const { name, description, img } = this.state.fields;

        if (validator.isEmpty(name)) {
            errors.name = 'Name must not be empty!';
        }

        if (validator.isEmpty(description)) {
            errors.description = 'Description must not be empty!';
        }

        if (validator.isEmpty(img)) {
            errors.img = 'Image URL must not be empty!';
        } else if (!validator.isURL(img)) {
            errors.img = 'Image must be an URL!';
        }

        if (Object.keys(errors).length === 0) {
            return true;
        }

        this.setState({ errors: { ...errors } })
        return false;
    }

    submitHandler(e) {
        e.preventDefault();

        if (this.formIsValid()) {
            const newBossObj = this.state.fields;
            this.props.updateBossDetailsFromServer(this.props.bossDetails.id, newBossObj);
            this.setState({ showForm: false });
            alert("Details updated!");
        }
    }

    toggleFormHandler(e) {
        this.setState(prevState => ({ showForm: !prevState.showForm }));
    }

    inputHandler(e) {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        const toggleFormButton = () => {
            if (this.state.showForm) {
                return <Button onClick={() => this.toggleFormHandler()} color='red'>Close edit form</Button>
            } else {
                return <Button onClick={() => this.toggleFormHandler()} color='green'>Edit {this.props.bossDetails.name} details!</Button>
            }
        }

        const creationForm = () => {
            if (this.state.showForm) {
                const { fields, errors } = this.state;
                return (
                    <Form onSubmit={this.submitHandler}>
                        <FormInput value={fields.name} onInput={this.inputHandler} name='name' label='Name' errorMessage={errors.name} />
                        <FormInput type="textarea" value={fields.description} onInput={this.inputHandler} name='description' label='Description' errorMessage={errors.description} />
                        <FormInput value={fields.img} onInput={this.inputHandler} name='img' label='Image URL' errorMessage={errors.img} />
                        <div className={styles.formSubmissionButton}>
                            <Button type="submit" color="green">Submit new hero!</Button>
                        </div>
                    </Form>
                )
            }
        }

        return (
            <div className={styles.formContainer}>
                <div className={styles.formTogglerButton}>
                    {toggleFormButton()}
                </div>
                {creationForm()}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    bossDetails: state.bossDetails
});

export default connect(mapStateToProps, { updateBossDetailsFromServer })(EditBossDetailForm);