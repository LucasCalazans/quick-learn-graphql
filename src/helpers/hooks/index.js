import { useState, useEffect, useRef } from 'react';

export const useFocusOnMount = () => {
    const ref = useRef();
    useEffect(() => ref.current && ref.current.focus(), []);
    return ref;
};

export const useDropdown = (initial = false) => {
    const [active, setActive] = useState(initial);
    const toggleDropdown = (value = !active) => {
        setActive(active === value ? false : value);
        return value;
    };

    return [active, toggleDropdown];
};
