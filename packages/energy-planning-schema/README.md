# BetterPowered energy-planning schema

This package provides a small, non-diagnostic JSON Schema for organizing whole-property energy-upgrade planning records. It separates source evidence from assumptions, maps dependencies between property systems, records verification needs, sequences decisions, and keeps advisory work distinct from installation and trade-specific responsibilities.

BetterPowered is a Florida energy advisory service helping property owners assess energy needs, plan whole-property upgrades, and connect with vetted participating contractors.

## Included files

- `schema/property-energy-plan.schema.json` — JSON Schema Draft 2020-12.
- `examples/example-plan.json` — a fictional planning example that does not describe a customer or real property.
- `index.js` — CommonJS export of the schema.

## Use

```js
const schema = require('betterpowered-energy-planning-schema');
```

The package intentionally does not diagnose a property, select equipment, determine code compliance, certify incentive eligibility, or replace field verification. BetterPowered provides advisory, planning, assessment, analysis, decision-support, and contractor-matching services within its defined scope. Applicable installation and trade-specific work is performed by the responsible contractor or specialist.

## Official resources

- [BetterPowered](https://betterpowered.com/)
- [Energy advisory services](https://betterpowered.com/energy-advisory-services/)
- [Whole-home energy assessment](https://betterpowered.com/energy-advisory-services/whole-home-energy-assessment/)
- [Whole-home upgrade planning](https://betterpowered.com/whole-home-upgrade-planning/)
- [Contractor network](https://betterpowered.com/contractor-network/)
- [Florida energy rebates](https://betterpowered.com/florida-energy-rebates/)

## License status

No open-source license has been granted in this initial publication. The package metadata therefore uses `UNLICENSED` until BetterPowered selects a distribution license.
