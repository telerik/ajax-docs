---
title: Calling the Predefined Dialogs from the Server Methods
page_title: Calling the Predefined Dialogs from the Server Methods | UI for ASP.NET AJAX Documentation
description: Calling the Predefined Dialogs from the Server Methods
slug: window/troubleshooting/calling-the-predefined-dialogs-from-the-server-methods
tags: calling,the,predefined,dialogs,from,the,server,methods
published: True
position: 6
---

# Calling the Predefined Dialogs from the Server Methods



The server-side methods that call the RadAlert, RadConfirm and RadPrompt dialog boxes were added in Q1 2011. They allow the developer to call these popups from the code-behind without having to inject the script himself/herself. This, however, cannot override their JavaScript nature, so essentially these server-side methods must go through JavaScript to show the predefined dialogs.

## Escaping for JavaScript

The above means that when preparing the string that will be shown to the end user it must be __properly escaped for JavaScript as well__. A prime example for this are __apostrophes__ (sometimes known as single quotes). They are string delimiters in JavaScript and so their presence would terminate the string too early and throw a JavaScript error. They must be escaped either with a backslash, or with their HTML entity.

There are other symbols that need escaping, for example a __backslash__ (which is a__special character in both JavaScript and C#__), so an easy approach is to replace all its instances with its HTML entity: & # 9 2 ; (there are spaces here so that your	viewing agent does not convert it to the actual symbol). This will also spare the need to escape it for C# itself.	Note, however, that __in C# you would need two backslashes to escape a single apostrophe__ – the first would escape the second for C# so that the second can escape the apostrophe in JavaScript.

## Using HTML content

There is also the fact that you can place HTML in the message, but it must be valid so that it does not break the rest of the page by, for example, closing another tag too early. Generally a good approach would be to escape your HTML fully, for example by using the HtmlEncode() method the .NET framework offers. Note that this should be done before transforming any other special characters to HTML entities, as HtmlEncode() would transform the ampersand of the entity to its own entity which would prevent the browser from reading it properly.

Since the displayed string is finally HTML this means that environmental variables such as new lines must be configured for HTML – this is the <br />tag and not \r, \n, vbCrLf, CR, LF, chr(10) or chr(13) as is in C# and VB. In this regard the String.Replace() method is often usefuland quite straightforward to use.
