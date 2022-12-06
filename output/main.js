import { scale } from "./scale.js";
import { Vec3 } from "./Vec3.js";
function CreateVecTable() {
    console.log(Vec3({
        x: 4,
        y: 4,
        z: 4
    }));
    console.log(scale(Vec3({
        x: 2,
        y: 4,
        z: 4
    }), 8));
}
CreateVecTable();
//# sourceMappingURL=main.js.map