const openTo = (url: string) => {
    return () => {
        url && window.open(url, '_blank');
    };
};

export default openTo;