import { scale_type } from "./scale_type.js"

export function scale(scale_type:{x:number,y:number,z:number},scale_value:number){
    let var_scale_x = scale_type.x * scale_value
    let var_scale_y = scale_type.y * scale_value
    let var_scale_z = scale_type.z * scale_value
    return {x:var_scale_x, y:var_scale_y, z:var_scale_z}
}