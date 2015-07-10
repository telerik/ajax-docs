---
title: Skins
page_title: Skins | RadDock for ASP.NET AJAX Documentation
description: Skins
slug: dock/appearance-and-styling/skins
tags: skins
published: True
position: 1
---

# Skins



To make customizing the appearance of **RadDock** and **RadDockZone** as easy as possible, the control uses **skins.** A skin is a set of images and a CSS stylesheet that are applied to the HTML elements which make up the RadDock controls, defining their look and feel.

To apply a skin, set the **Skin** property of the **RadDockLayout** control, the **RadDockZone** control, and/or the **RadDock** control. You can set the **Skin** property using the properties pane or the control's [Smart Tag]({%slug dock/design-time/smart-tag%}).

* The **RadDockLayout** control is not rendered on the client page. Therefore, setting the **Skin** property of **RadDockLayout** has no direct effect. Rather, this sets the default skin for any controls that you add to **RadDockLayout** at design time. If the **RadDockZone** controls and **RadDock** controls nested in the **RadDockLayout** control have no **Skin** property in the ASP.NET markup, they inherit the **Skin** property of the **RadDockLayout** control. Using this approach lets you change the skins of all the docking controls by a single property setting. For example, the **RadDockZone** and RadDock controls in the following declaration inherit the **WebBlue** skin from the parent RadDockLayout:

````ASP.NET
<telerik:RadDockLayout id="RadDockLayout1" runat="server" skin="WebBlue">  
    <telerik:RadDockZone ID="RadDockZone1" runat="server" >     
        <telerik:RadDock ID="RadDock1" runat="server" />     
        <telerik:RadDock ID="RadDock2" runat="server" />  
    </telerik:RadDockZone>  
    <telerik:RadDock ID="RadDock3" runat="server" />
</telerik:RadDockLayout>
````



* Setting the **Skin** property of **RadDockZone** changes the appearance of the **RadDockZone** control and overrides the **Skin** property of the **RadDockLayout** control that contains it.Any **RadDock** controls nested inside the **RadDockZone** at design time inherit the **Skin** property of the **RadDockZone** as their default skin, overriding any default supplied by the **RadDockLayout** that contains the **RadDockZone**.

* Setting the **Skin** property of **RadDock** changes only the appearance of the **RadDock** control and overrides the **Skin** property of any parent **RadDockZone** or **RadDockLayout**.

The RadDock controls are installed with a number of preset skins:![dock skins thumb](images/dock_skins_thumb.png)


## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See the [Tutorial: Creating a Custom Classic Skin]({%slug dock/appearance-and-styling/creating-custom-classic-skin%}) topic for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the **EnableEmbeddedSkins** property of the controls that use the skin to **False**.

The stylesheet for a **RadDock** skin has the name **RadDock.[SkinName].css** and can be found in the **...Skins/[SkinName]** directory. The images are found in the **...Skins/[SkinName]/Dock** directory. For example, the stylesheet for the "Black" skin is called Dock.Black.css and is located in the ...Skins/Black directory.The images are found in the ...Skins/Black/Dock directory. The images are referenced by name from within the stylesheet.

For information on the CSS File structure, see the Understanding the Skin CSS File topic.

# See Also

 * [Title Bar Template]({%slug dock/structure/dock/title-bar-template%})

 * [Highlighting]({%slug dock/structure/dock-zones/highlighting%})

 * [Styling Custom Commands]({%slug dock/commands/styling-custom-commands%})
