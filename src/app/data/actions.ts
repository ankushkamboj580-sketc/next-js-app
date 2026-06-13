'use server'

export const getPresidents = async () => {
    try {
        const rawData = await fetch('https://api.sampleapis.com/presidents/presidents');
        const response = await rawData.json();
        return response;
    } catch (error) {
        return [];
    }
}