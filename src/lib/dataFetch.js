export const TilesData = async () => {
    const res = await fetch(`https://tiles-gallery-server-0x61.onrender.com/tiles`)
    return await res.json()
}

export const TilesDetailsById = async (TilesId)=>{
    const res = await fetch(`https://tiles-gallery-server-0x61.onrender.com/tiles/${TilesId}`)
    return await res.json()
}