---
title: Removing the Borders
page_title: Removing the Borders | RadWindow for ASP.NET AJAX Documentation
description: Removing the Borders
slug: window/appearance-and-styling/removing-the-borders
tags: removing,the,borders
published: True
position: 2
---

# Removing the Borders

The **RadWindow's** borders are achieved via CSS, background image sprites and dedicated HTML elements for the purpose.There is no simple property for turning them off. Properties like BorderWidth, BorderStyle, BorderWidth are present in the controls markup and intellisense, yet they are merely inherited from the [System.Web.UI.WebControls.WebControl Class](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webcontrol.aspx) and are not implemented in the **RadWindow**, as such simple properties cannot have a clear and easily determinable effect on such a complex HTML structure.

It is possible, however, to override the default CSS styles of the **RadWindow** so that the elements that hold the borders are not displayed.Examples are offered for both Lightweight and Classic RenderModes.

An alternative is [creating a custom skin]({%slug window/appearance-and-styling/radwindow-css-classes-and-their-use%}) where you can freely modify the visibility of the borders.In the [Tutorial on creating a custom skin]({%slug window/appearance-and-styling/radwindow-css-classes-and-their-use%})'s last section there is also a tutorial on modifying the sprites, e.g., their color.

This topic contains the following sections.

* [Removing the Borders with Lightweight RenderMode](#removing-the-borders-with-lightweight-rendermode)

* [Removing the Borders with Classic RenderMode](#removing-the-borders-with-classic-rendermode)

## Removing the Borders with Lightweight RenderMode

With [Lightweight RenderMode]({%slug window/mobile-support/render-modes%}) the amount of background images and HTML elements is reduced and removing the borders is an easy task:

````ASP.NET
<telerik:RadWindow ID="RadWindow1" runat="server" CssClass="borderLessDialog" RenderMode="Lightweight" VisibleOnPageLoad="true">
	<ContentTemplate>
		<div style="width: 100%; height: 100%; background: yellow;"></div>
	</ContentTemplate>
</telerik:RadWindow>
````



````CSS
/* remove main borders */
.borderLessDialog.RadWindow
{
	border: none;
	padding: 0;
}

/* both selectors below can be replaced with setting VisibleTitlebar="false" */
/* remove the titlebar widening */
.borderLessDialog.RadWindow .rwTitleBar
{
	margin: 0;
}

/* remove the titlebar */
.borderLessDialog .rwTitleBar
{
	display: none;
}

/* the selector below can be replaced with setting VisibleStatusbar="false" */
/* remove the statusbar */
.borderLessDialog .rwStatusBar
{
	display: none;
}

/* remove the border around the content */
.borderLessDialog.RadWindow .rwContent
{
	border: none;
}
````

## Removing the Borders with Classic RenderMode

````ASP.NET
<telerik:RadWindow runat="server" ID="RadWindow1" Skin="Sunset" NavigateUrl="http://google.com/">
</telerik:RadWindow>
````

````CSS
.RadWindow_Sunset .rwCorner .rwTopLeft,  
.RadWindow_Sunset .rwTitlebar,  
.RadWindow_Sunset .rwCorner .rwTopRight,  
.RadWindow_Sunset .rwIcon, 
.RadWindow_Sunset table .rwTopLeft,  
.RadWindow_Sunset table .rwTopRight,  
.RadWindow_Sunset table .rwFooterLeft,  
.RadWindow_Sunset table .rwFooterRight,  
.RadWindow_Sunset table .rwFooterCenter,  
.RadWindow_Sunset table .rwBodyLeft,  
.RadWindow_Sunset table .rwBodyRight,  
.RadWindow_Sunset table .rwTitlebar,  
.RadWindow_Sunset table .rwTopResize, 
.RadWindow_Sunset table .rwStatusbar, 
.RadWindow_Sunset table .rwStatusbar .rwLoading 
{    
	display: none !important;   
}
````



The above code will should be placed in the head section of the page where you wish to remove the borders. You may additionally change/remove some of the classes so that certain elements are visible, if required by your logic.

>tip Use background: none !important; if you wish to preserve the space that the elements take so that the **RadWindow** can be dragged and resized, as display:none; will remove the HTML elements from view.


>tip The above cascade goes through the built-in skin **Sunset** , i.e. it will affect only **RadWindow** that use this skin. This is useful if you wish to have borders for most windows, yet some should not. Thus you can set the skin for the ones that will be borderless to a certain one you otherwise do not use and use its name instead of **Sunset** .
>Of course, the **CssClass** property of the control can also be used to create the needed cascade through a custom class.


## See Also

 * [Tutorial on creating a custom skin]({%slug window/appearance-and-styling/radwindow-css-classes-and-their-use%})

 * [RadWindow's structure]({%slug window/getting-started/element-structure%})
