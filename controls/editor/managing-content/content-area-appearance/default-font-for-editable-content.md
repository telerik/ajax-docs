---
title: Default Font for Editable Content
page_title: Default Font for Editable Content | RadEditor for ASP.NET AJAX Documentation
description: Default Font for Editable Content
slug: editor/managing-content/content-area-appearance/default-font-for-editable-content
tags: default,font,for,editable,content
published: True
position: 3
---

# Default Font for Editable Content



## 

Each browser has a default font, which is used by the page when there is no style set to any of the objects on the page. It is set from **Tools** -> **Internet Options** -> **General** -> **Fonts**. The Rich Text content area of RadEditor for ASP.NET AJAX is an editable IFRAME element, which is a separate document that has its own CSS styles applied through the embedded in the **Telerik.Web.UI.dll** skin. This default font appearance in the content area can be easily overridden by setting the editor's **CssFiles** property to point to your own CSS file

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1">
	<CssFiles>
		<telerik:EditorCssFile Value="~/EditorContentArea.css" />
	</CssFiles>
</telerik:RadEditor>
````

having the following class in it:

````CSS
body 
{ 
	font-family: Arial, Verdana, Tahoma !important; 
	font-size: 10pt !important;
}
````

If the editor is placed in non-editable mode (**Enabled="false"**), then its content is outputted in a DIV element on the page. This DIV element will inherit the page styles or the styles of its parent elements, but not the styles of the **EditorcontentAreaStyles.css** file and therefore the content might look different in edit and non-editable modes.

To style other HTML elements in the content area you need to define global css classes for them, e.g. **table**, **td**, **td**, **div**, **span**, etc

````CSS
form
{ 
	background-color:#efefef !important; 
	border:1px dashed #555555 !important;
}
table
{
	BORDER-RIGHT: #999999 1px dashed; 
	BORDER-BOTTOM: #999999 1px dashed;
}
table td
{ 
	font-size: 12px !important; 
	PADDING: 1px; 
	BORDER-TOP: #999999 1px dashed; 
	BORDER-LEFT: #999999 1px dashed;
}
table th
{ 
	PADDING: 1px; 
	BORDER-TOP: #000000 1px dashed; 
	BORDER-LEFT: #000000 1px dashed;
}
````

Please, note that if the **CssFiles** property is set the editor will not pick up the styles from the parent page. The following online demo shows how to use the **CssFiles** property: [Setting Content Area Defaults and External CSS Files](http://demos.telerik.com/aspnet-ajax/Editor/Examples/SettingContentAreaDefaults/DefaultCS.aspx).

## See Also

 * [Content Area Appearance Problems]({%slug editor/troubleshooting/content-area-appearance-problems%})
