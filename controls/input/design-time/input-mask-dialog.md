---
title: Input Mask Dialog
page_title: Input Mask Dialog | UI for ASP.NET AJAX Documentation
description: Input Mask Dialog
slug: input/design-time/input-mask-dialog
tags: input,mask,dialog
published: True
position: 1
---

# Input Mask Dialog



## 

The __Input Mask dialog__ lets you create and modify the masks that are the values of the __RadMaskedTextBox__ control's __Mask__ and __DisplayMask__ properties. You can display the Input Mask dialog in two ways:

* From the __RadMaskedTextBox__ [Smart Tag]({%slug input/design-time/smart-tag%}), choose the __SetMask__ link. When you bring up the Input Mask dialog in this way, the mask you create or choose is assigned to the __Mask__ property, which controls the mask that is used when the user can edit the value.

* Click the ellipsis button next to the __Mask__ or __DisplayMask__ property in the properties pane. The __DisplayMask__ property is an optional override to the __Mask__ property, for formatting the value of the masked text box when it does not have focus.![Mask Dialog](images/InputMaskDialog.png)

At the top of the dialog is a table of pre-defined masks that you can choose for common input tasks, along with sample values.

* To choose a pre-defined mask, select its row in the table. The mask automatically appears in the __Mask__ text box, with a preview to show the prompts and literals below it.

* To specify a mask that is not pre-defined, choose __<Custom>__ from the table of pre-defined masks. When you choose custom, the last mask that was selected in the table remains in the __Mask__ text box for you to use as a starting point in entering a new mask. The preview updates as you edit the mask.

>note For complicated masks, you may choose to use the __[MaskPart Collection Editor]({%slug input/design-time/maskpart-collection-editor%})__ instead.
>


# See Also

 * [Masks]({%slug input/radmaskedtextbox/masks%})
