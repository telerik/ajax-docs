---
title: Format Sets
page_title: Format Sets | RadEditor for ASP.NET AJAX Documentation
description: Format Sets
slug: editor/functionality/toolbars/dropdowns/format-sets
tags: format,sets
published: True
position: 4
---

# Format Sets

The **Format Sets** tool is used in order to apply formatting to elements or sections in the content of the editor. There are three groups of sets in the dropdown:

* **Element Format Sets** modify the selected DOM element or the first container, which has the same tag name as the one set in tag property of the format set

* **Inline Format Sets** behave like the **Apply Css Class** tool and apply formatting to the parent block element or create font elements and apply the formatting on them

* **Block Format Sets** apply formatting similar to the **Paragraph Styles** tools by creating new block elements or replacing the currently selected ones

The set is defined by the **FormatSets** collection which contains **EditorFormatSet** elements. The editor format set has three properties:

* **Tag** - it sets the tag name of the formatted DOM elements

* **Title** - This is the HTML code, which is displayed as an option in the dropdown

* **Attributes** - this is a **EditorFormatSetAttributeCollection** Name (attribute name), Value (attribute value) collection, which contains the attributes wich will be set to the formatted element.

Below are some sample settings of the **FormatSets** collection:![radeditor-format-sets-demo-example](images/radeditor-format-sets-demo-example.png)

## Using the FormatSets Collection Declaratively

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
	<FormatSets>
		<telerik:EditorFormatSet Tag="H1" Title="<h1 style='color: green'>green header 1</h1>">
			<Attributes>
				<telerik:EditorFormatSetAttribute Name="class" Value="greenClass" />
				<telerik:EditorFormatSetAttribute Name="style" Value="color: green;" />
			</Attributes>
		</telerik:EditorFormatSet>
		<!-- Element Format Sets -->
		<telerik:EditorFormatSet Tag="img" Title="<span style='border: 1px solid red;'>red border image</span>">
			<Attributes>
				<telerik:EditorFormatSetAttribute Name="class" Value="redBorderImage" />
				<telerik:EditorFormatSetAttribute Name="style" Value="border: 1px solid red; margin: 10px;" />
			</Attributes>
		</telerik:EditorFormatSet>

		<telerik:EditorFormatSet Tag="li" Title="<ul><li style='list-style-type: square;color: Red;'>square red list</li></ul>">
			<Attributes>
				<telerik:EditorFormatSetAttribute Name="style" Value="list-style-type: square;color: red;" />
			</Attributes>
		</telerik:EditorFormatSet>
		<!-- Inline Format Sets (the Tag property is empty) -->
		<telerik:EditorFormatSet Tag="" Title="<span style='color: Magenta'>magenta text</span>">
			<Attributes>
				<telerik:EditorFormatSetAttribute Name="style" Value="color: Magenta" />
			</Attributes>
		</telerik:EditorFormatSet>
	</FormatSets>
</telerik:RadEditor>
````

## Using FormatSets Collection Programmatically

````C#
EditorFormatSet formatSet = new EditorFormatSet("img", "Red Border Image");
formatSet.Attributes.Add(new EditorFormatSetAttribute("class", "RedBorderImage"));
formatSet.Attributes.Add(new EditorFormatSetAttribute("alr", "default alt value for Red Border Image"));
RadEditor1.FormatSets.Add(formatSet);

formatSet = new EditorFormatSet("h1", "Green header");
formatSet.Attributes.Add(new EditorFormatSetAttribute("style", "color: Green;"));
RadEditor1.FormatSets.Add(formatSet);

formatSet = new EditorFormatSet("", "magenta inline set");
formatSet.Attributes.Add(new EditorFormatSetAttribute("style", "color: Magenta;"));
RadEditor1.FormatSets.Add(formatSet);
````
````VB
EditorFormatSet(formatSet = New EditorFormatSet("img", "Red Border Image"))
formatSet.Attributes.Add(New EditorFormatSetAttribute("class", "RedBorderImage"))
formatSet.Attributes.Add(New EditorFormatSetAttribute("alr", "default alt value for Red Border Image"))
RadEditor1.FormatSets.Add(formatSet)

formatSet = New EditorFormatSet("h1", "Green header")
formatSet.Attributes.Add(New EditorFormatSetAttribute("style", "color: Green;"))
RadEditor1.FormatSets.Add(formatSet)

formatSet = New EditorFormatSet("", "magenta inline set")
formatSet.Attributes.Add(New EditorFormatSetAttribute("style", "color: Magenta;"))
RadEditor1.FormatSets.Add(formatSet)
````


## Using the ToolsFile

````XML
<?xml version="1.0" encoding="utf-8" ?>
<root>
	<tools name="MainToolbar">
		<tool name="FormatSets" />
	</tools>
	<formatSets>
		<formatSet tag="img" title="Default alt attribute">
			<attributes>
				<item name="alt" value="Default alt attribute value"></item>
			</attributes>
		</formatSet>
		<formatSet tag="a" title="<a href='#' class='greenOrangeLink' style='text-decoration: line-through;'>Green orange link</a>">
			<attributes>
				<item name="class" value="greenOrangeLink"></item>
				<item name="style" value="text-decoration: line-through;"></item>
				<item name="title" value="green, orange link"></item>
			</attributes>
		</formatSet>
	</formatSets>
</root>
````

## Display Style in Dropdown

To display the dropdown items with their corresponding formatting, add the formatted HTML in the **Title** attribute of the corresponding **FormatSet**.

````ASP.NET
<telerik:EditorFormatSet Tag="H1" Title="<h1 style='color: green'>green header 1</h1>">
````



## See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Format Sets online demo](http://demos.telerik.com/aspnet-ajax/editor/examples/formatsets/defaultcs.aspx)
