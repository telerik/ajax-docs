---
title: Appearance and Styling
page_title: Appearance and Styling | RadListBox for ASP.NET AJAX Documentation
description: Appearance and Styling
slug: listbox/troubleshooting/appearance-and-styling
tags: appearance,and,styling
published: True
position: 0
---

# Appearance and Styling

## 

**Problem**

Setting the **BackColor** of RadListBox has no effect.

**Cause**

The corresponding **background-color** attribute is set to the outer DIV element of the control. The Skin sets the background color to the inner DIV and that overrides it.

**Solution**

Add the following CSS rule to the <head> section of your page:

````CSS
.RadListBox div.rlbGroup 
{ 
	background-color:Aqua; 
}
````

**Problem**

Setting the **ForeColor** or different **Font** properties of RadListBox have no effect.

**Cause**

The corresponding **CSS** attributes are set to the outer DIV element of the control. The Skin overrides them on item's level.

**Solution**

Add the following CSS rule to the <head> section of your page:

````CSS
.RadListBox span.rlbText 
{ 
	font-size: x-Small; 
	font-family: Verdana, Arial, Helvetica,
	sans-serif; 
	color: Green; 
	font-weight: bold;
}
````

# See Also

 * [Skins]({%slug listbox/appearance-and-styling/skins%})
