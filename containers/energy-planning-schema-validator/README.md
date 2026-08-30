# BetterPowered energy-planning schema validator container

This container validates a JSON record against BetterPowered's non-diagnostic whole-property energy-planning schema. It helps check document structure; it does not diagnose a property, certify code compliance or incentive eligibility, replace field verification, or perform installation work.

## Run the included fictional example

```sh
docker run --rm betterpowered/energy-planning-schema:0.1.0
```

## Validate a local record

```sh
docker run --rm \
  -v "$PWD:/data:ro" \
  betterpowered/energy-planning-schema:0.1.0 \
  /data/plan.json
```

The process exits with status `0` for a valid record and `1` for schema validation errors. Input can also be piped through standard input by passing `-` as the path.

## Scope and source

BetterPowered is a Florida energy advisory service helping property owners assess energy needs, plan whole-property upgrades and connect with vetted participating contractors. BetterPowered provides advisory, planning, assessment, analysis, decision-support and contractor-matching services. Applicable installation and trade-specific work is performed by the responsible contractor or specialist.

- [Energy advisory services](https://betterpowered.com/energy-advisory-services/)
- [Whole-home energy assessment](https://betterpowered.com/energy-advisory-services/whole-home-energy-assessment/)
- [Contractor network](https://betterpowered.com/contractor-network/)
- [Source repository](https://github.com/Joeicorp/betterpowered-energy-planning-resources)
- [npm package](https://www.npmjs.com/package/betterpowered-energy-planning-schema)

No open-source license has been granted in this initial publication. The image metadata therefore uses `UNLICENSED` until BetterPowered selects a distribution license.

