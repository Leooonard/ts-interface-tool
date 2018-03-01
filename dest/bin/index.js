#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command = require("commander");
const prefix_1 = require("../service/prefix");
const camelcase_1 = require("../service/camelcase");
const removeNullable_1 = require("../service/removeNullable");
const tslintError_1 = require("../service/tslintError");
const version = '0.0.1';
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield checkLowestSupportFrnCliVersion();
        Command
            .description(`tit-cli是一个用于自动格式化、修改typescript interface的工具，提高工程师的开发效率。`)
            .version(version);
        Command
            .command('prefix <tsFilePath>')
            .option('-p, --prefix <prefix>', `指定前缀，默认为'I'`)
            .description(`将ts文件中的所有interface添加前缀，默认为'I'`)
            .action((tsFilePath, options) => {
            prefix_1.default(tsFilePath, options.prefix);
        });
        Command
            .command('camelcase <tsFilePath>')
            .option('-u, --uppercase', '使用大驼峰格式')
            .description('将ts文件中的所有interface的属性名改为指定驼峰格式，默认为小驼峰格式')
            .action((tsFilePath, options) => {
            camelcase_1.default(tsFilePath, !!options.uppercase);
        });
        Command
            .command('rm-null <tsFilePath>')
            .description('去除ts文件中所有interface不必要的null属性')
            .action((tsFilePath) => {
            removeNullable_1.default(tsFilePath);
        });
        Command
            .command('ignore-tslint-error <tsFilePath>')
            .description('忽略tslint错误')
            .action((tsFilePath) => {
            tslintError_1.default(tsFilePath);
        });
        Command
            .command('all <tsFilePath>')
            .description('对interface文件使用所有操作')
            .action((tsFilePath) => {
            prefix_1.default(tsFilePath);
            camelcase_1.default(tsFilePath, false);
            removeNullable_1.default(tsFilePath);
            tslintError_1.default(tsFilePath);
        });
        Command.parse(process.argv);
    });
}
function checkLowestSupportFrnCliVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO 完成版本号服务后放开该函数。
        return;
    });
}
