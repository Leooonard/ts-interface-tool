"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_simple_ast_1 = require("ts-simple-ast");
const Path = require("path");
const Log = require("../util/log");
function prefixInterface(tsFilePath, prefix) {
    try {
        const realPrefix = prefix || 'I';
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new ts_simple_ast_1.default();
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        const interfaces = sourceFile.getInterfaces();
        interfaces.forEach((interfaceItem) => {
            if (interfaceItem.getName()[0] !== realPrefix) {
                interfaceItem.rename(realPrefix + interfaceItem.getName());
            }
        });
        sourceFile.saveSync();
        Log.fatal('prefix成功');
    }
    catch (e) {
        const err = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('prefix失败');
    }
}
exports.default = prefixInterface;
