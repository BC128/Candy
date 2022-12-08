export const logger_level = [
    "NOERR",
    "log",
    "info",
    "warn",
    "error",
    "crital errror",
];
export function logger(level, data) {
    console.log(`[DATE:${Date.now().toString()}] [LEVEL:${logger_level[level]}] [ERROR_LEVEL:${logger_level[level]}] `);
}
//# sourceMappingURL=_log.server.js.map