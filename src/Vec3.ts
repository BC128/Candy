import {Vec3_type} from './Vec3_type.js';   
export function Vec3(Vec3_type:{x:number,y:number,z:number}){
    let var_vec3_x = Vec3_type.x 
    let var_vec3_y = Vec3_type.y
    let var_vec3_z = Vec3_type.z
    return {x:var_vec3_x, y:var_vec3_y, z:var_vec3_z}
}