---
title: Pasting Issues under IE
page_title: Pasting Issues under IE | RadEditor for ASP.NET AJAX Documentation
description: Pasting Issues under IE
slug: editor/troubleshooting/paste-issues-ie
tags: pasting,issues,with,ie,internet explorer,editor,paste
published: True
position: 12
---

# Pasting Issues under IE

You can find here some known difficulties related to pasting in **RadEditor** under IE browser.

## Issue: Nothing gets pasted under IE

The most likely reason for this problem is that the client-side programmatic access to the clipboard is disabled.

### Resolution:

Enable the clipboard access, so that the built-in mechanism of **RadEditor** can properly process the content to be pasted. This MSDN article shows how you can enable this option—[https://msdn.microsoft.com/en-us/library/bb250473%28v=vs.85%29.aspx](https://msdn.microsoft.com/en-us/library/bb250473%28v=vs.85%29.aspx).

## Issue: Pasting Content from MS Word under IE11 has Different Output

With IE11 browser, pasting from MS Word is a native functionality. Due to that, before **RadEditor** processes the content, IE11 has already transformed the MS Word content to HTML. Subsequently, the built-in mechanisms of **RadEditor** indicate that plain HTML content is being pasted.

You can read more about how **RadEditor** handles pasting in the [Pasting Content Overview]({%slug editor/managing-content/pasting-content/overview%}) article.