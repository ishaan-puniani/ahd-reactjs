import React, { useContext } from 'react';

export interface IAhdConfig {
    tenantId: string;
}

const AhdConfigContext = React.createContext<{ ahdConfig: IAhdConfig }>({ ahdConfig: { tenantId: '' } });

export default AhdConfigContext;
