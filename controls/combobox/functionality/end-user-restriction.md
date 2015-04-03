---
title: End User Restriction
page_title: End User Restriction | UI for ASP.NET AJAX Documentation
description: End User Restriction
slug: combobox/functionality/end-user-restriction
tags: end,user,restriction
published: True
position: 5
---

# End User Restriction



## 

__AllowCustomText__ is a property which allows users to type a random text in the RadComboBox's input area. This means that the RadComboBox's input area can contain text that is not encountered as text of an item from the RadComboBox's item collection.

__AllowCustomText__ is a boolean property and gets either 'true' or 'false', as a value. When it is set to 'true' - the users are allowed to type text in the input area, when set to 'false' - the input area contains only the currently selected item's text, or text obtained by all selected items' texts separated by comma or other character.

When __AllowCustomText__ is __set to 'true'__, the __MaxLength__ property controls the number of characters the user can type into the input area.

>caution When __EnableLoadOnDemand__ is __enabled__ , users are allowed to type in the input area, regardless of the value of __AllowCustomText__ .
>


# See Also

 * [Overview]({%slug combobox/load-on-demand/overview%})
