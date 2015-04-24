---
title: Handle Special Symbols
page_title: Handle Special Symbols | RadHtmlChart for ASP.NET AJAX Documentation
description: Handle Special Symbols
slug: htmlchart/troubleshooting/handle-special-symbols
tags: handle,special,symbols
published: True
position: 1
---

# Handle Special Symbols



**RadHtmlChart** uses JavaScript to render. This means that all properties and data have to pass not only through the code-behind,	but also through JavaScript. It is, therefore, necessary to make sure that the properties and data do not break the code-behind or JavaScript. This article will	help you understand better the concept of escaping special symbols.

## Escaping for JavaScript

Any string that will show data to the client (e.g., tooltips, labels) **must be properly escaped for JavaScript as well**.A prime example for this are *apostrophes* (sometimes known as single quotes). They are string delimiters in JavaScriptand so their presence would terminate the string too early and throw a JavaScript error. They must be escaped either with a backslash, or with their HTML entity:& # 8 2 1 7 ; (there are spaces here so that your viewing agent does not convert it to the actual symbol).

A backslash is another symbol that needs escaping,(backslash is a special character in both JavaScript and C#),so an easy approach is to replace all its instances with its HTML entity: & # 9 2 ; (there are spaces here so that your	viewing agent does not convert it to the actual symbol). This will also spare the need to escape it for C# itself.	Note, however, that **in C# you need two backslashes to escape a single apostrophe** —the first backslash would escape the second for C# so that the second one can escape the apostrophe in JavaScript.

## Using HTML Content

**RadHtmlChart** lets you place HTML in the tooltips, but the HTML must be valid so that it does not break the rest of the page by,for example, closing another tag too early. Generally, a good approach would be to escape your HTML fully, for example, by using the **HtmlEncode()**method the .NET Framework offers. Note that you should do this before transforming any other special characters to HTML entities, as **HtmlEncode()** wouldtransform the ampersand of the entity to its own entity, which would prevent the browser from reading it properly.

When pulling these strings from a database, you need to make sure they are prepared like this either in the database, or in the data source object you create,before passing them to the chart.

Since the displayed string is finally HTML, this means that environmental variables such as new lines must be configured for HTML—this is the <br />tag and not \r, \n, vbCrLf, CR, LF, chr(10) or chr(13) as used in C# and VB. In this regard, the **String.Replace()** method is often usefuland quite straightforward to use.

>note The possibility to use HTML content applies *only for the tooltips* . **RadHtmlChart**  *labels are not HTML* ,	but SVG text elements and therefore they do not support CSS, line breaks or other styling options that HTML/CSS offer.
>


# See Also

 * [Display HTML and Execute JavaScript]({%slug htmlchart/functionality/clienttemplate/display-html-and-execute-javascript%})

 * [Problem with Using Formatting Specifiers in Labels and Tooltips]({%slug htmlchart/troubleshooting/known-issues/problem-with-using-formatting-specifiers-in-labels-and-tooltips%})

 * [Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})
