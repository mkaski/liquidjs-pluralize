
export function liquidjsPluralize(Liquid) {
    this.registerFilter('pluralize', (n, singular plural) => pluralize(n, singular, plural));
}

function pluralize(n, singular, plural = null) {
    const num = Number(n);
    if (num === 1) {
        return `${num} ${singular}`;
    } else if (plural === null) {
        return `${num} ${singular}s`;
    } else {
        return `${num} ${plural}`;
    }
}