"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_simple_ast_1 = require("ts-simple-ast");
const Path = require("path");
const Log = require("../util/log");
function ignoreSemicolonError(tsFilePath) {
    try {
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new ts_simple_ast_1.default();
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        sourceFile.insertText(0, '// tslint:disable semi\n\n');
        sourceFile.saveSync();
        Log.fatal('添加分号成功');
    }
    catch (e) {
        const err = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('添加分号失败');
    }
}
exports.default = ignoreSemicolonError;
function hasTslintDisable() {
}
