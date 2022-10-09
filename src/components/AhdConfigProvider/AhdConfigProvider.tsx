import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AhdConfigContext, { IAhdConfig } from './AhdConfigContext';

export const useAhdConfig = () => {
    return useContext(AhdConfigContext);
};

interface IAhdConfigProviderProps {
    children: React.ReactNode;
    ahdConfig: IAhdConfig;
}

const AhdConfigProvider: React.FC<IAhdConfigProviderProps> = ({ children, ahdConfig }: IAhdConfigProviderProps) => {
    return <AhdConfigContext.Provider value={{ ahdConfig }}>{children}</AhdConfigContext.Provider>;
};

AhdConfigProvider.propTypes = {
    children: PropTypes.node.isRequired,
    ahdConfig: PropTypes.any.isRequired,
};

export default AhdConfigProvider;
