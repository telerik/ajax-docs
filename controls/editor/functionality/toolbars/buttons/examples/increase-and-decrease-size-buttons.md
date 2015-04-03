---
title: Increase and Decrease Size Buttons
page_title: Increase and Decrease Size Buttons | UI for ASP.NET AJAX Documentation
description: Increase and Decrease Size Buttons
slug: editor/functionality/toolbars/buttons/examples/increase-and-decrease-size-buttons
tags: increase,and,decrease,size,buttons
published: True
position: 1
---

# Increase and Decrease Size Buttons



## 

The following example demonstrates how to implement custom __IncreaseSize__ and __DecreaseSize__ buttons that expand and shrink the editor vertically.

Place IncreaseSize and DecreaseSize JavaScript commands below the editor declaration. Both commands get the editor DOM element the RadEditor __get_element()__ method. The __clientWidth__ and __clientHeight__ DOM properties of the element provide the current editor dimensions. Then the RadEditor __setSize()__ is used to assign new editor dimensions, this time with 30 pixels more or less, depending on the button clicked.

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	        <Tools>
	            <telerik:EditorToolGroup>
	                <telerik:EditorTool Name="IncreaseSize" />
	                <telerik:EditorTool Name="DecreaseSize" />
	            </telerik:EditorToolGroup>
	        </Tools>
	    </telerik:RadEditor>
	    <script type="text/javascript">
	        Telerik.Web.UI.Editor.CommandList["IncreaseSize"] = function (commandName, editor, args)
	        {
	            var editorElement = editor.get_element();
	            //set the height size of the editor to increase with 30px        
	            editor.setSize(editorElement.clientWidth, editorElement.clientHeight + 30);
	        };
	        Telerik.Web.UI.Editor.CommandList["DecreaseSize"] = function (commandName, editor, args)
	        {
	            var editorElement = editor.get_element();
	            //set the height size of the editor to decrease with 30px        
	            editor.setSize(editorElement.clientWidth, editorElement.clientHeight - 30);
	        };
	    </script>
````


