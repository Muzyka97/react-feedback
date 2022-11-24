import PropTypes from 'prop-types';
import styled from 'styled-components'

const List = styled.ul`
    display: flex;
    padding: 0px;
`;
const Items = styled.li`
    list-style: none;
    margin-right: ${p=>p.theme.space[3]}px;
    :last-child{
        margin-right: 0px
    };
`;
const Btn = styled.button`
    background-color: ${p=>p.theme.colors.btn}
`

const FeedbackOptions = ({onHandleClick, options=[]}) =>{
    const elements = options.map((option,index)=>(
        <Items key={index}><Btn onClick={()=>onHandleClick(option)}>{option}</Btn></Items>
    ));
    return(
        <List>
            {elements}
        </List>
    )
};
FeedbackOptions.propTypes= {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onHandleClick: PropTypes.func.isRequired
}
export default FeedbackOptions;