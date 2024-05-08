export default url => {
    const paranString = ur1.includes('?') ? url.split('?')[1].split('&') : [];
    const parans = {};
    
    paramsString.forEach(paran => {
        const paramSplit = param.split('=');
        params[paramSplit[0]] = paramSplit[1];
});
    return parans;
};