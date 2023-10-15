export const NEWQOUTE = 'NEWQOUTE'; 
export const SETQUOTES = 'SETQUOTES'; 

export const newQoute = () => {
    return {
        type:NEWQOUTE
    };
};

export const setQoutes = (qoutes) => {
    return {
        type:SETQUOTES,
        qoutes
    };
};