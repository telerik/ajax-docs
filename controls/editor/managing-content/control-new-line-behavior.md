---
title: Control New Line Behavior
page_title: Control New Line Behavior | UI for ASP.NET AJAX Documentation
description: Control New Line Behavior
slug: editor/managing-content/control-new-line-behavior
tags: control,new,line,behavior
published: True
position: 5
---

# Control New Line Behavior



## 

>caution Since Q1 2011 the __NewLineBr__ property is obsolete and the new __NewLineMode__ property should be used instead.
>


DESCRIPTION

Here is some general info on how the browser works with <br /> and <p> tags.

Carriage returns (when pressing Enter) are not significant when it comes to HTML. It doesn't matter what is the amount of whitespace in the HTML code - it is automatically converted to a single space when your HTML document is displayed in a browser. For an example, if you put in your HTML file the following text:

__Introducing Telerik RadEditor for ASP.NET AJAX.     Improved user experience.            Enhanced cross-browser support.__

In the browser it will be displayed as a single line (empty spaces and carriage returns are being converted to a single whitespace):

__Introducing Telerik RadEditor for ASP.NET AJAX. Improved user experience. Enhanced cross-browser support.__

If you wish to enter line breaks, e.g. you want your text to be displayed on two or more lines, but not to start a new paragraph, you should use a <br /> tag. For an example:

__Introducing Telerik RadEditor for ASP.NET AJAX.<br />Improved user experience.<br />Enhanced cross-browser support.__

is displayed in the browser as:

__Introducing Telerik RadEditor for ASP.NET AJAX.Improved user experience.Enhanced cross-browser support.__

>note Note that the <br /> tag is an empty tag and has no closing tag.
>


If you want to start a new paragraph, you should use the <p> (paragraph) tag. In HTML, this means automatically adding an extra blank line before and after a paragraph. e.g.:

__<p>Introducing Telerik RadEditor for ASP.NET AJAX.</p><p>Improved user experience.</p><p>Enhanced cross-browser support.</p>__

is displayed as:

__Introducing Telerik RadEditor for ASP.NET AJAX.__

__Improved user experience.__

__Enhanced cross-browser support.__

>caution In a nutshell, if you want to end a line, but don't want to start a new paragraph, use <br /> tag. If you wish to start a new paragraph - you use the <p> tag.
>


SOLUTION

Telerik RadEditor's __NewLineMode__ property specifies whether the editor should insert a __new line (<br /> tag)__, a __new paragraph (<p> tag)__ or a __div (<div> tag)__ when the Enter key is pressed. The default value is __"P" (<p > tag)__ in order to closely reflect the behavior of desktop word-processors. Here, pressing __Shift+Enter__ will insert a <br /> tag.

If you set the __NewLineMode__ property to __Br__, a <br /> tag will be entered on every carriage return (pressing Enter). In this case you can insert paragraph tags by pressing __Ctrl+M__ or the New Paragraph button.

The last available option of the __NewLineMode__ property is __Div__ which will insert a __div (<div> tag)__ on every carriage return (pressing Enter). In order to insert a <br /> tag in this mode press __Shift+Enter__ .
