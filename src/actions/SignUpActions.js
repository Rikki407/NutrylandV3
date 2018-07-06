export const changeFnText = text => {
    return {
        type: 'first_name_changed',
        payload: text
    };
};

export const changeLnText = text => {
    return {
        type: 'last_name_changed',
        payload: text
    };
};
