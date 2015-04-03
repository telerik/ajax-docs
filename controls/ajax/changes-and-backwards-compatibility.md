---
title: Changes and Backwards Compatibility
page_title: Changes and Backwards Compatibility | UI for ASP.NET AJAX Documentation
description: Changes and Backwards Compatibility
slug: ajax/changes-and-backwards-compatibility
tags: changes,and,backwards,compatibility
published: True
position: 1
---

# Changes and Backwards Compatibility



## Telerik RadAjax for ASP.NET AJAX Q2 2010

Since Q2 2010 all major changes for the controls are listed in the official Release Notes posted [here](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)

## Telerik RadAjax for ASP.NET AJAX Q1 2010

RadAjax for ASP.NET AJAX which is part of the Q1 2010 release is fully backwards compatible with its previous version (Q3 2009).However you should mind the following differences:

* RadAjaxLoadingPanel control has new images for its build-in Skins. These new images are suitable for any background.

* The obsolete loading images which are not part of the RadAjaxLoadingPanel Skins are removed from the Telerik.Web.UI assembly.

## Telerik RadAjax for ASP.NET AJAX Q3 2009

RadAjax for ASP.NET AJAX which is part of the Q3 2009 release is fully backwards compatible with its previous version (Q2 2009).

## Telerik RadAjax for ASP.NET AJAX Q2 2009

RadAjax for ASP.NET AJAX which is part of the Q2 2009 release is fully backwards compatible with its previous version (Q1 2009).

## Telerik RadAjax for ASP.NET AJAX Q1 2009

RadAjax for ASP.NET AJAX which is part of the Q1 2009 release is fully backwards compatible with its previous version (Q3 2008). The only difference is that if you would like to disable the skinning mechanism for the RadAjaxLoadingPanel, you merely need to set Skin = "" for the control and specify your custom image to be displayed inside it, for example:

````ASPNET
	    <telerik:RadAjaxLoadingPanel ID="LoadingPanel1" runat="server" Skin="">
	        <asp:Image ID="Image1" runat="server" ImageUrl="~/loading1.gif">
	        </asp:Image>
	    </telerik:RadAjaxLoadingPanel>
````



## Telerik RadAjax for ASP.NET AJAX Q3 2008

RadAjax for ASP.NET AJAX which is part of the Q3 2008 release is fully backwards compatible with its previous version (Q2 2008).

## Telerik RadAjax for ASP.NET AJAX Q2 2008

RadAjax for ASP.NET AJAX which is part of the Q2 2008 release is fully backwards compatible with its previous version (Q1 2008).

## Telerik RadAjax Q3 2007 -->Telerik RadAjax Q1 2008

1. __Client-side API__The compatibility layer which was used in the transition beta period is now removed.All client-side methods strictly follow the ASP.NET AJAX conventions and are lower case.For instance:

* __a__jaxRequest(eventArgs)/ __a__jaxRequestWithTarget(sender, eventArgs) should always be usedfrom now on (methods/events start with lower case letters)

* __A__jaxRequest(eventArgs)/ __A__jaxRequestWithTarget(sender, eventArgs) are no longer supported.This also results in significant improvement in page loading times.

1. __Client-side validation__Client-side validation is now supported only under full trust. Support for medium trust is missing at this time.

1. __Full DNN support__RadAjax for ASP.NET has some limitations when running in medium trust. To make it work youshouldchangethe base type of your pages that use radjax from "System.Web.UI.Page"to "Telerik.Web.UI.RadAjaxPage". However DNN module controls Inherit from Entities.Modules.PortalModuleBase and thus you cannot simply change the page's base class. For such cases you should use the new property __RestoreOriginalRenderDelegate__. By default it is true, if you work in DNN or medium trust, you should set that to false.

1. __Full Ajax control extender support__Previously there were some problems with certain extenders under certain conditions. These problems have been fixed.

## Telerik RadAjax Q2 2007 -->Telerik RadAjax Q3 2007

>caution All fields with uppercase naming are now obsolete. Please use the new changed fields to reflect the client-side model based on the MS AJAX framework e.g.: __this.AjaxSettings --> get_ajaxSettings()__ 
>


1. __Assembly and namespace changes__Due to the changes in assembly and namespace's name, you need to change the Register directive to point to __Telerik.Web.UI__ instead of __Telerik.Web.Controls__. Here is how it should look now:

````ASPNET
	    <%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" aAsembly="Telerik.Web.UI" %>
````

