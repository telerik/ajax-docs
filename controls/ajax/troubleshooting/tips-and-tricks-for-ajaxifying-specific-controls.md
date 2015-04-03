---
title: Tips and Tricks for Ajaxifying Specific Controls
page_title: Tips and Tricks for Ajaxifying Specific Controls | UI for ASP.NET AJAX Documentation
description: Tips and Tricks for Ajaxifying Specific Controls
slug: ajax/troubleshooting/tips-and-tricks-for-ajaxifying-specific-controls
tags: tips,and,tricks,for,ajaxifying,specific,controls
published: True
position: 10
---

# Tips and Tricks for Ajaxifying Specific Controls



This article includes tips and tricks that can be helpful in common scenarios where specific controls should be Ajax-enabled.

* [The usage of RadAjaxManager and RadAjaxPanel leades to reversed control's $create function execution order](#the-usage-of-radajaxmanager-and-radajaxpanel-leads-to-reversed-control's-$create-function-execution-order)

* [Ajaxifying invisible controls](#ajaxifying-invisible-controls)

* [Ajaxifying RadMultiPage and RadTabStrip controls](#ajaxifying-radmultipage-and-radtabstrip-controls)

* [Ajaxifying RadDock](#ajaxifying-raddock)

* [Ajaxifying container controls](#ajaxifying-container-controls)

## The usage of RadAjaxManager and RadAjaxPanel leads to reversed control's $create function execution order

This way the execution order is different than the same in regular post back. For example if you have the code below, you could see that the__$create__ functions for both inputs will execute in different order on __initial load__ and after __AJAX request__:

````ASPNET
	    <telerik:RadCodeBlock ID="RCB1" runat="server">
	        <script type="text/javascript">
	            function onTextBoxLoad(sender, args) {
	                alert(sender.get_id());
	            } 
	        </script>
	    </telerik:RadCodeBlock>
	    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	        <telerik:RadTextBox runat="server" ID="RadTextBox1">
	            <ClientEvents OnLoad="onTextBoxLoad" />
	        </telerik:RadTextBox>
	        <telerik:RadTextBox runat="server" ID="RadTextBox2">
	            <ClientEvents OnLoad="onTextBoxLoad" />
	        </telerik:RadTextBox>
	        <asp:Button ID="Button2" runat="server" Text="Do Ajax Call" />
	    </telerik:RadAjaxPanel>
````



Also the __$create function__ execution depends on the __AJAX settings__ order in case __RadAjaxManager__ control is used. The demo below demonstrates that on __AJAX call__ (click Button1) the __$create functions__ for the three buttons will execute in the order they are added in the __RadAjaxManager settings__ as updated controls and not in the original order that appears in __initial page load__:

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function buttonLoad(sender, args) {
	                alert(sender.get_id());
	            }
	        </script>
	    </telerik:RadCodeBlock>
	    <telerik:RadAjaxManager ID="RadAjaxManager3" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="RadButton1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="RadButton2" />
	                    <telerik:AjaxUpdatedControl ControlID="RadButton1" />
	                    <telerik:AjaxUpdatedControl ControlID="RadButton3" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
	    <telerik:RadButton ID="RadButton1" runat="server" OnClientLoad="buttonLoad" Text="Click">
	    </telerik:RadButton>
	    <telerik:RadButton ID="RadButton2" runat="server" OnClientLoad="buttonLoad">
	    </telerik:RadButton>
	    <telerik:RadButton ID="RadButton3" runat="server" OnClientLoad="buttonLoad">
	    </telerik:RadButton>
````



Since Q1 2014 release of the controls the both cases presented above could be handled by using the new __KeepOriginalOrderOfScriptDescriptorsDuringAjax__ setting, which should be globally set in the web.config file under the appSettings tag:

````ASPNET
	   <appSettings>
	    <add key="KeepOriginalOrderOfScriptDescriptorsDuringAjax" value="true"/>
	  </appSettings>
````



## Ajaxifying invisible controls

Note that you could not add control which is initially invisible on the page, to the __RadAjaxManager__ settings. The initiator or the updated control should be always placed in a visible container so that the manager can locate it when necessary.

````ASPNET
	    <telerik:RadAjaxManager ID="RadAjaxManager2" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Panel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
	    <asp:Button ID="Button1" runat="server" Text="Button" />
	    <asp:Panel runat="server" ID="Panel1">
	        <asp:Label ID="Label1" Visible="false" runat="server" Text="Label"></asp:Label>
	    </asp:Panel>
````



## Ajaxifying RadMultiPage and RadTabStrip controls

Single __PageView__ could not be added as AJAX initiator or updated control in the AJAX settings. The only possible approach is to add the whole __RadMultiPage__ in the __RadAjaxManager__ settings or wrap the whole control into __RadAjaxPanel__. When we set the __MultiPage__ as an updated control, you should also include the __TabStrip__ associated with it in the __AjaxSettings__.

````ASPNET
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="RadTabStrip1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="RadTabStrip1" />
	                    <telerik:AjaxUpdatedControl ControlID="RadMultiPage1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	            <telerik:AjaxSetting AjaxControlID="RadMultiPage1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="RadTabStrip1" />
	                    <telerik:AjaxUpdatedControl ControlID="RadMultiPage1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
	    <telerik:RadTabStrip ID="RadTabStrip1" runat="server" MultiPageID="RadMultiPage1"
	        SelectedIndex="0" AutoPostBack="True">
	        <Tabs>
	            <telerik:RadTab runat="server" Text="Tab # 1" PageViewID="Tab1" Selected="True">
	            </telerik:RadTab>
	            <telerik:RadTab runat="server" Text="Tab # 2" PageViewID="Tab2">
	            </telerik:RadTab>
	        </Tabs>
	    </telerik:RadTabStrip>
	    <telerik:RadMultiPage ID="RadMultiPage1" runat="server" SelectedIndex="0" Height="800px"
	        EnableEmbeddedScripts="true" Width="402px">
	        <telerik:RadPageView ID="Tab1" runat="server" ContentUrl="~/MultiTab1.aspx" Height="800px"
	            Width="948px">
	        </telerik:RadPageView>
	        <telerik:RadPageView ID="Tab2" runat="server" ContentUrl="~/MultiTab2.aspx">
	        </telerik:RadPageView>
	    </telerik:RadMultiPage>
````



## Ajaxifying RadDock

The RadDock is not a standard control and you can't update only one __RadDock__ separately. If you want to make an AJAX call you should update the parent __RadDockZone__.

## Ajaxifying container controls

Controls like __RadioButtonList__, __RadPane__, __RadDock__ should be added to the __RadAjaxManager__ settings except as AJAX initiator as __UpdatedControls__ also. This is due to their nature of container controls.
