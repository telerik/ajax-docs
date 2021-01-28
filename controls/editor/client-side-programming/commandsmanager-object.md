---
title: CommandsManager Object
page_title: CommandsManager Object - RadEditor
description: Check our Web Forms article about CommandsManager Object.
slug: editor/client-side-programming/commandsmanager-object
tags: commandsmanager,object
published: True
position: 6
---

# CommandsManager Object

The CommandsManager object exposes the following public methods and properties to control its behavior:

>caption CommandsManager Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|canRepeatLastCommand||Boolean|Indicates whether the last command can be repeated.|
|execute|`Object`, `Boolean`|Boolean|Executes a command.The method takes the following arguments: **command** - The command to be executed. **addToStack** - Boolean value that indicates whether the command to be added in the undo stack.|
|get_commands||Array|Returns the commands available in the undo stack.|
|getCommandsToRedo||Array|Returns the commands in the redo stack.|
|getCommandsToUndo||Array|Returns the commands in the undo stack.|
|isRedoAvailable||Boolean|Indicates whether there are commands in the redo stack.|
|isUndoAvailable||Boolean|Indicates whether there are commands in the undo stack.|
|redo|`Number`||Redo commands added in the redo stack.The method takes the following arguments: **depth** - The number of commands to be redo.|
|removeCommandAt|`Number`||Removes a command from the specified index in the stack.The method takes the following arguments: **index** - The index of the command to be removed.|
|repeatLastCommand|||Repeats the last command fired.|
|undo|`Number`||Undo commands added in the undo stack.The method takes the following arguments: **depth** - The number of commands to be undo.|
