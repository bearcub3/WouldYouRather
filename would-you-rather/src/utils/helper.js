export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString('en-UK');
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

const regex = /[^=]*$/;
export const tokens = document.cookie.match(regex)[0];
