import * as v8 from 'v8';
import * as vm from 'vm'
import * as path from 'path'
import * as os from 'os'
import * as assert from 'assert'
import * as buffer from 'buffer'
import * as crypto from 'crypto'
import * as fs from 'fs'
import * as process from 'node:process'
import * as wasi from 'node:wasi'
import * as process from 'node:process'
import * as child_process from "node:child_process"
import * as cluster from "node:cluster"
import * as console from "node:console"
const libs={
    v8:v8,vm,path,os,assert,buffer,crypto,fs,process,wasi,child_process,cluster,console
}
libs.
export libs