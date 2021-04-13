---
title: Set the default font for the content area and Font Name dropdown
description: See how to set the default font for the content area and Font Name dropdown of RadEditor.
type: how-to
page_title: Set the default font for the content area and Font Name dropdown
slug: editor-set-default-font-for-the-content-area-and-font-name-dropdown
res_type: kb
---

## How-To

* Set default font for the content area and the Font Name dropdown.
* Change default font in the Font Name dropdown
* Specify default font
* Adding fonts to the Font Name dropdown
* Apply default Font Style
* Customize content area appearance

## Description

Setting the default font for the content area and the Font Name dropdown are two different processes.

The article discusses the following problems:

* Cannot change default Editor font dropdown. I have added just one font to the FontSizes collection - Calibri, which has put just that font in the dropdown when you click it. However on page load the dropdown still shows Times New Roman as the default for the dropdown until you click the dropdown and select Calibri. Calibri then becomes the only option you can select.
* Font Size dropdown header shows a font, which is not defined in the [FontNames collection](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/toolbars/dropdowns/fonts)
* Font Size dropdown header shows the "Font Name" text instead of the defined font of the content area when the page loads.
* The content area is styled with the font of the page, but I want to set a different font. 

## Solution

### Setting the default font for the content area 

RadEditor applies automatically the page font to its content area. If you want to change and override it, you can do this by setting the CssFiles property to point to an external css file

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server">
    <CssFiles>
        <telerik:EditorCssFile Value="~/content.css" />
    </CssFiles>
</telerik:RadEditor>
````

with the following contents: 

content.css
````CSS
body {
    font-family: Calibri;
}
````
 
You can find more information in these resources:

* [Default Font for Editable Content](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/content-area-appearance/default-font-for-editable-content)
* [Customize Content Area](https://demos.telerik.com/aspnet-ajax/editor/examples/settingcontentareadefaults/defaultcs.aspx)

### Setting the default font for the Font Name dropdown

The [Font Name dropdown](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/toolbars/dropdowns/fonts#fontnames-collection) is consisted of two features which are configured independently:

* The Font Name dropdown header is sensitive to selection, which means that if the font of the content area is Times New Roman it will be displayed when the editor is loaded on the page and the user clicks in an empty content area or on elements which do not have explicitly applied font via CSS style or font tag. If the selected content has applied font, it will be obtained via the document.queryCommandValue('fontname') method and displayed in the Font Name header. If you want to load a different font in the FontName header, you can do it with the editor.getToolByName("FontName").set_value("Calibri"); client-side method as shown in the following example:

	````ASP.NET
	<script type="text/javascript">
	function OnClientLoad(editor)
	{
		var fontFamily = editor.getToolByName("FontName");
		setTimeout(function()
		{
			fontFamily.set_value("Calibri");
		}, 0);
	}
	</script>
	<telerik:radeditor id="RadEditor1" OnClientLoad="OnClientLoad" runat="server"></telerik:radeditor>
	````

* Dropdown popup which lists the font(s) defined in the FontNames collection: 

	Inline
	````ASP.NET
	<telerik:RadEditor ID="RadEditor1" runat="server">
		<FontNames>
			<telerik:EditorFont Value="Calibri" />
		</FontNames>
	</telerik:RadEditor>
	````

	Codebehind
	````C#
	RadEditor1.FontNames.Add("Calibri");
	````

