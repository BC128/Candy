export const base64 = {
    encode(data:string){
        return btoa(data)
    },
    decode(data:string){
        return atob(data)
    }
}