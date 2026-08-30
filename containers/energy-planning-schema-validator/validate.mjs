import { readFile } from 'node:fs/promises';
import process from 'node:process';

import Ajv2020 from 'ajv/dist/2020.js';

const inputPath = process.argv[2] ?? '/app/example-plan.json';
const schemaPath = process.env.BETTERPOWERED_SCHEMA_PATH ?? '/app/schema.json';
const rawInput = inputPath === '-'
  ? await new Promise((resolve, reject) => {
      let data = '';
      process.stdin.setEncoding('utf8');
      process.stdin.on('data', (chunk) => {
        data += chunk;
      });
      process.stdin.on('end', () => resolve(data));
      process.stdin.on('error', reject);
    })
  : await readFile(inputPath, 'utf8');

const schema = JSON.parse(await readFile(schemaPath, 'utf8'));
const input = JSON.parse(rawInput);
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(schema);

if (!validate(input)) {
  console.error(JSON.stringify({ valid: false, errors: validate.errors }, null, 2));
  process.exitCode = 1;
} else {
  console.log(JSON.stringify({
    valid: true,
    schema: schema.$id,
    schemaVersion: input.schemaVersion,
  }, null, 2));
}
