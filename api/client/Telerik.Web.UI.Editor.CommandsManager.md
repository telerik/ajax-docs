---
title: Telerik.Web.UI.Editor.CommandsManager
page_title: Client-side API Reference
description: Telerik.Web.UI.Editor.CommandsManager
slug: Telerik.Web.UI.Editor.CommandsManager
---

# Telerik.Web.UI.Editor.CommandsManager

## Inheritance Hierarchy

* *[Telerik.Web.UI.Editor.CommandsManager]({%slug Telerik.Web.UI.Editor.CommandsManager%})*

## Methods

### get_commands

Returns the commands available in the undo stack.  

#### Parameters

#### Returns

`Array` 

### execute

Executes a command.

#### Parameters

##### command `Object`

The command to be executed. 

##### addToStack `Boolean`

Boolean value that indicates whether the command to be added in the undo stack.

#### Returns

`Boolean` Returns true if command can be unexecuted. 

### undo

Undo commands added in the undo stack.

#### Parameters

##### depth `Number` 

The number of commands to be undo.

#### Returns

`None` 

### redo

Redo commands added in the redo stack.

#### Parameters

##### depth `Number` 

The number of commands to be redo.

#### Returns

`None`

### removeCommandAt

Removes a command from the specified index in the stack. 

#### Parameters

##### index `Number` 

The index of the command to be removed.

#### Returns

`None`

### isUndoAvailable

Indicates whether there are commands in the undo stack.

#### Parameters

#### Returns

`Boolean`

### isRedoAvailable

Indicates whether there are commands in the redo stack.

#### Parameters

#### Returns

`Boolean`

### getCommandsToUndo

Returns the commands in the undo stack.

#### Parameters

#### Returns

`Array`

### getCommandsToRedo

Returns the commands in the redo stack.

#### Parameters

#### Returns

`Array`

### canRepeatLastCommand

Indicates whether the last command can be repeated. 

#### Parameters

#### Returns

`Boolean`

### repeatLastCommand

Repeats the last command fired. 

#### Parameters

#### Returns

`None`