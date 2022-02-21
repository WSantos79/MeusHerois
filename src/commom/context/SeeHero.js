import { createContext, useState, useEffect, useRef} from 'react';
import { meuHeroi } from '../../api/api';

export const SeeHeroContext = createContext();
SeeHeroContext.displayName = 'VerHeroiPrincipal'

export const SeeHeroProvider = ({ children }) => {
    const isInitialMount = useRef(true);
    const [heroi, setHeroi] = useState({});
    const [id, setId] = useState('');

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
          } else {
            meuHeroi(setHeroi, id);
          }
        }, [id]);

    return (
        <SeeHeroContext.Provider value={{heroi, setHeroi, id, setId}}>
            {children}
        </SeeHeroContext.Provider>
    )
}