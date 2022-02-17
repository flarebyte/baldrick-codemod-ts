gen:
	cd generator; node --loader ts-node/esm src/generator.ts

rehearse:
	node --loader ts-node/esm src/cli.mts