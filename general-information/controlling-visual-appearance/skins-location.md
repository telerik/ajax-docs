---
title: Skins Location
page_title: Skins Location | UI for ASP.NET AJAX Documentation
description: Skins Location
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skins-location
tags: skins,location
published: True
position: 2
---

# Skins Location

Up to **Q2 2011 SP1** the built-in skins were located in the Telerik.Web.UI.dll assembly.

Since **Q3 2011** the [Built-in skins]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/overview%}) are located in the **Telerik.Web.UI.Skins.dll assembly**. The only exception is the **Default** skin which is still in the Telerik.Web.UI.dll assembly.

The new assembly was introduced in Q2 2011 with four new skins being placed directly in it to show the path we are taking. More information on this is available in [this blog post](http://blogs.telerik.com/aspnet-ajax/posts/11-07-05/new-telerik-ajax-skins-assembly.aspx) from the summer and in [this one from just after the Q3 release](http://blogs.telerik.com/aspnet-ajax/posts/11-11-15/separate-skin-assembly-in-radcontrols-for-asp-net-ajax-with-q3-apos-11.aspx)

This is done so that the skin usage is more intuitive - it allows us to separate the control functionality and the visual appearance. Another advantage is that the main assembly size is reduced since it no longer contains images and stylesheets.

The new Telerik.Web.UI.Skins.dll assembly also has a version number that needs to match the version number of the main assembly in order to work.

Additional assembly registrations are not needed for it to work, if the correct Skins.dll is referenced in the project the Telerik controls will find their skins.

This means that if you are using a skin different than the Default you need to include the Skins assembly in your project (either in the GAC, or in the Bin folder).

>tip The **Hay** , **Forest** , **Sitefinity** and **Transparent** skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of **Q1 2014** . You can find more information on the matter in [this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>

### See Also

 * [New Telerik AJAX Skins Assembly in Q2'11](http://blogs.telerik.com/blogs/posts/11-07-05/new-telerik-ajax-skins-assembly.aspx)

 * [Separate Skin Assembly in Telerik® UI for ASP.NET AJAX with Q3'11](http://blogs.telerik.com/blogs/posts/11-11-15/separate-skin-assembly-in-radcontrols-for-asp-net-ajax-with-q3-apos-11.aspx)