**The same change affects the code-behind - where you have

````C#
	    using/Imports Telerik.Web.Control
````

you have to change it into

````C#
	    using/Imports Telerik.Web.UI
````



1. __ScriptManager control__There must be always an __ASP:ScriptManager__ control placed on the page before the RadAjax controls. Here is a sample code:

````ASPNET
	    <asp:ScriptManager ID="ScriptManager" runat="server" />
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Panel2" />
	                    <telerik:AjaxUpdatedControl ControlID="Label1" />
	                    <telerik:AjaxUpdatedControl ControlID="Panel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
````



1. __RadAjaxLoadingPanel class__The old __AjaxLoadingPanel__ class is renamed to __RadAjaxLoadingPanel__. You need to change the source as follows:

````ASPNET
	    <telerik:RadAjaxLoadingPanel ID="LoadingPanel1" runat="server">
	        Loading content ...
	    </telerik:RadAjaxLoadingPanel>
````



1. __Only one instance of RadAjaxManager control is supported__The previous limitation of single RadAjaxManager __per naming container__ is extended so that now there should be only one instance of the control on the whole page. This means that you cannot have one manager on the main page containing a user control and another inside the user control itself (or Master and content page). Otherwise an error is thrown.Instead, having a manager instance on the main page/MasterPage, one can already add a __RadAjaxManagerProxy__ in the user control/content page. The Proxy control purpose is similar to the one of [ScriptManagerProxy](http://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanagerproxy.aspx) and it could be used to __add the necessary settings design-time__ within the user control/content page, instead of adding them programmatically finding the manager from the main page/master page.Additionally, if one still needs the manager instance at the code of a WebUserControl for example, she can get the manager by __RadAjaxManager.GetCurrent()__ method call. The method will return null if there is no manager on the page, similar to [ASP:ScriptManager implementation](http://msdn.microsoft.com/en-us/library/bb398991.aspx).

1. __Client-Side events OnRequestSent and OnResponseReceived missing__Those events will not be implemented in RadAjax for ASP.NET AJAX as they are no longer needed.

1. __Server code blocks in form script tag__Any code blocks (i.e. <% ... %>) on the page like the following:

````JavaScript
	    <script type="text/javascript">
	        function AjaxReq(args) {
	            $find("<%=RadAjaxPanel1.ClientID %>").ajaxRequestWithTarget("<%= Button1.UniqueID %>", '');
	        }   
	    </script>
````

must be wrapped inside the [RadCodeBlock control]({%slug ajax/radcodeblock-and-radscriptblock%}):

````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	        
	        function AjaxReq(args) {
	            $find("<%=RadAjaxPanel1.ClientID %>").ajaxRequestWithTarget("<%= Button1.UniqueID %>", '');
	        }
	        </script>
	    </telerik:RadCodeBlock>
````

otherwise a server error is thrown: System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>).__Why is adding RadCodeBlock necessary?__The way code blocks are implemented in ASP.NET may interfere with ajax manager's render interception mechanism. That is why we have created the workaround of enclosing those code blocks in a RadCodeBlock control. Wrapping the blocks within a RadCodeBlock control will isolate the effects to that control only and the partial rendering code will not be affected.

1. __Adding AJAX settings dynamically in Page_Init event is no longer supported__Use Page_Load/PreRender instead. More info about adding the AJAX settings dynamically is available here.

1. __RadAjaxNamespace and AjaxNS are no longer available__In case they've been used in a client script to access __RadAjax__ controls, those should be get via __$find("RadAjaxLoadingPanel1")__ pattern.

1. __UpdatedControlsEventArgs class renamed to AjaxUpdatedControlsEventArgs__The arguments class of __ResolveUpdatedControls__ event has been renamed.

1. __Showing/Hiding controls with AJAX__This scenario works properly with the new RadAjaxManager, while a workaround with always visible control on the page was required for the previous version

1. __ResolveUpdatedControls event is no more supported__The ResolveUpdatedControls event has been removed from the RadAjax for ASP.NET AJAX as it no longer serves its purpose. Initially created for handling scenarios in which the initiator of the ajax request is removed from the page, then was extended to handle AjaxSettings modifications in runtime. The event is now superseded by the [AjaxSettingCreating event]({%slug ajax/server-side-programming/events/onajaxsettingcreating%}).

# See Also

 * [Known Limitations]({%slug ajax/troubleshooting/known-limitations%})[](0543D13B-3745-43F0-B1B1-99A4E654AE2E)
