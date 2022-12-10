"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.node_imp = void 0;
const v8 = __importStar(require("v8"));
const vm = __importStar(require("vm"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const assert = __importStar(require("assert"));
const buffer = __importStar(require("buffer"));
const crypto = __importStar(require("crypto"));
const fs = __importStar(require("fs"));
const process = __importStar(require("node:process"));
const wasi = __importStar(require("node:wasi"));
const process = __importStar(require("node:process"));
const child_process = __importStar(require("node:child_process"));
const cluster = __importStar(require("node:cluster"));
const console = __importStar(require("node:console"));
const constants = __importStar(require("node:constants"));
const dgram = __importStar(require("node:dgram"));
const diagnostics_channel = __importStar(require("node:diagnostics_channel"));
const dns = __importStar(require("node:dns"));
const domain = __importStar(require("node:domain"));
const events = __importStar(require("node:events"));
const http = __importStar(require("node:http"));
const http2 = __importStar(require("node:http2"));
const https = __importStar(require("node:https"));
const inspector = __importStar(require("node:inspector"));
const module = __importStar(require("node:module"));
const net = __importStar(require("node:net"));
const path = __importStar(require("node:os"));
const querystring = __importStar(require("node:querystring"));
const readline = __importStar(require("node:readline"));
const repl = __importStar(require("node:repl"));
const stream = __importStar(require("node:stream"));
const test = __importStar(require("node:test"));
const timers = __importStar(require("node:timers"));
const tls = __importStar(require("node:tls"));
const trace_events = __importStar(require("node:trace_events"));
const tty = __importStar(require("node:tty"));
const url = __importStar(require("node:url"));
const util = __importStar(require("node:util"));
const worker_threads = __importStar(require("node:worker_threads"));
const zlib = __importStar(require("node:zlib"));
const node_IMPORT = {
    v8,
    vm,
    path,
    os,
    assert,
    buffer,
    crypto,
    fs,
    process,
    wasi,
    child_process,
    cluster,
    console,
    constants,
    dgram,
    diagnostics_channel,
    dns,
    domain,
    events,
    http,
    http2,
    https,
    inspector,
    module,
    net,
    path,
    querystring,
    readline,
    repl,
    stream,
    test,
    timers,
    tls,
    trace_events,
    tty,
    url,
    util,
    worker_threads,
    zlib,
};
exports.node_imp = node_IMPORT;
