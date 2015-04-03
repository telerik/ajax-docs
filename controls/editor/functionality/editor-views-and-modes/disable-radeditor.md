---
title: Disable RadEditor
page_title: Disable RadEditor | UI for ASP.NET AJAX Documentation
description: Disable RadEditor
slug: editor/functionality/editor-views-and-modes/disable-radeditor
tags: disable,radeditor
published: True
position: 4
---

# Disable RadEditor



## 

You could set the __Enabled__ property to disable the editing functionality of RadEditor. When the __Enabled__ property is set to __False__, RadEditor will be displayed as a simple DIV element, containing the value of its __Content__ property.

* __Enabled__ - in this mode the content of the RadEditor can be edited right after the page is loaded in the client's browser:

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	        <Content>       
	            <strong>sample content</strong>    
	        </Content>
	    </telerik:RadEditor>
````



* __Disabled__- in this mode the content is not editable when the page is loaded and cannot be switched to Editable. This is useful in situations where you want to prevent editing the content:

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1" Enabled="false">
	        <Content>       
	            <strong>sample content</strong>    
	        </Content>
	    </telerik:RadEditor>
````





If you would like to prevent the resizing of the content when the editor is disabled and display scrollbars around the DIV element, then set the __Style__ property of RadEditor to overflow: scroll or overflow: auto.

Here is an example demonstrating this feature:

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1" Enabled="false" Style="overflow: scroll;
	        border: 1px solid red;" Width="75" Height="100">
	        <Content>         
	            <strong>Line 1</strong><br/><strong>Line 2</strong><br/><strong>Line 3</strong><br/><strong>Line 4</strong><br/><strong>Line 5</strong><br/><strong>Line 6</strong><br/><strong>Line 7</strong>    
	        </Content>
	    </telerik:RadEditor>
````



# See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Edit Modes](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/EditModes/DefaultCS.aspx)
