---
title: Data Editing
page_title: Data Editing | UI for ASP.NET AJAX Documentation
description: Data Editing
slug: grid/mobile-support/mobile-rendering/data-editing
tags: data,editing
published: True
position: 5
---

# Data Editing



When using "__Mobile__" rendering you can take advantage of all edit modesavailable in __RadGrid__ (*EditForms*, *InPlace*, *Batch* and *PopUp*).

## 

Although the "__Mobile__" rendering of __RadGrid__ is optimized for mobile devices and renders different HTML and layout,there are only few differences in the way that the editing is used and handled. The main difference in the editing in "__Mobile__" __RenderMode__ is the __PopUp__edit mode, which renders an entirely new mobile menu for editing. Following is a screenshot with the new __PopUp__ mobile edit menu:![radgrid-mobile-popupediting](images/radgrid-mobile-popupediting.png)

## Column editors with mobile rendering

When you set the RenderMode to "__Mobile__", by default, __RadGrid__ will render native controls. Native controls are the HTML5 equivalents of our controls. For example, __RadNumericTextBox__ will be replaced with *<input type=”number” />*. This change affects the accessing of the column editors and the implementationsthat you have with other render modes may not be applicable with mobile rendering.

We are completely aware that there will be cases when native controls could not cover all custom	requirements and that is why we have provided two ways for disabling their generation and	allowing the standard editors(available in the other render modes) to be used instead.With the introduction of the adaptive grid we have included a __UseNativeEditorsInMobileMode__	property to each __GridEditableColumn__. This property could explicitly disable	the generation of native controls for a column when it is set to "__false__".

The second approach is more general and will disable the rendering of native editors for the entire web site. You could achieve this by setting a __UseGridNativeEditorsInMobileMode__ option in the __web.config__ file to "__false__".

# See Also
