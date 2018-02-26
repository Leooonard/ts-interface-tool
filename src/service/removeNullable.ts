import Ast from 'ts-simple-ast';
import * as Path from 'path';
import * as Log from '../util/log';

export default function removeNullable(tsFilePath: string) {
    try {
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new Ast({
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
    } catch (e) {
        const err: Error = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('removeNullable失败');
    }
}
