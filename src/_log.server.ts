export const logger_level = [
    "NOERR",
    "log",
    "info",
    "warn",
    "error",
    "crital errror",
]

    
export function logger(level:number, data:any){
    console.log(`[DATE:${Date.now().toString()}] [LEVEL:${logger_level[level]}] ${data} `)
}
