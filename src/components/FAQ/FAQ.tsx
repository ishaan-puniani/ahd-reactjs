import React, { useState, useEffect } from 'react';
import FaqService from '../../services/faq/faqService';
import { FaqStyle } from './FAQ.styled';
import Question from './Question';
import Searchbar from './Searchbar';

export interface IFaqProps {
    slug?: string;
}

const FAQ: React.FC<IFaqProps> = ({ slug }: IFaqProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Array<any>>([]);
    const [questions, setQuestions] = useState<Array<any>>([]);

    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const fetchFAQs = async () => {
        const response = await FaqService.listAll(null, null, null, null);
        setQuestions(response.rows);
    };

    useEffect(() => {
        fetchFAQs();

        const results = questions.filter((item) => item.question.toLowerCase().includes(searchTerm));
        setSearchResults(results);
    }, [searchTerm, questions]);

    return (
        <FaqStyle>
            <div className="container">
                <h2 className="heading">How can we help you?</h2>
                <Searchbar onSearchChange={handleSearchChange} />
                <section className="faq">
                    {searchResults.map((item) => (
                        <Question
                            key={item.id}
                            question={item.question}
                            title={item.content.title}
                            content={item.content.content}
                            id={item.id}
                        />
                    ))}
                </section>
            </div>
        </FaqStyle>
    );
};

export default FAQ;
