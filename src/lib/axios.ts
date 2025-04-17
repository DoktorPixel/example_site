import axios from 'axios'

export const baseURL = import.meta.env.DEV ? 'https://devwalletapi.xpaid.org/api/v1' : 'https://stagewalletapi.xpaid.org/api/v1'

export const api = axios.create({
  baseURL,
})