import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #e4c2c6;
    border-radius: 7px;
    padding: 5px;
    box-sizing: border-box;
`;

const Li = styled.li`
    margin: 1rem 0;
`;

function QuestionInput(props) {
    const {
        order,
        firstQuestion,
        secondQuestion,
        thirdQuestion,
        handleFirstQuestion,
        handleSecondQuestion,
        handleThirdQuestion,
    } = props;

    return (
        <Li>
            <Input
                type="text"
                onChange={(e) => {
                    switch (order) {
                        case 2:
                            return handleSecondQuestion(e.target.value);
                            break;
                        case 3:
                            return handleThirdQuestion(e.target.value);
                            break;
                        default:
                            return handleFirstQuestion(e.target.value);
                    }
                }}
                placeholder={`Q${order} Would you rather...`}
                maxLength="140"
            />
        </Li>
    );
}

export default QuestionInput;
