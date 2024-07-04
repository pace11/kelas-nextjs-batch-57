/* eslint-disable no-useless-catch */
export const fetchingData = async ({ url = '', method = 'GET'}) => {
    try {
        const response = await fetch(url, { method})
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}


export const mutationData = async ({ url = '', method = 'POST', payload = {}}) => {
    try {
        const response = await fetch(url, { method, body: payload})
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

