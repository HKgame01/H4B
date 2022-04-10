import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import funfacts from "./Funfacts";

const theme = {
    background: "#F4F5F6",
    fontFamily: "sans-serif",
    headerBgColor: "#03719C",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#03719C",
    botFontColor: "#fff",
    userBubbleColor: "#03719C",
    userFontColor: "#fff",
};

const steps = [
    {
        id: "1",
        message: "Hey! I am Curie a bot, how are you feeling today",
        trigger: "expressions",
    },
    {
        id: "expressions",
        options: [
            { value: "veryHappy", label: "😀", trigger: "veryHappy" },
            { value: "happy", label: "🙂", trigger: "happy" },
            { value: "normal", label: "😐", trigger: "normal" },
            { value: "sad", label: "☹️", trigger: "sad" },
            { value: "angry", label: "😡", trigger: "angry" },
        ],
    },
    {
        id: "veryHappy",
        message: "Great Me too 😍",
        trigger: "help",
    },
    {
        id: "happy",
        message:
            "Hmm, Looks Like You are in good mood. Well I can make it great 😊",
        trigger: "help",
    },
    {
        id: "normal",
        message:
            "Ooh, Are You Confused Sir ? Don't Worry I am here to Assist You 👻",
        trigger: "help",
    },
    {
        id: "sad",
        message:
            "I am sorry to here that 😟 . Well i would suggest to play with our AR models. You will feel better.🙂",
        trigger: "help",
    },
    {
        id: "angry",
        message:
            "😐 Oops, Did i do something wrong....But wait i am a bot i can't do that..🤥.  Well i suggest you to relax your mind, play some games,  watch some movies  and eat a lot of healthy tasty food just like me..😝",
        trigger: "help",
    },
    {
        id: "help",
        message: "How can I help you?",
        trigger: "options",
    },
    {
        id: "options",
        options: [
            { value: "services", label: "Services", trigger: "services" },
            {
                value: "funFact",
                label: "Give a random funfact",
                trigger: "funFact",
            },
            { value: "exit", label: "Exit", trigger: "end" },
        ],
    },
    {
        id: "services",
        message: "select one of these services",
        trigger: "selectServices",
    },
    {
        id: "selectServices",
        options: [
            { value: "Home", label: "Home", trigger: "selectedService" },
            { value: "Doctors", label: "Doctors", trigger: "selectedService" },
            { value: "Chatroom", label: "Chatroom", trigger: "selectedService" },
            { value: "Mini sessions", label: "Mini sessions", trigger: "selectedService" },
            { value: "goBack", label: "go back", trigger: "options" },
        ],
    },
    {
        id: "selectedService",
        message: "opened {previousValue}",
        trigger: "end",
    },
    {
        id: "moreHelp",
        message: "do you meed more help?",
        trigger: "moreHelp-yes",
    },
    {
        id: "moreHelp-yes",
        options: [
            { value: "yes", label: "Yes", trigger: "help" },
            { value: "no", label: "No", trigger: "end" },
        ],
    },
    {
        id: "funFact",
        component: <FunFact />,
        asMessage: true,
        trigger: "moreHelp",
    },
    {
        id: "end",
        message: "Thank you, see you again!",
        end: true,
    },
];

function FunFact() {
    const randInt = Math.floor(Math.random() * 14);
    return <div>{funfacts[randInt]}</div>;
}

