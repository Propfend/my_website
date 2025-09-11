.DEFAULT_GOAL := dev

# -----------------------------------------------------------------------------
# Real targets
# -----------------------------------------------------------------------------

package-lock.json: package.json
	npm install --package-lock-only

node_modules: package-lock.json
	npm install --from-lockfile
	touch node_modules

# -----------------------------------------------------------------------------
# Phony targets
# -----------------------------------------------------------------------------

.PHONY: clean
clean:
	rm -rf node_modules

.PHONY: fmt
fmt:
	npm run lint

.PHONY: jarmuz-static
jarmuz-static: node_modules
	./jarmuz-static.mjs

.PHONY: release
release: node_modules
	npm run build

.PHONY: dev
dev:
	npm run dev
