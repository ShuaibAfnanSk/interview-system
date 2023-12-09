import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Slider = styled.form`
    transform: translatex(${props => props.slider * -100}vw);
`

const Test = () => {

    const id = location.pathname.split("/")[2];
    const [one, setOne] = useState();
    const [two, setTwo] = useState();
    const [three, setThree] = useState();
    const [four, setFour] = useState();
    const [five, setFive] = useState();
    const [questions, setQuestions] = useState([]);
    const [slider, setSlider] = useState(0);
    const [duration, setDuration] = useState();
    const [answers, setAnswers] = useState(Array(5).fill(''));
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/server/test/" + id)
            .then(result => {
                console.log(result)
                setOne(result.data.questionOne)
                setTwo(result.data.questionTwo)
                setThree(result.data.questionThree)
                setFour(result.data.questionFour)
                setFive(result.data.questionFive)
                setDuration(result.data.duration)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleClick = (action) => {
        if (action === "previous") {
            setSlider(slider > 0 ? slider - 1 : 0)
        } else {
            setSlider(slider < 4 ? slider + 1 : 4)
        }
    }

    const handleSelect = (index) => {
        setSlider(index)
    }

    const disabledClass = 'disabled';

    useEffect(() => {
        const questionArray = [one, two, three, four, five]
        setQuestions(questionArray)
    }, [one, two, three, four, five])

    const handleAnswerArray = (index, value, event) => {
        event.preventDefault();
        const updatedValues = [...answers];
        updatedValues[index] = value;
        setAnswers(updatedValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/server/answerFetch/sendAnswers", { answers })
            .then(result => {
                console.log(result)
                navigate('/feedback')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                const message = "You are not allowed to change tabs if pressed ok test will get submitted.";
                alert(message);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div className="wrapper sliderWrapper">
            <Slider onSubmit={handleSubmit} className="slider" slider={slider}>
                {questions.map((q, index) => (
                    <div className="slide" key={index}>
                        <div className="slideBx">
                            <div className="slideTxt">
                                <p>{q}</p>
                                <textarea name="" placeholder="Enter your answer" onChange={(e) => handleAnswerArray(index, e.target.value, e)} value={answers[index]} id="" cols="30" rows="10" />
                            </div>
                            <div className="slideBtns">
                                <span onClick={() => handleClick("previous")} className={slider === 0 ? disabledClass : ''}>previous</span>
                                <span onClick={() => handleClick("next")} className={slider === 4 ? disabledClass : ''}>next</span>
                            </div>
                        </div>
                        <div className="slideBx slideBxAlt">
                            <div className="slideNav">
                                {questions.map((q, index) => (
                                    <span key={index} onClick={() => handleSelect(index)}>{index + 1}</span>
                                ))}
                            </div>
                            {slider === 4 ? <button type="submit">submit</button> : ""}
                        </div>
                    </div>
                ))}
            </Slider>
        </div >

    );
}

export default Test;