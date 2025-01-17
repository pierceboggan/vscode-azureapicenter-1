import { defineConfig } from '@vscode/test-cli';
import * as semver from "semver";

import { readFileSync } from "fs";
const pkg = JSON.parse(readFileSync("./package.json"));
const vscodeVer = semver.minVersion(pkg.engines.vscode).version;

export default defineConfig({
    label: 'unitTests',
    files: 'out/test/unit/**/*.test.js',
    workspaceFolder: 'out/test',
    version: 'insiders',
    mocha: {
        ui: 'tdd',
        timeout: 20000
    },
    dependentExtensions: "ms-vscode.azure-account",
    launchArgs: [
        "--disable-extension",
        "vscode.git",
        "--disable-extension",
        "vscode.git-ui",
        "--disable-extension",
        "vscode.github",
        "--disable-extension",
        "vscode.github-authentication",
        "--disable-workspace-trust",
    ]
});
