import Ast from 'ts-simple-ast';
import * as Path from 'path';
import * as Log from '../util/log';

export default function prefixInterface(tsFilePath: string, prefix?: string) {
    try {
        const realPrefix = prefix || 'I';
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new Ast();
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        const interfaces = sourceFile.getInterfaces();

        interfaces.forEach((interfaceItem) => {
            if (interfaceItem.getName()[0] !== realPrefix) {
                interfaceItem.rename(realPrefix + interfaceItem.getName());
            }
        });

        sourceFile.saveSync();
        Log.fatal('prefix成功');
    } catch (e) {
        const err: Error = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('prefix失败');
    }
}
