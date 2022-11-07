import PropTypes from 'prop-types';
import styled from 'styled-components'

const ListStatistic = styled.ul`
    padding: 0px;
`;
const ItemsStatistic = styled.li`
    list-style: none;
`;

const Statistic = ({good,neutral,bad,total,percentage}) =>{
    return(
        <div>
            <ListStatistic>
                <ItemsStatistic>Good: {good}</ItemsStatistic>
                <ItemsStatistic>Neutral: {neutral}</ItemsStatistic>
                <ItemsStatistic>Bad: {bad}</ItemsStatistic>
                <ItemsStatistic>Total: {total}</ItemsStatistic>
                <ItemsStatistic>Positive Feedback: {percentage}%</ItemsStatistic>
            </ListStatistic>
        </div>
    )
};
Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};
export default Statistic;