import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import {getItems} from '../actions/itemActions';
import PropTypes from 'prop-types';

class Shoppinglist extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                color="dark" style={{marginBottom:'2em'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if (name) {
                        this.setState(state => ({
                            items: [...state.items, { id:uuid(), name}]
                        }))
                    }
                }}> 
                Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }));
                                    }}
                                    >&times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        )
    }
}

Shoppinglist.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems })(Shoppinglist);