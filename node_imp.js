import * as v8 from "v8";
import * as vm from "vm";
import * as os from "os";
import * as assert from "assert";
import * as buffer from "buffer";
import * as crypto from "crypto";
import * as fs from "fs";
import * as process from "process";
import * as  punycode from "punycode";
import * as child_process from "child_process";
import * as cluster from "cluster";
import * as console from "console";
import * as constants from "constants";
import * as dgram from "dgram";
import * as diagnostics_channel from "diagnostics_channel";
import * as dns from "dns";
import * as domain from "domain";
import * as events from "events";
import * as http from "http";
import * as http2 from "http2";
import * as https from "https";
import * as inspector from "inspector";
import * as module from "module";
import * as net from "net";
import * as path from "path";
import * as querystring from "querystring";
import * as readline from "readline";
import * as repl from "repl";
import * as stream from "stream";
//import * as test from "test";
import * as timers from "timers";
import * as tls from "tls";
import * as trace_events from "trace_events";
import * as tty from "tty";
import * as url from "url";
import * as util from "util";
import * as worker_threads from "worker_threads";
import * as zlib from "zlib";
//import * as wasi from 'wasi'

export const node_IMPORT = {
  v8,
  vm,
  path,
  os,
  assert,
  buffer,
  crypto,
  fs,
  process,
 // wasi,
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
  //test,
  timers,
  tls,
  trace_events,
  tty,
  url,
  util,
  worker_threads,
  zlib,
  punycode
};

