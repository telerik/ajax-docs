---
title: RadAjaxLoadingPanel Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: ajax/radajaxloadingpanel/overview
tags: overview
published: True
position: 0
---

# RadAjaxLoadingPanel Overview



This help article describes what a __RadAjaxLoadingPanel__ is, describes how to place it on a web form, and how to set properties such as timing, transparency, and skinning. The __RadAjaxLoadingPanel__ control displays a loading icon that indicates a control is being updated.

RadAjax supports templates that will be shown as a progress indicator when a callback request is performed, i.e. when the page is loading silently. Displaying a progress indicator graphic by using __RadAjaxLoadingPanel__ will improve the overall feeling of the page for the user, as there will be no sudden changes and unnecessary flickering.

## Position

With your web form in design view you need to drag a __RadAjaxLoadingPanel__ from the toolbox to the web form just like any control. While you are still in design view, you can set other controls on the web form to use the __RadAjaxLoadingPanel__. The __IsSticky__ property of the __RadAjaxLoadingPanel__ defines where the panel will appear. By default, when __IsSticky__ is __false__, the __RadAjaxLoadingPanel__ will appear over the updated control. If you set __IsSticky__ to __true__, the panel will appear where you have set it on the web form.

>caution If you have many controls added to the AjaxSettings and want to use IsSticky="true", then you need to set absolute positioning for the RadAjaxLoadingPanel control using markup like this:
><telerik:RadAjaxLoadingPanel ID="LoadingPanel1" __IsSticky="true"__ runat="server" __style="position:absolute;"__ ><asp:Image ID="Image1" runat="server" AlternateText="Loading..." ImageUrl="Loading.gif" /> </telerik:RadAjaxLoadingPanel>
>


You can modify the __RadAjaxLoadingPanel__ control to show your own contents as you would do with a normal template. You need to simply add the content between the opening and closing tag of the __RadAjaxLoadingPanel__. Example 1 shows how to set an __Image__ and a __Label__ inside the __RadAjaxLoadingPanel__.

__Example 1__: Setting a __Label__ and an __Image__ inside a __RadAjaxLoadingPanel__.

````ASPNET
	    <telerik:RadAjaxLoadingPanel ID="LoadingPanel1" runat="server" Width="256px" Height="64px">
	        <asp:Label ID="Label2" runat="server" ForeColor="Red">Loading... </asp:Label>
	        <asp:Image ID="Image1" runat="server" Width="224px" Height="48px" ImageUrl="~/Loading.gif">
	        </asp:Image>
	    </telerik:RadAjaxLoadingPanel>
````



## Timing

Many times an AJAX request executes very fast and there is not enough time to show the loading panel. Users may see a brief flickering as the controls update, which may seem annoying and may confuse user. For these scenarios __RadAjaxLoadingPanel__ provides two properties: __InitialDelayTime__ and __MinDisplayTime__.

The __InitialDelayTime__ property specifies the delay in milliseconds, after which the __RadAjaxLoadingPanel__ will be shown. If the AJAX request returns before this time, the __RadAjaxLoadingPanel__ will not be shown.

Using __InitialDelayTime__, however does not solve the scenario, of when the AJAX request returns shortly after the initial delay time has passed. If a page has to show the loading panel and then almost immediately has to hide it again, the result is annoying flicker. For these cases the __RadAjaxLoadingPanel__ also has a __MinDisplayTime__ property. It specifies the minimum time, in milliseconds, that the loading panel will display on the screen. The loading indicator will not be hidden before this period has passed, even if the request returns. This will ensure a smoother interface for your page.

>note The __InitialDelayTime__ and __MinDisplayTime__ properties can be used only when the loading panel is managed by __RadAjaxManager__ / __RadAjaxManagerProxy__ or __RadAjaxPanel__ control. They are not valid when the loading panel is shown or hidden manually. In such cases you can achieve the same functionality with the __setTimeout()__ and __setInterval()__ JavaScript methods.
>


## Transparency

The loading panel does not "replace" the control that is being updated by the AJAX request by default. Instead, it is shown "over" the control. The __RadAjaxLoadingPanel__ has a __Transparency__ property value that should be set in percentage - values (0-100). The default value of the __Transparency__ property is 0, which means the loading panel is absolutely visible.

See the __RadAjaxLoadingPanel__ online demo and try modifying the transparency value to see how the appearance of the loading panel changes.

## Skinning

__RadAjaxLoadingPanel__ supports skinning and you can change its skin by setting the __Skin__ property to the name of the respective skin. The default value of the __Skin__ property is "" (no skin).

If the __Skin__ property is set, transparency is applied by default from the skin. However you can change this behavior by setting __EnableSkinTransparency="false"__.

A __BackgroundPosition__ property enables you to position the loading image in the loading panel (Top, TopRight, TopLeft, CenterLeft, Center, CenterRight, BottomLeft, Bottom, BottomRight, None). The default value is Center.

You can find more information about __RadAjaxLoadingPanel__ skins [here]({%slug ajax/appearance-and-styling/skins%}).

## Explicitly Show and Hide the Loading Panel

You can explicitly call the loading panel's __Show__ and __Hide__ methods on the client. This allows you to update controls according to some condition and display a loading panel over the control that will be updated (Use the [OnRequestStart]({%slug ajax/client-side-programming/events/onrequeststart%}) client-side event handler to show the panel, hide the panel using the [OnResponseEnd]({%slug ajax/client-side-programming/events/onresponseend%}) client-side event handler). You can review [this topic]({%slug ajax/radajaxloadingpanel/how-to/show-and-hide-ajaxloadingpanel-explicitly%}) for more info.

# See Also

 * [Skins]({%slug ajax/appearance-and-styling/skins%})

 * [OnRequestStart]({%slug ajax/client-side-programming/events/onrequeststart%})

 * [OnResponseEnd]({%slug ajax/client-side-programming/events/onresponseend%})

 * [Animation]({%slug ajax/radajaxloadingpanel/animation%})

 * [Show and Hide AjaxLoadingPanel explicitly]({%slug ajax/radajaxloadingpanel/how-to/show-and-hide-ajaxloadingpanel-explicitly%})

 * [Demo: AJAX Loading Panel](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/LoadingPanel/LoadingImages/DefaultCS.aspx)

 * [Demo: Loading Panel Templates and Transparency](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/LoadingPanel/Transparency/DefaultCS.aspx)
