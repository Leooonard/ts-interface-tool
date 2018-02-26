"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_simple_ast_1 = require("ts-simple-ast");
const Path = require("path");
const Log = require("../util/log");
function camelCaseInterfaceAttribute(tsFilePath) {
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
                console.log(property.getType().isNullable());
                if (property.getType().isUnionType()) {
                    if (property.getType().isNullable()) {
                        // 针对string | null这类情况。
                        property.setType(property.getType().getNonNullableType().getText());
                    }
                    else {
                        // 针对number | 0这类情况。
                        property.setType(property.getType().getUnionTypes()[0].getText());
                    }
                }
            });
        });
        sourceFile.saveSync();
        Log.fatal('removeUnion成功');
    }
    catch (e) {
        const err = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('removeUnion失败');
    }
}
exports.default = camelCaseInterfaceAttribute;
