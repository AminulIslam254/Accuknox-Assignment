function generateUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = '';
    for (let i = 0; i < 10; i++) {
        uniqueId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    uniqueId += Date.now().toString();

    return uniqueId;
}

export {generateUniqueId}