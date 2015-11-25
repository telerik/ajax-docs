---
title: Masks
page_title: Masks | RadMaksedTextBox for ASP.NET AJAX Documentation
description: Masks
slug: radmaskedtextbox/features/masks
tags: masks
published: True
position: 1
---

# Masks




**RadMaskedTextBox** uses a mask string to control the text the user can enter. The string is composed of one or more of the mask elements, as shown the table below:


>caption  

| Mask Element | MaskPart class | Description |
| ------ | ------ | ------ |
|#|DigitMaskPart|Digit or space (optional). If this position is blank in the mask, it is rendered as a prompt character.|
|L|UpperMaskPart|Uppercase letter (required). Restricts input to the ASCII letters A-Z.|
|l|LowerMaskPart|Lowercase letter (required). Restricts input to the ASCII letters a-z.|
|a|FreeMaskPart|Accepts any character. If this position is blank in the mask, it is rendered as a prompt character.|
|<n..m>|NumericRangeMaskPart|Restricts the user to an integer in the declared numeric range. Numeric range mask parts can occupy multiple positions.|
|<n...m>|LongRangeMaskPart|Restricts the user to an integer in the declared numeric range. For the internal representation of the value is used Int64(Long) type.|
|<Option1|Option2|Option3>|EnumerationPart|Restricts the user to one of a fixed set of options. The pipe("|") serves as a separator between the option values.|
|*|LiteralPart|When adding ``*`` character to the **Mask** it appears as literal. In case it is added to the **DisplayMask** the \* symbol appears on blur.|
|\|N/A|Escape character, allowing the following character to act as literal text. For example "\a" is the character "a" rather than including a free mask part. "``\\``" is the literal back slash character.|
|Any other characters|LiteralPart|All non-mask elements appear as themselves. Literals alwaysoccupy a static position in the mask at run time, and cannot be moved or deleted by the user.|

# See Also

 * [Input Mask Dialog]({%slug radmaskedtextbox/design-time/input-mask-dialog%})

 * [MaskPart Collection Editor]({%slug radmaskedtextbox/design-time/maskpart-collection-editor%})
