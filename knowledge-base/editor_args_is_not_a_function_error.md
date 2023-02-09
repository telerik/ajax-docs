---
title: args.get_name is not a function when executing the OnClientCommandExecuting event
description: Learn how to fix Uncaught TypeError args is not a function at Array OnClientCommandExecuting error - Telerik UI for ASP.NET AJAX
type: troubleshooting
page_title: Uncaught TypeError args.get_name is not a function at Array.OnClientCommandExecuting error
slug: editor_args_is_not_a_function_error
position: 
tags: 
ticketid: 1597014
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn how to fix the 

* Uncaught TypeError: args.get_name is not a function at Array.OnClientCommandExecuting error
* Uncaught TypeError: args.get_value is not a function at Array.OnClientCommandExecuting error
* Uncaught TypeError: args.get_commandName is not a function at Array.OnClientCommandExecuting 

errors when the OnClientCommandExecuting or OnClientCommandExecuted events are fired.

## Solution
You can prevent the error with this if check - if (!args || !args.get_commandName) return; e.g.

````ASPX
<script>
function OnClientCommandExecuting(editor, args) {
    if (!args || !args.get_commandName) return;   
    var name = args.get_name();
    var val = args.get_value();
    var cArea = editor.get_contentArea();
    var selectedElement = editor.getSelectedElement();
}
</script>
````

or by using the private API:

````ASPX
<script>
function OnClientCommandExecuting(editor, args) {
    var name = args._name;
    var val = args._value;
    var cArea = editor._contentArea;
    ...
}
</script>
````

 
    