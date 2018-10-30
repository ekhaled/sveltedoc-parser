# The sveltedoc parser

## Key Features

- JSDoc support
- Extract the component description from JSDoc
- Extract used components list (with short or reference notations)
- Extract data properties
- Extract computed properties with dependencies
- Extract events that fired by this component
- Extract events that propogated from child component
- Extract custom implemented events
- Extract list of used default and named `slots`
- Extract component methods
- Extract component helpers
- Extract component actions
- Extract used `refs` in template nodes

## Configuration

| json Path | Description | Default value |
|---------|-----------|---------------|
| **filename** | The filename to parse. **Required**, unless `fileContent` is passed. | |
| **fileContent** | The file content to parse. **Required**, unless `filename` is passed. | |
| **encoding** | The file encoding. | 'utf8' |
| **features** | The component features to parse and extracting. | By default used all supported features. |
| **ignoredVisibilities** | The list of ignored visibilities. | `['private', 'protected']` |

## Issues

All list of known issues presented at [this page](https://github.com/alexprey/sveltedoc-parser/issues).
Found a new issues? Please contribute and write detailed description [here](https://github.com/alexprey/sveltedoc-parser/issues/new).

## Contributors

Author [Alexey Mulyukin](https://github.com/alexprey)

Based on [vuedoc-parse](https://gitlab.com/vuedoc/parser)
