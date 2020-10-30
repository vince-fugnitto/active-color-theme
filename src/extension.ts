import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    // Register command to echo the current theme kind.
    let disposable = vscode.commands.registerCommand('theming.echoTheme', () => {
        echoTheme(vscode.window.activeColorTheme.kind);
    });

    // Listen to theme change, and notify end-users.
    vscode.window.onDidChangeActiveColorTheme((theme: vscode.ColorTheme) => {
        echoTheme(theme.kind);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }


/**
 * Echo the color theme kind.
 * @param kind the color theme kind.
 */
export function echoTheme(kind: vscode.ColorThemeKind): void {
    vscode.window.showInformationMessage(`Current Theme Kind: ${vscode.ColorThemeKind[kind]}`);
}
