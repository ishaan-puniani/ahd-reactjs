import React, { useState } from 'react';

export interface IQuestionProps {
    id: string;
    question: string;
    title: string;
    content: string;
}

const Question: React.FC<IQuestionProps> = ({ id, question, title, content }: IQuestionProps) => {
    const [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive);
    };
    return (
        <div className="question-wrapper">
            <div className="question" id={id}>
                <h3>{question}</h3>
                <button onClick={() => handleClick()}>
                    <svg className={isActive ? 'active' : ''} viewBox="0 0 320 512" width="100">
                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                    </svg>
                </button>
            </div>
            <div className={isActive ? 'answer active' : 'answer'}>
                <h3>{title}</h3>
                {content}
            </div>
        </div>
    );
};

export default Question;
