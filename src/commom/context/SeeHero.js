import { createContext, useState, useEffect} from 'react';
import { meuHeroi } from '../../api/api';

export const SeeHeroContext = createContext();
SeeHeroContext.displayName = 'VerHeroiPrincipal'

export const SeeHeroProvider = ({ children }) => {
    const [heroi, setHeroi] = useState({});
    const [id, setId] = useState('');

    useEffect(() => {
        meuHeroi(setHeroi, id);
      }, [id]);

    return (
        <SeeHeroContext.Provider value={{heroi, setHeroi, id, setId}}>
            {children}
        </SeeHeroContext.Provider>
    )
}