---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: dock/appearance-and-styling/skins
tags: skins
published: True
position: 1
---

# Skins



To make customizing the appearance of __RadDock__ and __RadDockZone__ as easy as possible, the control uses __skins.__ A skin is a set of images and a CSS stylesheet that are applied to the HTML elements which make up the RadDock controls, defining their look and feel.

To apply a skin, set the __Skin__ property of the __RadDockLayout__ control, the __RadDockZone__ control, and/or the __RadDock__ control. You can set the __Skin__ property using the properties pane or the control's [Smart Tag]({%slug dock/design-time/smart-tag%}).

* The __RadDockLayout__ control is not rendered on the client page. Therefore, setting the __Skin__ property of __RadDockLayout__ has no direct effect. Rather, this sets the default skin for any controls that you add to __RadDockLayout__ at design time. If the __RadDockZone__ controls and __RadDock__ controls nested in the __RadDockLayout__ control have no __Skin__ property in the ASP.NET markup, they inherit the __Skin__ property of the __RadDockLayout__ control. Using this approach lets you change the skins of all the docking controls by a single property setting. For example, the __RadDockZone__ and RadDock controls in the following declaration inherit the __WebBlue__ skin from the parent RadDockLayout:

````ASPNET
	    <telerik:RadDockLayout id="RadDockLayout1" runat="server" skin="WebBlue">  
	        <telerik:RadDockZone ID="RadDockZone1" runat="server" >     
	            <telerik:RadDock ID="RadDock1" runat="server" />     
	            <telerik:RadDock ID="RadDock2" runat="server" />  
	        </telerik:RadDockZone>  
	        <telerik:RadDock ID="RadDock3" runat="server" />
	    </telerik:RadDockLayout>
````



* Setting the __Skin__ property of __RadDockZone__ changes the appearance of the __RadDockZone__ control and overrides the __Skin__ property of the __RadDockLayout__ control that contains it.Any __RadDock__ controls nested inside the __RadDockZone__ at design time inherit the __Skin__ property of the __RadDockZone__ as their default skin, overriding any default supplied by the __RadDockLayout__ that contains the __RadDockZone__.

* Setting the __Skin__ property of __RadDock__ changes only the appearance of the __RadDock__ control and overrides the __Skin__ property of any parent __RadDockZone__ or __RadDockLayout__.

The RadDock controls are installed with a number of preset skins:![dock skins thumb](images/dock_skins_thumb.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See the [Tutorial: Creating a Custom Skin]({%slug dock/appearance-and-styling/tutorial:-creating-a-custom-skin%}) topic for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the __EnableEmbeddedSkins__ property of the controls that use the skin to __False__.

The stylesheet for a __RadDock__ skin has the name __RadDock.[SkinName].css__ and can be found in the __...Skins/[SkinName]__ directory. The images are found in the __...Skins/[SkinName]/Dock__ directory. For example, the stylesheet for the "Black" skin is called Dock.Black.css and is located in the ...Skins/Black directory.The images are found in the ...Skins/Black/Dock directory. The images are referenced by name from within the stylesheet.

For information on the CSS File structure, see the [Understanding the Skin CSS File](5443DCB5-CFA0-4E73-92AB-C1229973BBA8) topic.

# See Also

 * [Title Bar Template]({%slug dock/structure/dock/title-bar-template%})

 * [Highlighting]({%slug dock/structure/dock-zones/highlighting%})

 * [Styling Custom Commands]({%slug dock/commands/styling-custom-commands%})
