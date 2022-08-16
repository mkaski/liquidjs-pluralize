
function liquidjsPluralize(Liquid) {
    this.registerFilter('pluralize', (n, singular, plural) => pluralize(n, singular, plural));
}

function pluralize(n, singular, plural = null) {
    const num = Number(n);
    if (num === 1) {
        return singular;
    } else if (plural === null) {
        return `${singular}s`;
    } else {
        return plural;
    }
}

export default liquidjsPluralize;