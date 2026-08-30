import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const schema = JSON.parse(
  await readFile(new URL('./schema/property-energy-plan.schema.json', import.meta.url), 'utf8'),
);
const example = JSON.parse(
  await readFile(new URL('./examples/example-plan.json', import.meta.url), 'utf8'),
);

assert.equal(schema.$schema, 'https://json-schema.org/draft/2020-12/schema');
assert.equal(schema.properties.schemaVersion.const, '0.1.0');
assert.equal(example.schemaVersion, schema.properties.schemaVersion.const);
assert.ok(example.evidence.length > 0);
assert.ok(example.systems.length > 0);
assert.ok(example.decisions.length > 0);
assert.match(example.providerBoundary.implementationScope, /contractor|specialist/i);

console.log('Schema and illustrative example passed structural checks.');
