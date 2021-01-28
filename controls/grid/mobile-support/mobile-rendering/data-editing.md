---
title: Data Editing
page_title: Data Editing - RadGrid
description: Check our Web Forms article about Data Editing.
slug: grid/mobile-support/mobile-rendering/data-editing
tags: data,editing
published: True
position: 5
---

# Data Editing



When using "**Mobile**" rendering you can take advantage of all edit modesavailable in **RadGrid** (*EditForms*, *InPlace*, *Batch* and *PopUp*).

## 

Although the "**Mobile**" rendering of **RadGrid** is optimized for mobile devices and renders different HTML and layout,there are only few differences in the way that the editing is used and handled. The main difference in the editing in "**Mobile**" **RenderMode** is the **PopUp**edit mode, which renders an entirely new mobile menu for editing. Following is a screenshot with the new **PopUp** mobile edit menu:
![radgrid-mobile-popupediting](images/radgrid-mobile-popupediting.png)

## Column editors with mobile rendering

When you set the RenderMode to "**Mobile**", by default, **RadGrid** will render native controls. Native controls are the HTML5 equivalents of our controls. For example, **RadNumericTextBox** will be replaced with *<input type=”number” />*. This change affects the accessing of the column editors and the implementationsthat you have with other render modes may not be applicable with mobile rendering.

We are completely aware that there will be cases when native controls could not cover all custom	requirements and that is why we have provided two ways for disabling their generation and	allowing the standard editors(available in the other render modes) to be used instead.With the introduction of the adaptive grid we have included a **UseNativeEditorsInMobileMode**	property to each **GridEditableColumn**. This property could explicitly disable	the generation of native controls for a column when it is set to "**false**".

The second approach is more general and will disable the rendering of native editors for the entire web site. You could achieve this by setting a **UseGridNativeEditorsInMobileMode** option in the **web.config** file to "**false**".

## See Also
