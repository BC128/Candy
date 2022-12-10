import * as v8 from "v8";
import * as vm from "vm";
import * as path from "path";
import * as os from "os";
import * as assert from "assert";
import * as buffer from "buffer";
import * as crypto from "crypto";
import * as fs from "fs";
import * as process from "node:process";
import * as wasi from "node:wasi";
import * as process from "node:process";
import * as child_process from "node:child_process";
import * as cluster from "node:cluster";
import * as console from "node:console";
import * as constants from "node:constants";
import * as dgram from "node:dgram";
import * as diagnostics_channel from "node:diagnostics_channel";
import * as dns from "node:dns";
import * as domain from "node:domain";
import * as events from "node:events";
import * as http from "node:http";
import * as http2 from "node:http2";
import * as https from "node:https";
import * as inspector from "node:inspector";
import * as module from "node:module";
import * as net from "node:net";
import * as path from "node:os";
import * as querystring from "node:querystring";
import * as readline from "node:readline";
import * as repl from "node:repl";
import * as stream from "node:stream";
import * as test from "node:test";
import * as timers from "node:timers";
import * as tls from "node:tls";
import * as trace_events from "node:trace_events";
import * as tty from "node:tty";
import * as url from "node:url";
import * as util from "node:util";
import * as worker_threads from "node:worker_threads";
import * as zlib from "node:zlib";

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
export const node_imp = node_IMPORT