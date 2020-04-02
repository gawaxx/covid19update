// this is the file with all the API calls

export const APILINK = "https://covid19-server.chrismichael.now.sh/api/v1/"

export const GetAPI = (url) => fetch(url).then(res => res.json())

export const API = { GetAPI }