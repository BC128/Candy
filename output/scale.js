export function scale(scale_type, scale_value) {
    let var_scale_x = scale_type.x * scale_value;
    let var_scale_y = scale_type.y * scale_value;
    let var_scale_z = scale_type.z * scale_value;
    return { x: var_scale_x, y: var_scale_y, z: var_scale_z };
}
//# sourceMappingURL=scale.js.map