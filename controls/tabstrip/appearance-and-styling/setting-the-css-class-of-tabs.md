---
title: Setting the CSS Class of Tabs
page_title: Setting the CSS Class of Tabs - RadTabStrip
description: Check our Web Forms article about Setting the CSS Class of Tabs.
slug: tabstrip/appearance-and-styling/setting-the-css-class-of-tabs
tags: setting,the,css,class,of,tabs
published: True
position: 3
---

# Setting the CSS Class of Tabs



**RadTab** objects have a number of properties whose value is the name of a CSS class. These properties let you alter the appearance of individual tabs in the tab strip without using a [custom skin]({%slug tabstrip/appearance-and-styling/tutorial-creating-a-custom-skin%}).

>caution Typically, the [Skin]({%slug tabstrip/appearance-and-styling/skins%}) overrides the CSS class properties. When using the CSS class properties, set the **Skin** property to an empty string ("").
>


The CSS class properties are

* **CssClass**: controls the appearance of the tab in all states.

* **SelectedCssClass**: controls the appearance of the tab when it is selected.

* **DisabledCssClass**: controls the appearance of the tab when it is disabled.

* **HoveredCssClass**: controls the appearance of the tab when the mouse is over it.

* **ChildGroupCssClass**: controls the appearance of the set of child tabs that appear when the tab is selected.

* **OuterCssClass**: controls the appearance of the outmost tab wrapper (&lt;LI&gt; element) /added in Q2 2009 SP1/

To set the CSS class properties of an item at design time, use the [RadTabStrip Item Builder]({%slug tabstrip/design-time/radtabstrip-item-builder%}).

>note The CSS class of a tab is applied to the anchor (&lt;a&gt;) tag that represents the item in the rendered HTML output, except for the **ChildGroupCssClass** property, which is applied to an unordered list (<ul>). For more information about the rendered output of **RadTabStrip**, see  [Understanding the Skin CSS File]({%slug tabstrip/appearance-and-styling/understanding-the-skin-css-file%}).
>


## Defining the CSS Class

There are two ways you can define the CSS classes that you add using the CSS class properties:

* You can use a separate CSS file. When taking this approach, you must add a <link> tag to the <head> section of the ASPX file:

````ASPNET
<head runat="server">
  <title>Untitled Page</title>
  <link href="App_Data/MyStyles.css" rel="stylesheet" type="text/css" />
</head> 		
````

* You can define the styles directly in the <head> section of the ASPX file:

````ASPNET
<head runat="server">
<title>Untitled Page</title>
<style>    
.MyTab
{
	 background:url(Images/TabImage.gif) no-repeat 0 100%;
	 padding-left:5px;
}
</style>
</head> 
````


# See Also

 * [Controlling Appearance]({%slug tabstrip/appearance-and-styling/controlling-appearance%})

 * [Adding Images to Tabs]({%slug tabstrip/appearance-and-styling/adding-images-to-tabs%})

 * [Overview]({%slug tabstrip/templates/overview%})
