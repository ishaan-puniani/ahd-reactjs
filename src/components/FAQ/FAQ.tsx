import React, { useState, useEffect } from 'react';
import FaqService from '../../services/faq/faqService';
import AhdConfigProvider, { useAhdConfig } from '../AhdConfigProvider/AhdConfigProvider';
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
    const { ahdConfig } = useAhdConfig();

    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const fetchFAQs = async () => {
        const response = await FaqService.listAll(ahdConfig, undefined, undefined, 100, 0);
        setQuestions(response.rows);
        setSearchResults(response.rows);
    };
    useEffect(() => {
        fetchFAQs();
    }, []);
    useEffect(() => {
        if (searchTerm && searchTerm.length > 2) {
            const results = questions.filter((item) => item.question.toLowerCase().includes(searchTerm));
            setSearchResults(results);
        }
    }, [searchTerm]);

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
