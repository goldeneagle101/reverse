// Модуль 'vscode' содержит API для расширения VS Code
// Импортируем модуль и ссылаемся на него с псевдонимом vscode в коде ниже
import * as vscode from 'vscode';


import { attribute as _, Digraph, Subgraph, Node, Edge, toDot } from 'ts-graphviz';

const G = new Digraph();
const A = new Subgraph('A');
const node1 = new Node('node1', {
  [_.color]: 'red'
});
const node2 = new Node('node2', {
  [_.color]: 'blue'
});
const edge = new Edge([node1, node2], {
  [_.label]: 'Edge Label',
  [_.color]: 'pink'
});
G.addSubgraph(A);
A.addNode(node1);
A.addNode(node2);
A.addEdge(edge);
const dot = toDot(G);


// Вызов метода осуществляется при активиции расширения
// Расширение активируется в момент первого выполнения команды
export function activate(context: vscode.ExtensionContext) {

	// Этот код будет выполнен только один раз при активации расширения
	// Вывод для:
	// * диагностической информации (console.log)
	// * ошибок (console.error)
	console.log('Расширение "reverse-engineering" активно!');

	// Команда определена в файле package.json
	// Параметр commandId должен совпадать с полем команды в package.json
	const disposable = vscode.commands.registerCommand('reverse-engineering.testFunc', () => {
		// Код, который вы разместите здесь, будет выполняться каждый раз при выполнении команды
		// Отображаем сообщение пользователю
		vscode.window.showInformationMessage('Это тестовая функция, подтверждающая, что плагин без ошибок встраивается в VSCode, для задания 1');
		vscode.window.showWarningMessage('Внимание! Данная команда предназначена для тестирования')
	});

	context.subscriptions.push(disposable);
}

// Вызов метода осуществляется при деактивации расширения
export function deactivate() {}
