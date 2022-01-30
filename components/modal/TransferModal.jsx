import React, { useState } from 'react';
import styled from 'styled-components'
import Transfer from './Transfer';


const TransferModal = () => {
    const [action, setAction] = useState('send')

    const selectedStyle = {
        color: '#3773f5'
    }

    const unselectedStyle = {
        border: '1px solid #282b2f'
    }

    const selectedModal = (option) => {
        switch (option) {
            case 'send':
                return <Transfer />
            case 'recieve':
                return <h2>recieve</h2>
            default:
                return <h2>send</h2>
        }
    }

    return (
        <Wrapper>
            <Selector>
                <Option style={action === 'send' ? selectedStyle : unselectedStyle} onClick={() => setAction('send')}>
                    <p>Send</p>
                </Option>

                <Option style={action === 'recieve' ? selectedStyle : unselectedStyle} onClick={() => setAction('recieve')} >
                    <p>Recieve</p>
                </Option>
            </Selector>
            <ModalMain>
                {selectedModal(action)}
            </ModalMain>
        </Wrapper >
    );
};

export default TransferModal;

const Wrapper = styled.div`
    height: 35rem;
    width: 27rem;
    color: white;
    border: 1px solid #282b2f;
    display: flex;
    flex-direction: column;
`

const Selector = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
`

const Option = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover{
        cursor: pointer;
        background-color: #111214;
    }
`

const ModalMain = styled.div`
    padding: 1rem;
    flex: 1; 
`