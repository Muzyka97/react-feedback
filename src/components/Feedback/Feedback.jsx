// import React,{Component} from "react";
import {useState} from 'react'
import Statistic from "components/Statistic";
import Sections from 'components/Sections';
import FeedbackOptions from "./FeedbackOptions";
import Notification from "components/Notification";
import {Box} from '../Box/Box'

const options = [ "good", "neutral", "bad"];
                 
const Feedback =()=>{

    const [state, setState]= useState({good:0, neutral:0, bad:0});
    
    const handleFeedback = propertyName => {
        setState(prevState =>{
        return {
            ...prevState, [propertyName]: prevState[propertyName] +1}
        })
    };

    const countTotalFeedback = ()=>{
        const {good, neutral, bad}= state;
        return good + neutral + bad
    };

    const countPositiveFeedbackPercentage = () =>{
        const percentage = (state.good / total) * 100
        return Math.floor(percentage * 100 / 100)
    };

    const total = countTotalFeedback();
    const percentage = countPositiveFeedbackPercentage();

    const { good, neutral, bad } = state;
    return(
            <Box
            border={'normal'}
            ml='20px'
            mt='20px'
            >
                <Box
                paddingLeft='40px'
                paddingRight='40px'
                paddingTop='40px'
                paddingBottom="20px"
                textAlign="center"
                justifyContent= "center"
                >
                    <Sections title="Please leave feedback">
                        <FeedbackOptions
                        onHandleClick={handleFeedback}
                        options={options}
                        />
                    </Sections>
                </Box>
                <Box
                paddingLeft='40px'
                paddingRight='40px'
                paddingTop='20px'
                paddingBottom="40px"
                textAlign="center"
                >
                    <Sections title="Statistics">
                        {!total && <Notification message="There is no feedback" />}
                        {total > 0 && (
                            <Statistic             
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            percentage = {percentage}
                            />
                        )}
                    </Sections>
                </Box>
            </Box>
    );
};
export default Feedback;

// class Feedback extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };
//     handleFeedback = items => {
//         this.setState(prevState =>{
//         return {
//             [items]: prevState[items] +1}
//         })
//     };

//     countTotalFeedback(){
//         const {good, neutral, bad}= this.state;
//         return good + neutral + bad
//     };

//     countPositiveFeedbackPercentage(){
//         const total = this.countTotalFeedback();
//         const percentage = (this.state.good / total) * 100
//         return Math.floor(percentage * 100 / 100)
//     };

//     render(){
//         const { good, neutral, bad } = this.state;
//         const { handleFeedback } = this;

//         const total = this.countTotalFeedback();
//         const percentage = this.countPositiveFeedbackPercentage();

//         return (
//             <Box
//             border={'normal'}
//             ml='20px'
//             mt='20px'
//             >
//                 <Box
//                 paddingLeft='40px'
//                 paddingRight='40px'
//                 paddingTop='40px'
//                 paddingBottom="20px"
//                 textAlign="center"
//                 justifyContent= "center"
//                 >
//                     <Sections title="Please leave feedback">
//                         <FeedbackOptions
//                         onHandleClick={handleFeedback}
//                         options={['good', 'neutral', 'bad']}
//                         />
//                     </Sections>
//                 </Box>
//                 <Box
//                 paddingLeft='40px'
//                 paddingRight='40px'
//                 paddingTop='20px'
//                 paddingBottom="40px"
//                 textAlign="center"
//                 >
//                     <Sections title="Statistics">
//                         {!total && <Notification message="There is no feedback" />}
//                         {total > 0 && (
//                             <Statistic             
//                             good={good}
//                             neutral={neutral}
//                             bad={bad}
//                             total={total}
//                             percentage = {percentage}
//                             />
//                         )}
//                     </Sections>
//                 </Box>
//             </Box>
//         )
//     };
// };
// export default Feedback;