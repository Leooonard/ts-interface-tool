#!/usr/bin/env node

import * as Command from 'commander';
import prefixInterface from '../service/prefix';
import camelCaseInterfaceAttribute from '../service/camelcase';
import removeNullable from '../service/removeNullable';
import ignoreJsDocError from '../service/jsdoc';

const version = '0.0.1';

main();

async function main() {
    await checkLowestSupportFrnCliVersion();

    Command
        .description(`tit-cli是一个用于自动格式化、修改typescript interface的工具，提高工程师的开发效率。`)
        .version(version);

    Command
        .command('prefix <tsFilePath>')
        .option('-p, --prefix <prefix>', `指定前缀，默认为'I'`)
        .description(`将ts文件中的所有interface添加前缀，默认为'I'`)
        .action((tsFilePath, options) => {
            prefixInterface(tsFilePath, options.prefix);
        });

    Command
        .command('camelcase <tsFilePath>')
        .option('-u, --uppercase', '使用大驼峰格式')
        .description('将ts文件中的所有interface的属性名改为指定驼峰格式，默认为小驼峰格式')
        .action((tsFilePath, options) => {
            camelCaseInterfaceAttribute(tsFilePath, !!options.uppercase);
        });

    Command
        .command('rm-null <tsFilePath>')
        .description('去除ts文件中所有interface不必要的null属性')
        .action((tsFilePath) => {
            removeNullable(tsFilePath);
        });

    Command
        .command('ignore-jsdoc <tsFilePath>')
        .description('忽略jsdoc错误')
        .action((tsFilePath) => {
            ignoreJsDocError(tsFilePath);
        });

    Command.parse(process.argv);
}

async function checkLowestSupportFrnCliVersion() {
    // TODO 完成版本号服务后放开该函数。
    return;
}
