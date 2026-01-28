import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// Register a document selector for SCSS files
	const selector: vscode.DocumentSelector = [
		{ scheme: 'file', language: 'scss' },
		{ scheme: 'file', language: 'css' }
	];

	// Register a completion item provider for @critical
	const completionProvider = vscode.languages.registerCompletionItemProvider(
		selector,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				// Check if we're typing an at-rule
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (linePrefix.endsWith('@') || linePrefix.match(/@c(r(i(t(i(c(a(l)?)?)?)?)?)?)?$/)) {
					const criticalCompletion = new vscode.CompletionItem('@critical', vscode.CompletionItemKind.Keyword);
					criticalCompletion.detail = 'Critical CSS extraction at-rule';
					criticalCompletion.documentation = new vscode.MarkdownString(
						'Extracts critical CSS into a separate file during compilation.\n\n' +
						'**Usage:**\n' +
						'```scss\n' +
						'@critical filename.css {\n' +
						'  /* Critical CSS rules */\n' +
						'}\n' +
						'```'
					);
					criticalCompletion.insertText = new vscode.SnippetString('@critical ${1:filename.css} {\n\t$0\n}');
					criticalCompletion.sortText = '0'; // Higher priority

					return [criticalCompletion];
				}
				return [];
			}
		},
		'@', 'c' // Trigger completion on @ and c
	);

	context.subscriptions.push(completionProvider);

	console.log('@critical extension activated');
}

export function deactivate() {
	console.log('@critical extension deactivated');
}
