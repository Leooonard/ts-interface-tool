"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_simple_ast_1 = require("ts-simple-ast");
const Path = require("path");
const Log = require("../util/log");
function removeNullable(tsFilePath) {
    try {
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new ts_simple_ast_1.default({
            compilerOptions: {
                strictNullChecks: true
            }
        });
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        const interfaces = sourceFile.getInterfaces();
        interfaces.forEach((interfaceItem) => {
            interfaceItem.getProperties().forEach((property) => {
                if (property.getType().isNullable()) {
                    property.setType(property.getType().getNonNullableType().getText());
                }
            });
        });
        sourceFile.saveSync();
        Log.fatal('removeNullable成功');
    }
    catch (e) {
        const err = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('removeNullable失败');
    }
}
exports.default = removeNullable;
