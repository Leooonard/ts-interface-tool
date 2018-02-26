import Ast from 'ts-simple-ast';
import * as Path from 'path';
import * as Log from '../util/log';

export default function camelCaseInterfaceAttribute(tsFilePath: string, useUpperCase: boolean) {
    try {
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new Ast();
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        const interfaces = sourceFile.getInterfaces();

        interfaces.forEach((interfaceItem) => {
            interfaceItem.getProperties().forEach((property) => {
                property.rename(camelCase(property.getName(), useUpperCase));
            });
        });

        sourceFile.saveSync();
        Log.fatal('camelCase成功');
    } catch (e) {
        const err: Error = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('camelCase失败');
    }
}

function camelCase(str: string, useUpperCase: boolean): string {
    let initialLetter = str[0];
    if (useUpperCase) {
        initialLetter = initialLetter.toUpperCase();
    } else {
        initialLetter = initialLetter.toLowerCase();
    }

    return initialLetter + str.slice(1);
}
