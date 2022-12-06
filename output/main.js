function scale(scale_type, scale_value) {
    let var_scale_x = scale_type.x * scale_value;
    let var_scale_y = scale_type.y * scale_value;
    let var_scale_z = scale_type.z * scale_value;
    return { x: var_scale_x, y: var_scale_y, z: var_scale_z };
}
scale({ x: 1, y: 2, z: 3 }, 2);
function Vec3(Vec3_type) {
    let var_vec3_x = Vec3_type.x;
    let var_vec3_y = Vec3_type.y;
    let var_vec3_z = Vec3_type.z;
    return { x: var_vec3_x, y: var_vec3_y, z: var_vec3_z };
}
function Vec2(Vec2_type) {
    let var_vec3_x = Vec2_type.x;
    let var_vec3_y = Vec2_type.y;
    return { x: var_vec3_x, y: var_vec3_y };
}
console.log(Vec3({
    x: 2,
    y: 4,
    z: 4
}), Vec2({ x: 2, y: 2 }));
export {};
//# sourceMappingURL=main.js.map