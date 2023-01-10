import { api } from "../api";

const getEnergeticSongs = async () =>{
    const res = await api.get("trackarousal=900000")
    return res.data;
}

const getRevoltedSongs = async () =>{
    const res = await api.get("trackvalence=330000")
    return res.data;
}

const getCalmSongs = async () =>{
    const res = await api.get("trackarousal=100000")
    return res.data;
}

const getFeelingGoodSongs = async () =>{
    const res = await api.get("trackvalence=900000")
    return res.data;
}

export {getCalmSongs, getFeelingGoodSongs, getEnergeticSongs, getRevoltedSongs};