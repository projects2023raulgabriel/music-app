import axios from 'axios';

export const api = axios.create({baseURL: import.meta.env.VITE_MUSICOVERY_API})

export const musicStoryApi = axios.create({baseURL: import.meta.env.VITE_MUSIC_STORY_API});