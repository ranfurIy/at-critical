# at-critical

Adds support for custom `@critical` at-rules in SCSS files, providing syntax highlighting, validation, and IntelliSense support.

```scss
@critical filename.css {
	.class {
		display: block;
	}
}
```

## Features

- **Syntax highlighting** for `@critical` blocks (same styling as `@include`/`@mixin`)
- **Validation suppression** - Eliminates "unknown at-rule" warnings for `@critical`
- **IntelliSense support** - Auto-completion and documentation for `@critical`
- **CSS custom data** integration for proper language service support
- **Filename highlighting** - `filename.css` parameters are highlighted as functions

## Usage

Simply write `@critical filename.css { ... }` blocks in your `.scss` files. The extension provides:

1. **Auto-completion**: Type `@` or `@c` to see `@critical` suggestions
2. **Snippet insertion**: Auto-completes with proper structure and placeholders
3. **Error suppression**: No more red underlines for this custom syntax
4. **Documentation**: Hover information for the `@critical` at-rule

## Configuration

The extension includes the following configurable options:

- `at-critical.enableValidation`: Enable @critical at-rule validation support (default: `true`)
- `at-critical.suppressWarnings`: Suppress 'unknown at-rule' warnings for @critical (default: `true`)

## Publisher

Ranfurly

## Repository

https://github.com/meteora-digital/at-critical

## Release Notes

### 0.0.1

- **Initial release** with comprehensive `@critical` at-rule support:
  - TextMate grammar injection for syntax highlighting
  - CSS custom data integration for validation suppression
  - IntelliSense auto-completion and documentation
  - Configurable validation options
  - Support for both CSS and SCSS files

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
