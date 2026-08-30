FROM node:22-alpine

LABEL org.opencontainers.image.title="BetterPowered Energy Planning Schema Validator" \
      org.opencontainers.image.description="Validates JSON records against BetterPowered's non-diagnostic whole-property energy planning schema." \
      org.opencontainers.image.url="https://betterpowered.com/energy-advisory-services/" \
      org.opencontainers.image.source="https://github.com/Joeicorp/betterpowered-energy-planning-resources" \
      org.opencontainers.image.documentation="https://github.com/Joeicorp/betterpowered-energy-planning-resources/tree/main/containers/energy-planning-schema-validator" \
      org.opencontainers.image.version="0.1.0" \
      org.opencontainers.image.vendor="BetterPowered LLC" \
      org.opencontainers.image.licenses="UNLICENSED"

WORKDIR /app

COPY containers/energy-planning-schema-validator/package.json \
     containers/energy-planning-schema-validator/package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts \
    && npm cache clean --force

COPY containers/energy-planning-schema-validator/validate.mjs ./validate.mjs
COPY packages/energy-planning-schema/schema/property-energy-plan.schema.json ./schema.json
COPY packages/energy-planning-schema/examples/example-plan.json ./example-plan.json

USER node

ENTRYPOINT ["node", "/app/validate.mjs"]
CMD ["/app/example-plan.json"]

