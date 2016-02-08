---
title: Editable and Non-Editable Areas
page_title: Editable and Non-Editable Areas | RadEditor for ASP.NET AJAX Documentation
description: Editable and Non-Editable Areas
slug: editor/managing-content/editable-and-non-editable-areas
tags: editable,and,non-editable,areas
published: True
position: 7
---

# Editable and Non-Editable Areas

To Define editable and non-editable regions in RadEditor, you should place several DIV or SPAN element containers in the editor content area. After that, set the **unselectable="on"** attribute to their tags in order to prohibit selection of these elements. You should also set the **contentEditable** attribute to "**false**" to put these elements in non-editable mode.

Here is an example:

````HTML
<div style="border: red 1px solid;" contenteditable="false" unselectable="on">
	Non Editable AREA
	<div style="border: green 1px solid;" contenteditable="true" unselectable="off">
		<!--Content name="info" -->
		Editable REGION...
		<!--/Content -->
	</div>
	Non Editable AREA
</div>
````

The end result will be as follows:

<div style="border: red 1px solid;" contenteditable="false" unselectable="on">
	Non Editable AREA
	<div style="border: green 1px solid;" contenteditable="true" unselectable="off">
		<!--Content name="info" -->
		Editable REGION...
		<!--/Content -->
	</div>
	Non Editable AREA
</div>

You can find additional information in the following MSDN article: [UNSELECTABLE Attribute](http://msdn.microsoft.com/en-us/library/ms537840.aspx).

To disable the content editing in Firefox (Mozilla) use the [-moz-user-select: none;](http://developer.mozilla.org/en/docs/CSS:-moz-user-select) css property. It is a Mozilla property extension to CSS that is used to determine whether or not an element may have its content selected.

The following sample code provides a simple "Hello, World!" text which prevents the user from selecting the content:

````HTML
<span style="-moz-user-select: none;">Hello, World!</span>
````

Legal Values of the -moz-user-select css property


| Value | Description |
| ------ | ------ |
|inherit|Inherit the value from the parent element.|
|none|None of the content may be selected.|
|text|Only the text within the element may be selected.|
|element|A single element may be selected (from many).|
|elements|Multiple elements may be selected.|
|all|The contents must either be selected in entirety or none at all.|
|toggle|The contents are selected "following a standard toggling content model"[[1]](http://www.blooberry.com/indexdot/css/properties/extensions/nsextensions.htm).|
|tri-state|unknown|
|-moz-all|unknown|

>important Typically, using `contenteditable="false"` can serve only custom needs. RadEditor tools and commands might fail to operate normally with non-edutable elements.
