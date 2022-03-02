---
title: Telerik Controls Appearance Is Incorrect or Distorted
page_title: Telerik Controls Appearance Is Incorrect or Distorted
description: "When working with Telerik UI for ASP.NET AJAX, the appearance of the Telerik controls is incorrect or distorted."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/skins-troubleshooting
tags: telerik, asp, net, ajax, troubleshooting, skins, appearance, controls, distorted, incorrect
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

The appearance of the Telerik UI for ASP.NET AJAX controls is incorrect and includes the following issues:

* Bad element alignment.

* Missing borders, shadows, or gradients.

* Unexpected design change between dev and production environments.

## Cause

The issue may be caused by a number of reasons:

* Global CSS rules affect HTML elements.

* Your Internet Explorer browser is entering Compatibility Mode, which is [not supported](https://www.telerik.com/aspnet-ajax/tech-sheets/browser-support).

* The network requests used to fetch the control skins or scripts do not return successfully.

* If you are using some form of authentication mechanism in your site, the [HTTP handlers]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig) which the Telerik controls use to fetch the needed resources, may get blocked.

* The page contains controls of mixed [render modes]({%slug controls/render-modes%}). For example, a Button on the master page has `RenderMode="Classic"` and a Button on a user control has `RenderMode="Lightweight"`. All controls of the same type and their child controls must have the same render mode.

* The wrapping element of the control has `style="display: none"` or was initially hidden and then shown with JavaScript. Generally, the initialization of controls with such an attribute has to be avoided because dimensions and sizing cannot be calculated for elements that are not rendered by the browser.

* The browser zoom is different from 100%. In such cases, the zoom not only increases the font size, but also zooms the entire page which may produce visual glitches when the layout is based on background images or sprites.

## Solution

Depending on the use case, apply the respective approach:

* (Global CSS rules) To solve the issue, refer to the article on [distorted appearance]({%slug window/troubleshooting/distorted-appearance%}). The provided example uses the Window but the approach applies to all controls in the suite.

* (IE Compatibility mode) Run your IE browser in Standard mode by following any of the approaches:

	* Go to **Compatibility View Settings** menu and **Unselect** the "**Display intranet sites in Compatibility Mode**" checkbox.

	* Speak with your local administrators so they enforce this checkbox rule as a group policy.

	* Add an `X-UA Compatible` meta tag to your page similar to the following (HTML):

				<head id="Head1" runat="server">
					<title></title>
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />

		Alternatively, set it as an HTTP header through your `web.config`:

			<system.webServer>
			    <httpProtocol>
			      <customHeaders>
			        <add name="X-UA-Compatible" value="IE=edge" />
			      </customHeaders>
			    </httpProtocol>
			</system.webServer>

* (Network requests) If you are using the [scripts CDN]({%slug scriptmanager/cdn-support/overview%}) or the [skins CDN]({%slug stylesheetmanager/cdn-support/overview%}), ensure the cloud can be accessed from the user network. Otherwise, disable the CDN and fall back to the default mode of using WebResource requests.

* (Blocked HTTP handlers) Ensure all requests return successfully by, for example, adding a `<location>` element for the Telerik handlers that will allow anonymous access (`web.config`):

			<configuration>
			...
			<location path="Telerik.Web.UI.WebResource.axd">
			   <system.web>
			     <authorization>
			       <allow users="*"/>
			     </authorization>
			   </system.web>
			 </location>
			...
			</configuration>

* (Mixed render modes) To identify and debug the mixed render mode issue, refer to the article on [determining the render mode of all Telerik controls and catching mixed render mode issues](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-determine-mixed-render-mode).

* (Hidden wrapping element) If having appearance or alignment issues when showing controls in such cases, call the `repaint()` method each Telerik UI for ASP.NET AJAX control exposes. For controls that wrap Kendo UI widgets, get a reference to the widget and call its [`resize()` method](https://docs.telerik.com/kendo-ui/api/javascript/ui/widget#methods-resize).

* (Browser zoom not 100%) For more information on solving this issue, refer to the [Browser Zoom - Why Does It Break Your Page And How To Avoid It](https://www.telerik.com/blogs/browser-zoom---why-does-it-break-your-page-and-how-to-avoid-it) blog post.

	Alternatively, to avoid the visual glitches caused by the background images and sprites, use the `Lightweight` `RenderMode` of the controls. It is based on HTML5 and CSS3 and uses font icons instead of images.
