"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_simple_ast_1 = require("ts-simple-ast");
const Path = require("path");
const Log = require("../util/log");
function camelCaseInterfaceAttribute(tsFilePath, useUpperCase) {
    try {
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new ts_simple_ast_1.default();
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        const interfaces = sourceFile.getInterfaces();
        interfaces.forEach((interfaceItem) => {
            interfaceItem.getProperties().forEach((property) => {
                property.rename(camelCase(property.getName(), useUpperCase));
            });
        });
        sourceFile.saveSync();
        Log.fatal('camelCase成功');
    }
    catch (e) {
        const err = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('camelCase失败');
    }
}
exports.default = camelCaseInterfaceAttribute;
function camelCase(str, useUpperCase) {
    let initialLetter = str[0];
    if (useUpperCase) {
        initialLetter = initialLetter.toUpperCase();
    }
    else {
        initialLetter = initialLetter.toLowerCase();
    }
    return initialLetter + str.slice(1);
}
