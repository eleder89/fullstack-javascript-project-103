#!/usr/bin/env node

import { program } from "commander";

program
.name("gendiff")
.description("Compares two configuration files and shows a difference.")
.version("0.0.1")
.option("-f, --format <type>", "output format")
.argument("<filePath1>", "the path of the firsth file")
.argument("<filePath2>", "the path of the second file")
.action((filePath1, filePath2) => {
  console.log('filePath1:', filePath1)
  console.log('filePath2:', filePath2)
})
program.parse()