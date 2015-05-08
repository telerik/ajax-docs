---
title: Content Area Appearance Problems
page_title: Content Area Appearance Problems | RadEditor for ASP.NET AJAX Documentation
description: Content Area Appearance Problems
slug: editor/troubleshooting/content-area-appearance-problems
tags: content,area,appearance,problems
published: True
position: 3
---

# Content Area Appearance Problems

By default, RadEditor copies the styles from the parent page in which it resides in order to display its content identically to the content on the parent page. In some scenarios this is not convenient for the end-user because the editor's background and text colors can appear unreadable.

The solution is setting the **CssFiles** property to point to an external css file and manually specify the classes that you want to load in the editor. By setting the **CssFiles** property you will prevent the editor to pick up the styles from the parent page, e.g.

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server">
	<CssFiles>
		<telerik:EditorCssFile Value="~/EditorContentArea.css" />
	</CssFiles>
</telerik:RadEditor>
````

By default, RadEditor loads the classes listed below from its default **EditorContentArea.css** (which is embedded in the Telerik.Web.UI.dll). You can copy these classes to your custom **EditorContentArea.css** which will be loaded by the **CssFiles** property:

````CSS
.RadEWrongWord
{ 
	background-color: yellow;
}
.RadEDomMouseOver
{ 
	background-color:#ffffcc;
}
body
{ 
	padding:3px; 
	background-image: none; 
	margin: 0px; 
	text-align: left; 
	scrollbar-face-color: #E9E9E9; 
	scrollbar-highlight-color: #FFFFFF; 
	scrollbar-shadow-color: #E9E9E9; 
	scrollbar-3dlight-color: #DBDBDB; 
	scrollbar-arrow-color: #787878; 
	scrollbar-track-color: #F5F5F5; 
	scrollbar-darkshadow-color: #AEAEAE; 
	word-wrap: break-word;
}
form
{ 
	background-color:#efefef; 
	border:1px dashed #555555;
}
table
{ 
	BORDER-RIGHT: #999999 1px dashed; 
	BORDER-BOTTOM: #999999 1px dashed;
}
table td
{ 
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



You can also style other elements in the editor's content area by adding their respective global css class. For example, to modify the ordered and unordered list shapes and its sublists in the content area put the classes below in the EditorContentArea.css file:

````CSS
OL 
{ 
	list-style-type: upper-roman;
}
OL OL 
{ 
	list-style-type: decimal;
}
UL 
{ 
	list-style-type: square;
}
UL UL 
{ 
	list-style-type: disc;
}
````

**list-style-type** [list-style-type Attribute | listStyleType Property](http://msdn.microsoft.com/en-us/library/ms530797.aspx)

## See Also

 * [External CSS Files]({%slug editor/functionality/toolbars/dropdowns/external-css-files%})
