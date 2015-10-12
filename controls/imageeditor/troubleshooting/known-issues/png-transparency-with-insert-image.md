---
title: PNG Transparency with InsertImage Limitation
page_title: PNG Transparency with InsertImage Limitation | RadImageEditor for ASP.NET AJAX Documentation
description: PNG Transparency with InsertImage Limitation
slug: imageeditor/troubleshooting/known-issues/png-transparency-with-insert-image
tags: png,transparency,insert,image,limitation
published: True
position: 2
---

# PNG Transparency with InsertImage Limitation

When you use the `InsertImage` tool to insert a PNG image over another PNG image in **RadImageEditor**, and the original image loaded in the control has transparency, the transparency is lost when `CanvasMode` is set to `No`.

The **solution** is to set `CanvasMode` to `Yes` or `Auto` for browsers that support it.

The problem in the original setup is caused by the use of the GDI+ library on the server. When the HTML5 `<canvas>` is not enabled, the InsertImage operation is performed on the server, otherwise it is performed in the browser where it works as expected.