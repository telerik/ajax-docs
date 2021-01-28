---
title: AddText Limitation
page_title: AddText Limitation - RadImageEditor
description: Check our Web Forms article about AddText Limitation.
slug: imageeditor/troubleshooting/known-issues/addtext-limitation
tags: addtext,limitation
published: True
position: 1
---

# AddText Limitation




There is a known limitation in **RadImageEditor**'s **AddText** tool.

The **AddText** tool inserts the text to the image currently saved on the server. If any client-side operations are performed, such as Rotate, Flip, or Resize, and they are not applied on the server, the text will be added without taking into consideration the current client state of the image. To be sure that the text is added correctly please apply all changes to the image on the server.

Example of how the **AddText** tool does not respect the client operations performed up to now:

1. Original image

	![radimageeditor-add-text-limitation-im 1](images/radimageeditor-add-text-limitation-im1.jpg)

1. We rotate the image

	![radimageeditor-add-text-limitation-im 2](images/radimageeditor-add-text-limitation-im2.jpg)

1. We AddText

	![radimageeditor-add-text-limitation-im 3](images/radimageeditor-add-text-limitation-im3.jpg)

1. Result

	![radimageeditor-add-text-limitation-im 4](images/radimageeditor-add-text-limitation-im4.jpg)
