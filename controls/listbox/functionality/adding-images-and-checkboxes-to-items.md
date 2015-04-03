---
title: Adding Images and Checkboxes to Items
page_title: Adding Images and Checkboxes to Items | UI for ASP.NET AJAX Documentation
description: Adding Images and Checkboxes to Items
slug: listbox/functionality/adding-images-and-checkboxes-to-items
tags: adding,images,and,checkboxes,to,items
published: True
position: 5
---

# Adding Images and Checkboxes to Items



You can easily add an image and/or a checkbox to the RadListBox item.
>caption 

![Images check boxes](images/listbox_images_checkboxes.png)

## Adding checkboxes to items

Set the __CheckBoxes__ property of RadListBox to *True*. This will add a checkbox on the left of every list item.

* You can use the __Checked__ property (True or False) of the list item to change its checked state.

* Use the __Checkable__ property of the item if you need to hide the checkbox of that item.



## Showing the CheckAll checkbox

From Q3 2013 you can use a __CheckAll__ checkbox functionality in RadListBox. You can set the __ShowCheckAll__ property of RadListBox to *True* and if the __CheckBoxes__ is also set to true the __CheckAll__ checkbox will be shown at the top of all other items of RadListBox. It allows checking or unchecking all the items with a single click.



## Adding images to items

Set the __ImageUrl__ property of the list items to the path to the image. Leave the property blank to have the item with no image.





# See Also

 * [Overview]({%slug listbox/radlistbox-items/overview%})

 * [Declaring the Items Inline]({%slug listbox/radlistbox-items/declaring-the-items-inline%})

 * [Loading Items from XML]({%slug listbox/radlistbox-items/loading-items-from-xml%})

 * [Working at Server-side]({%slug listbox/radlistbox-items/working-at-server-side%})

 * [Working at Client-side]({%slug listbox/radlistbox-items/working-at-client-side%})

 * [Checkboxes Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/checkboxes/defaultcs.aspx)

 * [Text with Icons Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/textwithicons/defaultcs.aspx)
