---
title: The Autosize Feature of the Built-in Dialogs is Enabled
page_title: The Autosize Feature of the Built-in Dialogs is Enabled - RadEditor
description: Check our Web Forms article about The Autosize Feature of the Built-in Dialogs is Enabled.
slug: editor/changes-and-backwards-compatibility/the-autosize-feature-of-the-built-in-dialogs-is-enabled
tags: the,autosize,feature,of,the,built-in,dialogs,is,enabled
published: True
position: 5
---

# The Autosize Feature of the Built-in Dialogs is Enabled

As of Q3 2013, the size of **RadEditor** dialogs is calculated via the [Autosize feature](https://demos.telerik.com/aspnet-ajax/window/examples/autosize/defaultcs.aspx) of the **RadWindow** controls.

Since the Q3 2013 release, you can no longer set a custom size for the built-in dialogs using the **DialogDefinitions**	class.For more information, see the "How to set a custom size for a dialog"	section below.

## Why Is This Change Necessary?

Telerik is changing how **RadEditor** dialogs resize for several reasons:

* More consistent layout across the major browsers
* Correct behavior and layout when different skins are being used
* Improvement in the usability of the dialogs
* Fixes, related to cross-browser issues.

## How to Set a Custom Size for a Built-in Dialog

You can set a custom size for a built-in dialog using additional CSS rulesin their UserControl files. You should have already used the **ExternalDialogsPath** property to customize a built-in dialog. If you are not familiar with this approach, please examine the	"[ExternalDialogsPath property](https://www.telerik.com/help/aspnet-ajax/editor-externaldialogspath-property.html)" article and the	"[Editor - Customize Built-in Dialogs](https://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx)" demo.

After following the steps provided in the **Customize Built-in Dialogs** demo you should implement the CSS rule. First add a `<style>` tag in the UC file.	This rule should affect the body element of the document. Use a selector with higher CSS specificity than the default one and set the desired width and height attributes. For example, to resize the Document Manager you could use the following rule:

````HTML
html.redDocumentManager body 
{
	width: 580px;
	height: 832px;
}
````

You should use the correct class name according to the dialog’s name. For convenience, you could follow this pattern:

````HTML
html.red<DialogName> body
````

>note If you are using **MetroTouch** or **BlackMetroTouch** skin, you should use the following rule:


````HTML
html.red<DialogName>.RadForm_<SkinName> body
````

You can also define the CSS rules in a separate file and point the **DialogsCssFile** property of the **RadEditor** control to it.With this approach, you will not be forced to manipulate the UC files and you can easily modify the sizes of the dialogs.You can find more information about this property in the "[DialogsCssFile Property](https://www.telerik.com/help/aspnet-ajax/editor-dialogscssfile.html)" article.

## See Also

 * [ExternalDialogsPath Property]({%slug editor/functionality/dialogs/externaldialogspath-property%})

 * [Resize Dialogs]({%slug editor/functionality/dialogs/examples/resize-dialogs%})

 * [DialogsCssFile Property]({%slug editor/appearance-and-styling/dialogscssfile-property%})

 * [Demo: Editor - Customize Built-in Dialogs](https://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx)

 * [Demo: Window - Automatic Size Adjustment](https://demos.telerik.com/aspnet-ajax/window/examples/autosize/defaultcs.aspx)
