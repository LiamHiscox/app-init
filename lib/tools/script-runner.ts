import {PathHandler} from "./path-handler";
import {execSync} from "child_process";

export class ScriptRunner {
    static run = (script: string, dir: string = '') => {
        execSync(script, { stdio: 'inherit', cwd: PathHandler.fullPath(dir) });
    }
}
