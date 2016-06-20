---
title: Common Issues
page_title: Common Issues | RadTooltip for ASP.NET AJAX Documentation
description: Common Issues
slug: tooltip/troubleshooting/common-issues
tags: common,issues
published: True
position: 0
---

# Common Issues



* [ToolTip is not positioned correctly](#tooltip-is-not-positioned-correctly)

* [Add IDs to the Controls Loaded by RadToolTipManager](#add-ids-to-the-controls-loaded-by-radtooltipmanager)

* [Sys.WebForms.PageRequestManagerServerErrorException and Sys.WebForms.PageRequestManagerServerErrorExecution](#syswebformspagerequestmanagerservererrorexception-and-syswebformspagerequestmanagerservererrorexecution)

* [Controls Loaded via AJAX Retain Old Values](#controls-loaded-via-ajax-retain-old-values)

* [The Tooltip Hides When Content Arrives](#the-tooltip-hides-when-content-arrives)

* [Invalid Postback or Callback Argument](#invalid-postback-or-callback-argument)

* [Click Events are not Fired for a Tooltipified Element](#click-events-are-not-fired-for-a-tooltipified-element)

* [Tooltips for Small Elements](#tooltips-for-small-elements)

* [Changing Borders and Fonts](#changing-borders-and-fonts)

* [Controlling Scrolling](#controlling-scrolling)

* [Sys.WebForms.PageRequestManagerServerErrorException: the status code returned from server was: 0](#syswebformspagerequestmanagerservererrorexception-the-status-code-returned-from-server-was-0)

* [AJAX-enable RadToolTip Content](#ajax-enable-radtooltip-content)

## ToolTip is not Positioned Correctly

By default the **RadToolTip** repositions itself so that it is always in the visible viewport. Sometimes, however,this does not happen. In that case make sure you have set all the necessary properties for its proper functioning: **Width, Height, Position,	RelativeTo, ShowEvent, HideEvent**. Usually at least **Width** is required so that the tooltip knows how big the popup needs to be in order to position it correctly on the screen. This is especially true for Load-On-Demandscenarios where the content is received after the tooltip is shown and it has no other way of calculating its position.

## Add IDs to the Controls Loaded by RadToolTipManager

In ASP, by default, ViewState is loaded per control according to its ID. This means that the control IDs should not change between postbacks in order for the control tree to properly reinitialize. To avoid auto-generated IDs that may differ, **when loading controls via AJAX with RadToolTipManager you must set their IDproperty**, just like with any other control that you create dynamically.

If this is not done you may get exceptions like	`Failed to load viewstate. The control tree into which viewstate is being loaded must match the control tree that was used to save viewstate during the previous request`or a generic server error. Or, simply, input values and control properties may not be retained.

## Sys.WebForms.PageRequestManagerServerErrorException and Sys.WebForms.PageRequestManagerServerErrorExecution

Sometimes, when AJAX is used to fetch content for RadToolTipManager an error like:

* `Sys.WebForms.PageRequestManagerServerErrorException: Object reference not set to an instance of an object.`

* `Sys.WebForms.PageRequestManagerServerErrorExecution; An Unknown error occurred while processing the request on the server. the status code returned from the server was: 500`

will be thrown on the page.This is a **server error**, usually thrown by the custom code that generates the content (i.e. the **OnAjaxUpdate handler**).The error message may appear as a JavaScript error or as an alert, depending on the browser and scenario.

This is the general way server errors are shown if they happen during a partial postback and RadToolTipManager is not an exception.

In order to resolve this problem you must **debug the server-side code** that loads the content in order to determine the actual exception, what causes it and how to fix it.

## Controls Loaded via AJAX Retain Old Values

This may happen if you are using the **OnAjaxUpdate** event to add user controls to the tooltip's UpdatePanel and you change their values too early in the control's lifecycle. This should be done in the **OnPreRender** event so that their ViewState is already loaded and the values from it does not override the one you provide in your code.

## The Tooltip Hides When Content Arrives

In some cases when content is loaded on demand by RadToolTipManager's `OnAjaxRequest` method, the tooltip hides just when the loading indicator disappears.

This is usually due to an AjaxSetting from RadAjaxManager/RadAjaxManagerProxy that updates an ASP:Panel or an ASP:UpdatePannel that encompasses the RadToolTipManager. In both these cases the resulting update panels have `UpdateMode` set to `Always`, so they dispose each time response from the server is received. If they include the RadToolTipManager they will also dispose it, so the tooltip will hide.

Here is what happens in such a scenario:

1. a tooltip is shown, so a partial postback is initiated, and the loading sign appears in the tooltip while it waits for the response

1. the response is received in the browser and MS AJAX starts disposing all included UpdatePanels

1. the RadToolTipManager, being inside one such UpdatePanel, is also disposed, so its child tooltips are also disposed, and therefore, hidden.

To avoid this behavior, you must ensure the tooltip manager is not updated when this is not needed:

1. Make sure that the RadToolTipManager is **not** inside an UpdatePanel with UpdateMode=Always

1. look for AJAX settings that include ASP Panel controls. Such settings result in update panels with UpdateMode=Always because it cannot be determined if the postback originates from inside. If possible, make such settings more specific so that they include separate controls instead of entire panels

Note that the update panels that cause the problem may be on the master page in a master-content page scenario, or on the aspx page if the tooltip manager is in a user control.A way to determine which is the parent element that gets disposed is by monitoring the server response in the dev toolbar of the browser.

>tip If you do not need input or postback controls in the tooltip content, consider loading the content from a [WebService]({%slug tooltip/radtooltipmanager/load-content-on-demand%}#loading-content-via-a-webservice) to avoid having any postbacks.


## Invalid Postback or Callback Argument

If you get such an error when the AJAX response of the RadToolTipManager arrives, the most likely reason is that the page did not initialize properly.There are various reasons that can lead to such a problem (like incorrectly loaded ViewState or change in the control tree). Here are some steps and precautions that can help avoid it:

* Make sure the controls loaded in the Tooltip Manager have IDs set.

* Make sure the PreRender event is used to set data in the user controls that are loaded.

* Reduce the size of the UpdatePanels on the page to dispose less content with each postback. Using UpdateMode=Always is often helpful as well.

* If viable for the concrete case, disable ViewState for the control(s) loaded in the tooltip manager.

* Avoid loading different user controls in the same manager. This may lead to differences in the control tree ASP may not be able to compensate.

* Avoid changing the Visible property of panels/controls in the tooltip, especially if they have inputs or postback controls in them.

* If the above ideas do not yield a resolution, try adding this script in the OnClientHide event of the TooltipManager: `$find("YourTooltipManagerClientID").get_updatePanel().innerHTML = "";`. This will clear the tooltip contents so they will not be posted to the server with the next POST.

* If all else fails, you can disable event validation for the page (and/or user control or even for the entire application). This is done by setting the `validateRequest` and `enableEventValidation` attributes of the Page directive to `false`.

## Click Events are not Fired for a Tooltipified Element

The **RadToolTip** registers event handlers for the client-side events and therefore they cancel the further click propagation so that the tooltip remains visible, as a postback would hide it. This means that when the **ShowEvent** is set to **OnClick** elements such as Buttons, CheckBoxes, RadioButtons, LinkButtons may not fire their server events or even their client-side behavior may change (especially for the RadioButton and CheckBox - they will not change their states,as the click is cancelled). To avoid this set the **ShowEvent** to **OnFocus** or to **OnMouseOver**, for example. The same holds true for the **RadToolTipManager** as well.

## Tooltips for Small Elements

When the target is very small (for example a 16x16px button in a grid column) and the **RelativeTo** property is set to **Mouse** the targeted element may be covered by the tooltip, which in turn may trigger the tooltip's hide event(especially if **HideEvent** is left to **Default** or **LeaveTarget**). This is partly expected behavior and partly due to the fact that the callout is an entire element that is attached to the appropriate side of the tooltip, and thus consumes the mouseover event, regardless of the fact that only the callout itself is visible, as the rest is transparent. To avoid this set the **RelativeTo** property to **Element** and/or the **HideEvent** to **LeaveTargetAndToolTip** or **ManualClose**.

## Changing Borders and Fonts

Properties like Font, Font-Color, Border-Style, Border-Color, etc. are only inherited from System.Web.Control and are not implemented in the **RadToolTip**. This is due to the fact that they are rather simple properties and the effect they should have on a complex structure such as the **RadToolTip** is not clear. Therefore the **RadToolTip** comes with a number of predefined skins which have borders, appropriate for the overall look and feel of the skin so that they can match the rest of the theme/other Telerik controls on the page. If you need to change borders you would need to [create a custom skin]({%slug tooltip/appearance-and-styling/tutorial-creating-custom-lightweight-skin%}). The fonts can be controlled via CSS - you can either change them when you create your custom skin, or override the default CSS via your custom rules on the page. The needed classes can easily be inspected via a tool like Firebug or the IE Dev toolbar and also a list with them is available in [this help article]({%slug tooltip/appearance-and-styling/css-classes%}).

>tip When using the [Lightweight RenderMode]({%slug tooltip/mobile-support/render-modes%}) styling is easier. Examining the	rendered HTML in the browser dev toolbar can show you which CSS rules to override without the creation of a custom skin.

## Controlling Scrolling

RadToolTip and RadToolTipManager expose the `ContentScrolling` property which controls the `overflow` CSS property of the content element of the tooltip. The purpose is to let the developer define `Width` and `Height` for the entire tooltip so the content overflows according to the `ContentScrolling` property, but certain **browser behaviors** limit this feature when `RenderMode` is `Classic`. In this case, the tooltip layout is created through a `<table>` element and browsers extend tables to fit their contents. Thus, to have control over the scrolling of the content, you should use `RenderMode="Lightweight"`.

## Sys.WebForms.PageRequestManagerServerErrorException: the status code returned from server was: 0

On some occasions, you may get the following error in a browser alert dialog: `RadToolTipManager response error: Exception=Sys.WebForms.PageRequestManagerServerErrorException: An unknown error occured while processing the request on the server. the status code returned from server was: 0`.

Usually, such an error message is prevented by cancelling the alert in the [OnClientResponseError event]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientresponseerror%}).

Chrome, however, always displays this message if there is another ongoing request, especially an AJAX request (e.g., caused by another user action like a button click), at the time the tooltip manager invokes its own AJAX request to fetch content.

There are several ways to handle such an error because it stems from the `PageRequestManager` class from the MS AJAX library:

* handle the `endRequestEvent` and prevent the error alert. The following snippet should prevent it for all server errors trapped by MS AJAX:

	**JavaScript**

		function endRequestHandler(sender, args) {
		    args.set_errorHandled(true);
		}
		var prm = Sys.WebForms.PageRequestManager.getInstance();
		prm.add_endRequest(endRequestHandler);

* If possible, use a WebService for the [tooltip manager's load-on-demand]({%slug tooltip/radtooltipmanager/load-content-on-demand%}#loading-content-via-a-webservice), to avoid subsequent AJAX requests.

* As a last resort, add the following function override at the end of your page. It will prevent the tooltip manager error handling, alerts and events.

	**JavaScript**

		Telerik.Web.UI.RadToolTipManager.prototype._onError = function (message) { }


## AJAX-enable RadToolTip Content


If you AJAX-enable the tooltip container, the tooltip contents will still perform full postbacks in most cases, because RadToolTip renders its popup as a direct child of the `<body>` element and, with this, moves the contents out of the UpdatePanel you have placed.

There are a few ways to handle this situation:

* AJAX-enable the tooltip contents themselves, e.g.:

	**ASP.NET**

		<telerik:RadToolTip ID="RadToolTip1" runat="server" RenderInPageRoot="false">
			<asp:UpdatePanel ID="Updatepanel1" runat="server" UpdateMode="Conditional">
				<ContentTemplate>
					<asp:Button ID="Button1" Text="I will perform an AJAX request now" runat="server" />
				</ContentTemplate>
			</asp:UpdatePanel>
		</telerik:RadToolTip>

* Set the [`RenderInPageRoot`](http://demos.telerik.com/aspnet-ajax/tooltip/examples/tooltipasformchild/defaultcs.aspx) property of the RadToolTip instance to `false`. Note that if its parent has absolute positioning, this may result in incorrect RadToolTip positions because it will not inherit the CSS rules of its parent. Also, note that the AJAX request will dispose the tooltip as well as the button and the parent element, so the tooltip will hide.

* Consider loading the tooltip contents via AJAX and a tooltip manager as shown in the [Update TargetControls with AJAX](http://demos.telerik.com/aspnet-ajax/tooltip/examples/targetcontrolsandajax/defaultcs.aspx?product=tooltip) demo. RadToolTipManager will automatically put an UpdatePanel around the content so it can load it and will thus fulfill the first bullet. The benefit is that content is [loaded on demand]({%slug tooltip/radtooltipmanager/load-content-on-demand%}) only instead of being always present on the page.

* In case the tooltip is in a databound control template (like a RadGrid TemplateColumn), consider using a [RadWindow](http://demos.telerik.com/aspnet-ajax/window/examples/overview/defaultcs.aspx) for the details popup. You can load an entire page in it that can have its own [AJAX setup]({%slug window/how-to/how-to-use-radwindow-with-ajax%}). The [Window - Edit Dialog for RadGrid](http://demos.telerik.com/aspnet-ajax/controls/examples/integration/gridandwindow/defaultcs.aspx?product=window) demo shows a similar scenario. RadToolTip is intended to be a simple informational popup and not a popup full of user interactions.
