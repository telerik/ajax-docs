---
title: Overview
page_title: RadAjaxLoadingPanel Overview | RadAjax for ASP.NET AJAX Documentation
description: Overview
slug: ajaxloadingpanel/overview
previous_url: ajax/radajaxloadingpanel/overview
tags: overview
published: True
position: 0
---

# RadAjaxLoadingPanel Overview



This help article describes what a **RadAjaxLoadingPanel** is, describes how to place it on a web form, and how to set properties such as timing, transparency, and skinning. The **RadAjaxLoadingPanel** control displays a loading icon that indicates a control is being updated.

RadAjax supports templates that will be shown as a progress indicator when a callback request is performed, i.e. when the page is loading silently. Displaying a progress indicator graphic by using **RadAjaxLoadingPanel** will improve the overall feeling of the page for the user, as there will be no sudden changes and unnecessary flickering.

## Position

With your web form in design view you need to drag a **RadAjaxLoadingPanel** from the toolbox to the web form just like any control. While you are still in design view, you can set other controls on the web form to use the **RadAjaxLoadingPanel**. The **IsSticky** property of the **RadAjaxLoadingPanel** defines where the panel will appear. By default, when **IsSticky** is **false** , the **RadAjaxLoadingPanel** will appear over the updated control. If you set **IsSticky** to **true** , the panel will appear where you have set it on the web form.

>caution If you have many controls added to the AjaxSettings and want to use IsSticky="true", then you need to set absolute positioning for the RadAjaxLoadingPanel control using markup like this:
>`<telerik:RadAjaxLoadingPanel ID="LoadingPanel1" IsSticky="true" runat="server" style="position:absolute;" ><asp:Image ID="Image1" runat="server" AlternateText="Loading..." ImageUrl="Loading.gif" /> </telerik:RadAjaxLoadingPanel>`
>


You can modify the **RadAjaxLoadingPanel** control to show your own contents as you would do with a normal template. You need to simply add the content between the opening and closing tag of the **RadAjaxLoadingPanel**. Example 1 shows how to set an **Image** and a **Label** inside the **RadAjaxLoadingPanel**.

**Example 1** : Setting a **Label** and an **Image** inside a **RadAjaxLoadingPanel** .

````ASP.NET
<telerik:RadAjaxLoadingPanel ID="LoadingPanel1" runat="server" Width="256px" Height="64px">
	<asp:Label ID="Label2" runat="server" ForeColor="Red">Loading... </asp:Label>
	<asp:Image ID="Image1" runat="server" Width="224px" Height="48px" ImageUrl="~/Loading.gif">
	</asp:Image>
</telerik:RadAjaxLoadingPanel>
````



## Timing

Many times an AJAX request executes very fast and there is not enough time to show the loading panel. Users may see a brief flickering as the controls update, which may seem annoying and may confuse user. For these scenarios **RadAjaxLoadingPanel** provides two properties: **InitialDelayTime** and **MinDisplayTime** .

The **InitialDelayTime** property specifies the delay in milliseconds, after which the **RadAjaxLoadingPanel** will be shown. If the AJAX request returns before this time, the **RadAjaxLoadingPanel** will not be shown.

Using **InitialDelayTime** , however does not solve the scenario, of when the AJAX request returns shortly after the initial delay time has passed. If a page has to show the loading panel and then almost immediately has to hide it again, the result is annoying flicker. For these cases the **RadAjaxLoadingPanel** also has a **MinDisplayTime** property. It specifies the minimum time, in milliseconds, that the loading panel will display on the screen. The loading indicator will not be hidden before this period has passed, even if the request returns. This will ensure a smoother interface for your page.

>note The **InitialDelayTime** and **MinDisplayTime** properties can be used only when the loading panel is managed by **RadAjaxManager** / **RadAjaxManagerProxy** or **RadAjaxPanel** control. They are not valid when the loading panel is shown or hidden manually. In such cases you can achieve the same functionality with the **setTimeout()** and **setInterval()** JavaScript methods.
>


## Transparency

The loading panel does not "replace" the control that is being updated by the AJAX request by default. Instead, it is shown "over" the control. The **RadAjaxLoadingPanel** has a **Transparency** property value that should be set in percentage - values (0-100). The default value of the **Transparency** property is 0, which means the loading panel is absolutely visible.

See the **RadAjaxLoadingPanel** online demo and try modifying the transparency value to see how the appearance of the loading panel changes.

## Skinning

**RadAjaxLoadingPanel** supports skinning and you can change its skin by setting the **Skin** property to the name of the respective skin. The default value of the **Skin** property is "" (no skin).

If the **Skin** property is set, transparency is applied by default from the skin. However you can change this behavior by setting **EnableSkinTransparency="false"**.

A **BackgroundPosition** property enables you to position the loading image in the loading panel (Top, TopRight, TopLeft, CenterLeft, Center, CenterRight, BottomLeft, Bottom, BottomRight, None). The default value is Center.

You can find more information about **RadAjaxLoadingPanel** skins [here]({%slug ajaxloadingpanel/appearance-and-styling/skins%}).

## Explicitly Show and Hide the Loading Panel

You can explicitly call the loading panel's **Show** and **Hide** methods on the client. This allows you to update controls according to some condition and display a loading panel over the control that will be updated (Use the [OnRequestStart]({%slug ajaxpanel/client-side-programming/events/onrequeststart%}) client-side event handler to show the panel, hide the panel using the [OnResponseEnd]({%slug ajaxpanel/client-side-programming/events/onresponseend%}) client-side event handler). You can review [this topic]({%slug ajaxloadingpanel/how-to/show-and-hide-ajaxloadingpanel-explicitly%}) for more info.

## Modal Overlay

**RadAjaxLoadingPanel** exposes Modal property, which provides the functionality to force the panel to span over the entire visible area of the page, thus preventing users from clicking on other elements on the page that might trigger PostBacks or AJAX requests.

````ASP.NET
        <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Skin="Default" Modal="true">
````

You can also set the Modal property on client-side using the set_modal() method or simply check whether it is enabled using the get_modal() method.

````JavaScript
function pageLoad(app, args) {
		var loadingPanel = $find('<%= RadAjaxLoadingPanel1.ClientID %>');
		loadingPanel.set_modal(true);
}
````

## See Also

 * [Animation]({%slug ajaxloadingpanel/animation%})

 * [Show and Hide AjaxLoadingPanel explicitly]({%slug ajaxloadingpanel/how-to/show-and-hide-ajaxloadingpanel-explicitly%})

 * [Demo: AJAX Loading Panel](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/LoadingPanel/LoadingImages/DefaultCS.aspx)

 * [Demo: Loading Panel Templates and Transparency](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/LoadingPanel/Transparency/DefaultCS.aspx)
