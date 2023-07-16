import axios from "axios"

const baseURL = "http://localhost:8080/api/note-cards/"

export const api = axios.create({ baseURL: baseURL })