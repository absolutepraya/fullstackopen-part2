import axios from 'axios'
const baseUrl = '/api/persons'

// get all persons from the database
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// add person to the database
const add = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

// change the number of the person in the database
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

// remove person from the database
const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
}

export default { getAll, add, update, remove }