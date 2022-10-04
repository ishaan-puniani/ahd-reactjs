import FAQ from "../components/accordion";
import questions from "../seeds/questions";
export default {
    title: 'Accordion',
    component: FAQ,
}

export const example = () => <FAQ data={questions}/>