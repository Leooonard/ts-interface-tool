import Ast from 'ts-simple-ast';
import * as Path from 'path';
import * as Log from '../util/log';

export default function ignoreTslintError(tsFilePath: string) {
    try {
        const sourceFilePath = Path.resolve(tsFilePath);
        const ast = new Ast();
        const sourceFile = ast.addExistingSourceFile(sourceFilePath);
        sourceFile.insertText(0, '// tslint:disable jsdoc-format semicolon\n\n');

        sourceFile.saveSync();
        Log.fatal('忽略tslint错误成功');
    } catch (e) {
        const err: Error = e;
        Log.error(err.message);
        Log.error(err.stack);
        Log.fatal('忽略tslint错误失败');
    }
}
