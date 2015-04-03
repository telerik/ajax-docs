---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: scheduler/appearance-and-styling/skins
tags: skins
published: True
position: 1
---

# Skins



The visual appearance of __RadScheduler__ can be changed by applying different skins.Specify a skin for the scheduler by setting the __Skin__ property. __RadScheduler__ supports a number of built-in skins:

![Skins tumb](images/scheduler_skinsthumb.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start by copyingthe stylesheet of an existing skin and alter the copy. To use your own skin:

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the __EnableEmbeddedSkins__ property of the __RadScheduler__ to __False__.

The stylesheet for a __RadScheduler__ skin has the name __Scheduler.[SkinName].css__ and can be found in the __...Skins/[SkinName]__ directory.The images are found in the __...Skins/[SkinName]/Scheduler__ directory. For example, the stylesheet for the "Black" skin is called Scheduler.Black.cssand is located in the ...Skins/Black directory.The images are found in the ...Skins/Black/Scheduler directory. The images are referenced by name from within the stylesheet.

# See Also

 * [Controlling Appearance]({%slug scheduler/appearance-and-styling/controlling-appearance%})