function Chatbot() {
    const [opened, setOpened] = useState(false);
    const [key, setKey] = useState(Math.random());
    const navigate = useNavigate()

    const handleEnd = ({ steps, values }) => {
        switch (values[values.length - 1]) {
            case "Home":
                navigate({ pathname: '/' })
                break;
            case "Doctors":
                navigate({ pathname: '/doctors' })
                break;
            case "Chatroom":
                navigate({ pathname: '/chatroom' })
                break;
            default:
                break;
        }
        setTimeout(() => {
            setKey(Math.random());
            setOpened(false);
        }, 1000);
    };

    return (
        <div className="chatbot">
            <ThemeProvider theme={theme}>
                <ChatBot
                    key={key}
                    steps={steps}
                    handleEnd={handleEnd}
                    opened={opened}
                    headerTitle="Curie"
                    botAvatar={"data:image/webp;base64,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"}
                    avatarStyle={{ borderRadius: "100%" }}
                    floating={true}
                    floatingIcon={
                        <img
                            src={"data:image/webp;base64,UklGRqwJAABXRUJQVlA4IKAJAAAwPgCdASr6AMoAPpFAnEklo6MhKZFbuLASCWNu3V0J9Nc33oHvY+iDeLd6EyEnyl/fu37/XZJcBF9wv33DnwAvYe7TwU0n2gB/Kv8Z6Df0r6FfpP0fPRz9fv7QexR+uh+gRwyt814ucWncqAJ7EXpAlOUvL2eKMEEfvDgGpJQJZ93OuZth4nvg5rbCPfHBA0i6GQKdvPP4kgKQgeFs5qSQXWxHcem5YOCr7LirrrKng6s7Wagvd9SocJ8ZDwX4uXHnIsDN5NoD0LLbHdLMiDys8qedRGPLIh1TF7i8yW1P7x0kEh5DD0c+XwW9e5MZAK+mwqjSpoMAhC+qM+zZj6nt8LDlhdFPD3OtKiuttMk1g+RP4sYnI55izo5QzKBgRnsK9fXLSuiud9sHqx+e8H7sOw5nEfPuqqG06wBdRlKAeqBbiRX+Vkut9ig60il2OLsbCbbKcbzbG/lgHKLAiJb8+YD2piavxUHDbntmXXgtn5ytKJgvD/KWcQ2m6XCr7q2zWnF6yvKuqhpOa03F/mCsbfzoNdVMBHoW9AlF3AepJBLAKmoIWRFJO4zhWIsR3VDUEgoFxQ53xPv9hUYJeV15twQR/BLqakD0Z/j8JVNSSODGZzgWv66PMyFrj0MjT1SQNV9SUsY2xos7x6pIGwuL0Ni9i2FxehsHwAD++m8BYdWnn7YZlrPNiJGvQIY7FoZQ2f4/S+ZVKjkLb34ZYeOhJ9ciWtJh9/zdldwwpIF3ltP3iFk6n652T9OtDjCt54XDu4nqwxq86hqWv4Ou5ulkEVLQx71ytvOwPG6iF4np16cjzS1ibAzuGCc/FIXdyjf58yN7PhRCSi+spYhkaDKRoitsBpviBKzKnBcVvg9otCCKrKAZzIvJFhz/gmChyhYMACA8RucS10yVcGG7cqZC5yxe1o0GG6+GeMHVdbhZCG9xWNqx0fyax/v5NArHUoY3k1D1ILncmb1B4KPNaf+yZ//QDf4JiylQxHiOb/stmfC5ktLXYdv8ebSX3F1Zar9P+sfUYjMbXTc0/lqoq3WZ0mzP36EHCZ47iukdU5KM44lHKQmSAqsYFA+MdW+ymG0k0muZF7WtIEy63Tod9IlgI/g/5JgT2ghJkAlBAhIYtoBDM3o+yXtzyL9rQXm0AOYLGuzz7R3pIA9xaWmbiuU9fJb/99+R7T180Q7ItwQCOO3dAVmrqokipxRmhO+dYfIcM32zy/l7XvnIOU3Hv2cNeGy2y/VSpQwWADRlwE7aDvBwSTa8EOh/swmqZ+sVov+zELd91pyu/wBkpucqMlQwZni8vIRN4LDOrTs7wwb1mIKInF3j84mPc3PF/bIMdSlyODPIRDzLH1fwlKrZS4IQBzA1k8qztkNPl5pWH/QdwSC/oc//15/rlvKPIdTxcfbrRFWwY/SAWJLgna6Wij4EVuu+1YR/QeKWPYLNQMxN7japfTCWCX49WYM6J/Gfsg5a59d3Xsl+MvbzNz3FFhGQsnOTmEbLJEfSohiNH63JwUarpGDsW83x6w8KGzvs+bP7ueY9EDApSNgXQjV6JsaW1HcRL1mlOOuOXuz8nUTjxhgmDQ4/c59ldIRQxGYn4e22KnP1h42oAGiWNrQX/cILx+3IW4v94duCs05CaY7mDZna1ODl+KosZf+bMbKGoNNhf++clojfgHusfRYUpm1WSTzS0yDObEWatvmbtNMeMq42otq75qt46qzIfCCXEThvd2iAGILeyWyZYdNnFTZq8OE0r/CFv+HW+M4BQWV2+Du+XfNaiuYen3/GOujTHmKh0BmqzlHINNgUEHlqHFeY7l4NVp+pkOJgCU6HvqpA+XsT/hxaihn0tAERe6TPxTidrFv2fh3Ic1hEivyM+XDypSVwbRRGrPse4Evf5FQ//Bk8PbOYcOIWRLbg19Hu0bXJUdx62nsmWhP6v2o/eUKwxRo47uBVIZyo8ONYDNFdJLzScup3B1efl7KwK7sEaomwsQlh3nVOdaIrX1f3Onhv9LQo+emUTeEjLL4VEXn8TzvAR4yu6X1eckRoxsIA52lYXjwlVYEexoF3nKv+2BfKdBJ/TCZcY+9bMAGnUo+EhOkU4TUOZ+ztUwuNC1+hWlEugAEwrS12a+H1RQyQT6nlI1VndMxhCe1I8J8bXfrTcJqAokn0p/4Y69w2P88fQ7br9Pol+yg/1gFu8Qh2a1AgHPi25X3pPtvagR5vHbZye6GMBwBVi9CR0MzaE0BwNjdM4YhoIascm6pA/sXlHR/bTGCgp17+syjV0djhFt3fPrPDBMYsM0M3qj/908taaUy5EJQkjZNKmF5tTReMj1EayOrnHrSjK+P4IaFrBaV3LhkubKFdex2UXIiXaHAYdcsEKIYFLz6tEzjC6tKXUKcYfYX4yOR0t2FmW++GMashL2ForhfoWX6Ld59/tw9j81yU/unqaP4pyydtlogQRStQ0L/0pUh8SNgs1hfePLwR0Zml8za8EVr9NmA/ITpWrpM+o0oH889BVmrfF/pdxR9oauX1TuS29DP9gcNIaG2to7Gwz7w3cYQg4K7QAkyA1gQzxeQkn03RssylPt2v1cGii2Y518KauFmZ5+3BkQKOwmSsuXbfH/R77464slDK5JPC/NhrhMyx7wbqAvKMz6+X9HBQfqwSe1PH1yLNRCKwAPjioaBW23wZahgRkdii5PLTyoijBIGCF50RdEXRFw+NRu1/xKIt1sv64QnRTmGSGwsTyh0tF3YymaVRueQ3QV1GIRdzQMF8FCfaeDJpQ0NUSNIBo2HIANERttnweEbFK76FiMETHQmlXxZMIvsLJFfPY7wusIovR1/8opS3L5Q0asU4Ye0rZVzHzaH74kQ37kO/3uIgj2qvJnGTp1O6Wzj9F67BB6zsNPXr9jnHW9PdkGNJRDyfd4PB4EEybwUvqBs1FN8QD+CJUpX+UgCfgnIA35KEUC1C9KsFJRl3pWUkQn4s9I8S/ACqTU0JQSjRnAhhMg3FEiAZwCdxaemyf2+sx4QAHtBWVzURwp0sFLjgF9VPAtXawJjAxUiAN2OeiCmZlUAf9yO7HMGGuiiofCphBewPOU2pssQ3wgIO9zzRKGSJH9J+c/489q118Q3/5QDomxGHyDn8hR3g7hQOiFyyUkfYtbV7GdDpnnN9Jn4a8k4bbJPqd/DzzdJ8fcppRuospdheATiTExmL3BRkucN3qTeJtAACP7eyHLy0zP9mZPR3qA0KwjkGCtYPwKJHFyRsmUThvjodPtW+ldehsEgYqCotwTEAAAAAAAAAAAAA"}
                            style={{ width: "70%" }}
                            alt="chatBot icon"
                        />
                    }
                    floatingStyle={{
                        backgroundColor: "#ffffff",
                        width: "60px",
                        boxShadow: "2px 2px 20px -8px #111",
                    }}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
