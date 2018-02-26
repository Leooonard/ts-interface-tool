"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_simple_ast_1 = require("ts-simple-ast");
const Path = require("path");
const Log = require("../util/log");
function format(tsFilePath) {
    try {
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new ts_simple_ast_1.default();
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        const interfaces = sourceFile.getInterfaces();
        interfaces.forEach((interfaceItem) => {
            const properties = interfaceItem.getProperties();
            properties.forEach((property) => {
                const jsDocs = property.getJsDocs();
                jsDocs.forEach((jsDoc) => {
                    jsDoc.formatText();
                });
            });
        });
        sourceFile.saveSync();
        Log.fatal('format成功');
    }
    catch (e) {
        const err = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('format失败');
    }
}
exports.default = format;
