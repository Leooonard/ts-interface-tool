"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_simple_ast_1 = require("ts-simple-ast");
const Path = require("path");
const Log = require("../util/log");
function ignoreTslintError(tsFilePath) {
    try {
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new ts_simple_ast_1.default();
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        sourceFile.insertText(0, '// tslint:disable jsdoc-format semicolon\n\n');
        sourceFile.saveSync();
        Log.fatal('忽略tslint错误成功');
    }
    catch (e) {
        const err = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('忽略tslint错误失败');
    }
}
exports.default = ignoreTslintError;
