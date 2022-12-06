export type scale_type = {
    x:number
    y:number
    z:number
}
export function scale(scale_type:{x:number,y:number,z:number},scale_value:number){
    let var_scale_x = scale_type.x * scale_value
    let var_scale_y = scale_type.y * scale_value
    let var_scale_z = scale_type.z * scale_value
    return {x:var_scale_x, y:var_scale_y, z:var_scale_z}
}
scale({x:1,y:2,z:3},2)
export type Vec3_type ={
    x:number
    y:number
    z:number
}
export function Vec3(Vec3_type:{x:number,y:number,z:number}){
    let var_vec3_x = Vec3_type.x 
    let var_vec3_y = Vec3_type.y
    let var_vec3_z = Vec3_type.z
    return {x:var_vec3_x, y:var_vec3_y, z:var_vec3_z}
}


Vec3({
    x:2,
    y:4,
    z:4
})