---
title: Control New Line Behavior
page_title: Control New Line Behavior | RadEditor for ASP.NET AJAX Documentation
description: Control New Line Behavior
slug: editor/managing-content/control-new-line-behavior
tags: control,new,line,behavior
published: True
position: 5
---

# Control New Line Behavior

>caution Since Q1 2011 the **NewLineBr** property is obsolete and the new **NewLineMode** property should be used instead.

DESCRIPTION

Here is some general info on how the browser works with `<br />` and `<p>` tags.

Carriage returns (when pressing Enter) are not significant when it comes to HTML. It doesn't matter what is the amount of whitespace in the HTML code - it is automatically converted to a single space when your HTML document is displayed in a browser. For an example, if you put in your HTML file the following text:

**Introducing Telerik RadEditor for ASP.NET AJAX. Improved user experience. Enhanced cross-browser support.**

In the browser it will be displayed as a single line (empty spaces and carriage returns are being converted to a single whitespace):

**Introducing Telerik RadEditor for ASP.NET AJAX. Improved user experience. Enhanced cross-browser support.**

If you wish to enter line breaks, e.g. you want your text to be displayed on two or more lines, but not to start a new paragraph, you should use a `<br />` tag. For an example:

**Introducing Telerik RadEditor for ASP.NET AJAX. `<br />` Improved user experience. `<br />` Enhanced cross-browser support.**

is displayed in the browser as:

**Introducing Telerik RadEditor for ASP.NET AJAX.Improved user experience.Enhanced cross-browser support.**

>note Note that the `<br />` tag is an empty tag and has no closing tag.

If you want to start a new paragraph, you should use the `<p>` (paragraph) tag. In HTML, this means automatically adding an extra blank line before and after a paragraph. e.g.:

````HTML
<p>Introducing Telerik RadEditor for ASP.NET AJAX.</p><p>Improved user experience.</p><p>Enhanced cross-browser support.</p>
````

is displayed as:

**Introducing Telerik RadEditor for ASP.NET AJAX.**

**Improved user experience.**

**Enhanced cross-browser support.**

>caution In a nutshell, if you want to end a line, but don't want to start a new paragraph, use `<br />` tag. If you wish to start a new paragraph - you use the `<p>` tag.

SOLUTION

Telerik RadEditor's **NewLineMode** property specifies whether the editor should insert a **new line (`<br />` tag)**, a **new paragraph (`<p>` tag)** or a **div (`<div>` tag)** when the Enter key is pressed. The default value is **"P" (`<p >` tag)** in order to closely reflect the behavior of desktop word-processors. Here, pressing **Shift+Enter** will insert a `<br />` tag.

If you set the **NewLineMode** property to **Br**, a `<br />` tag will be entered on every carriage return (pressing Enter). In this case you can insert paragraph tags by pressing **Ctrl+M** or the New Paragraph button.

The last available option of the **NewLineMode** property is **Div** which will insert a **div (`<div>` tag)** on every carriage return (pressing Enter). In order to insert a `<br />` tag in this mode press **Shift+Enter** .
