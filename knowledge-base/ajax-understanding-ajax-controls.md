---
title: Understanding AJAX Controls
description: Deep dive into RadAjaxPanel, RadAjaxManager and RadAjaxManagerProxy.
type: how-to
page_title: Understanding AJAX Controls - RadAjax
slug: understanding-ajax-controls
ticketid: 1441721
res_type: kb
---

## Description

Deep dive into the world of RadAjaxPanel, RadAjaxManager and RadAjaxManagerProxy.

One of the most common problems that can occur while working with Telerik Controls is the incorrect combination and configuration of AJAX Controls.

Common problems: 
* Controls are not getting updated
* Nothing happens when interacting with a control


## Solution

RadAjaxManager may seem a little complicated at first, but it's simple and easy to understand once you know the background of it.

### ASP UpdatePanel

Let's start with the generic ASP UpdatePanel that is used to enable AJAX for controls in ASP.NET WebForms projects. In order to enable AJAX for one or more controls using UpdatePanel, the controls need to be placed in the ContentTemplate of the UpdatePanel. 
Example Code snippets: Example showing how a button makes a partial post back and updates the Label with the current time.

````ASPX
<asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />
        <asp:Label ID="Label1" runat="server"></asp:Label>
    </ContentTemplate>
</asp:UpdatePanel>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        Label1.Text = DateTime.Now.TimeOfDay.ToString();
    }
}

protected void UpdateTime(object sender, EventArgs e)
{
    Label1.Text = DateTime.Now.TimeOfDay.ToString();
}
````
````VB

````

In this case, both the Button and the Label have been placed inside the UpdatePanel. Meaning they both have AJAX enabled and they both get updated when any of those triggers a partial post back. Partial post back means, that only the content inside the Update Panel is being sent to the server, and only the same content will be sent back as response containing any changes made to it. Content outside of the Update Panel will be left intact.

The above example is the most basic, but what if the Web Site is large and there are many controls, and the control that needs to trigger the Partial post back is not near the control that needs to be updated?

For that case, the Update Panel comes with Triggers where you can specify which control can trigger the partial post back and update the controls inside its ContentTemplate. 

In the following example, you can see how the Button is added to the Triggers of the UpdatePanel. When this button is clicked, it will trigger the Partial PostBack and update the Label inside the UpdatePanel.

````ASPX
<asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />

<%--Some other control here--%>
<%--Some other control here--%>

<asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <asp:Label ID="Label1" runat="server"></asp:Label>
    </ContentTemplate>
    <Triggers>
        <asp:AsyncPostBackTrigger ControlID="Button1" EventName="click" />
    </Triggers>
</asp:UpdatePanel>
````

You may update multiple labels with the same button

````ASPX
<asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />

<%--Some other control here--%>
<%--Some other control here--%>

<asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <asp:Label ID="Label1" runat="server"></asp:Label>
        <asp:Label ID="Label2" runat="server"></asp:Label>
        <asp:Label ID="Label3" runat="server"></asp:Label>
    </ContentTemplate>
    <Triggers>
        <asp:AsyncPostBackTrigger ControlID="Button1" EventName="click" />
    </Triggers>
</asp:UpdatePanel>
````

You may use multiple buttons to trigger the Post Back and update the label.

````ASPX
<asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />
<asp:Button ID="Button2" runat="server" Text="Button" OnClick="UpdateTime" />
<asp:Button ID="Button3" runat="server" Text="Button" OnClick="UpdateTime" />

<%--Some other control here--%>
<%--Some other control here--%>

<asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <asp:Label ID="Label1" runat="server"></asp:Label>
    </ContentTemplate>
    <Triggers>
        <asp:AsyncPostBackTrigger ControlID="Button1" EventName="click" />
        <asp:AsyncPostBackTrigger ControlID="Button2" EventName="click" />
        <asp:AsyncPostBackTrigger ControlID="Button3" EventName="click" />
    </Triggers>
</asp:UpdatePanel>
````

### Telerik AJAX Controls

## Using RadAjaxPanel

The RadAjaxPanel is a wrapper for the UpdatePanel. Meaning, when you use this control, you're using the UpdatePanel. For simplicity, however, this control was designed to enable AJAX for all Controls that are in it. On the other hand RadAjaxPanel does not provide the option to specify Triggers for Controls that reside outside.

The following example shows how to enable AJAX for a Label and a Button. And that is by placing the two controls in the RadAjaxPanel.

````ASPX
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
    <asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />
    <asp:Label ID="Label1" runat="server"></asp:Label>
</telerik:RadAjaxPanel>
````

The RadAjaxPanel provides a quick way to enable AJAX for all controls on the page, or for as many as wrapped into it.

## Using RadAjaxManager

Since PostBack Triggers are playing an important role, Telerik has designed the RadAjaxManager that allows you to specify which Control to trigger the partial PostBack and update the other.

Consider the RadAjaxManager as the settings part of the Update Panel. In the UpdatePanel, you can add controls in the ContentTemplate tag and PostBack Triggers in the Triggers tag. With the RadAjaxManager this is achieved by defining those in the AjaxSettings.

The following example will enable AJAX for the Label and make the Button update it.

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <%--The control that Triggers the Partial Post Back--%>
        <telerik:AjaxSetting AjaxControlID="Button1">
            <UpdatedControls>
                <%--The control that will be updated when Button1 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />
<asp:Label ID="Label1" runat="server"></asp:Label>
````

Regardless of the location of the Button1 and Label1, the AJAX will be enabled accordingly.

Consider the following configuration:

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <%--The control that Triggers the Partial Post Back--%>
        <telerik:AjaxSetting AjaxControlID="Button1">
            <UpdatedControls>
                <%--The control that will be updated when Button1 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<%--Some other control here--%>
<%--Some other control here--%>
<asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />
<%--Some other control here--%>
<%--Some other control here--%>
<asp:Label ID="Label1" runat="server"></asp:Label>
<%--Some other control here--%>
<%--Some other control here--%>
````

Here is what really happens.

Every control that is added to the AjaxSettings as UpdatedControl, will automatically be wrapped around a RadAjaxPanel. The above setting will render the following HTML structure on the page:

````HTML
<input type="button" name="Button1" value="Button" onclick="javascript:__doPostBack('Button1','')" id="Button1">
<div class="RadAjaxPanel" id="Label1Panel" style="display: block;">
	<span id="Label1">22:26:03.5698227</span>
</div>
````

RadAjaxManager utilizes the RadAjaxPanel to wrap controls inside based on the AjaxSettings specified.

Example settings of the RadAjaxManager to configure one Button as PostBack control that will update three Labels as UpdatedControls

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <%--The control that Triggers the Partial Post Back--%>
        <telerik:AjaxSetting AjaxControlID="Button1">
            <UpdatedControls>
                <%--The controls that will be updated when Button1 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
                <telerik:AjaxUpdatedControl ControlID="Label2" />
                <telerik:AjaxUpdatedControl ControlID="Label3" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />
<%--Some other control here--%>
<%--Some other control here--%>
<asp:Label ID="Label1" runat="server"></asp:Label>
<asp:Label ID="Label2" runat="server"></asp:Label>
<asp:Label ID="Label3" runat="server"></asp:Label>
````

RadAjaxManager example to configure multiple Buttons that will update a single Label.

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <%--The control that Triggers the Partial Post Back--%>
        <telerik:AjaxSetting AjaxControlID="Button1">
            <UpdatedControls>
                <%--The control that will be updated when Button1 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="Button2">
            <UpdatedControls>
                <%--The control that will be updated when Button2 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="Button3">
            <UpdatedControls>
                <%--The control that will be updated when Button3 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />
<asp:Button ID="Button2" runat="server" Text="Button" OnClick="UpdateTime" />
<asp:Button ID="Button3" runat="server" Text="Button" OnClick="UpdateTime" />
<%--Some other control here--%>
<%--Some other control here--%>
<asp:Label ID="Label1" runat="server"></asp:Label>
````

Configure multiple buttons to update multiple labels.

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <%--The control that Triggers the Partial Post Back--%>
        <telerik:AjaxSetting AjaxControlID="Button1">
            <UpdatedControls>
                <%--The control that will be updated when Button1 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
                <telerik:AjaxUpdatedControl ControlID="Label2" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="Button2">
            <UpdatedControls>
                <%--The control that will be updated when Button2 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="Button3">
            <UpdatedControls>
                <%--The control that will be updated when Button3 triggers the Partial Post Back--%>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
                <telerik:AjaxUpdatedControl ControlID="Label3" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<asp:Button ID="Button1" runat="server" Text="Button" OnClick="UpdateTime" />
<asp:Button ID="Button2" runat="server" Text="Button" OnClick="UpdateTime" />
<asp:Button ID="Button3" runat="server" Text="Button" OnClick="UpdateTime" />
<%--Some other control here--%>
<%--Some other control here--%>
<asp:Label ID="Label1" runat="server"></asp:Label>
<asp:Label ID="Label2" runat="server"></asp:Label>
<asp:Label ID="Label3" runat="server"></asp:Label>
````

HTML structure rendered by the above example:

````HTML
<input type="button" name="Button1" value="Button" onclick="javascript: __doPostBack('Button1', '')" id="Button1">
<input type="button" name="Button2" value="Button" onclick="javascript: __doPostBack('Button2', '')" id="Button2">
<input type="button" name="Button3" value="Button" onclick="javascript: __doPostBack('Button3', '')" id="Button3">


<div class="RadAjaxPanel" id="Label1Panel" style="display: block;">
    <span id="Label1">22:35:56.0906998</span>
</div>
<div class="RadAjaxPanel" id="Label2Panel" style="display: block;">
    <span id="Label2"></span>
</div>
<div class="RadAjaxPanel" id="Label3Panel" style="display: block;">
    <span id="Label3"></span>
</div>
````

## Using RadAjaxManagerProxy

Normally, you can only have one RadAjaxManager on a Page and the above examples demonstrate how to configure it in different ways. However, In case of using a combination of MasterPage, Content Page and UserControls we recommend utilizing the RadAjaxManagerProxy.

>note A project can only have one RadAjaxManager, but could have multiple RadAjaxManagerProxy(s), one on each page.

Any control ID specified in the AjaxSettings of RadAjaxManager or RadAjaxManagerProxy must be in the same entity/page, meaning that if the RadAjaxManager is located in the MasterPage, then the Controls defined in the settings must also be located there. 

Enable AJAX in the MasterPage

If enabling AJAX  for the loaded Content, the content and its children will be ajaxified.

**MasterPage.master**

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="Panel1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Panel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<asp:Panel ID="Panel1" runat="server">
    <asp:ContentPlaceHolder ID="MainContent" runat="server">
        <%--Everything here will be Ajaxified, you must avoid enabling AJAX additionally for the controls in here--%>
    </asp:ContentPlaceHolder>
</asp:Panel>
````

Enable AJAX inside the Content Page 
Only the UserControl and its child controls will be ajaxified.

**MasterPage.master**

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
</telerik:RadAjaxManager>

<asp:Panel ID="Panel1" runat="server">
    <asp:ContentPlaceHolder ID="MainContent" runat="server">
        <%-- ContentPage.ASPX will be loaded here --%>
    </asp:ContentPlaceHolder>
</asp:Panel>
 ````

**ContentPage.aspx**

````ASPX
<telerik:RadAjaxManagerProxy ID="RadAjaxManagerProxy1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="Panel2">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Panel2" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManagerProxy>

<asp:Panel ID="Panel2" runat="server">
    <%--WebUserControl--%>
    <%-- All Controls in the WebUserControl will have AJAX enabled --%>
</asp:Panel>
 ````

Enable AJAX inside WebUserControl
Only one control in inside the WebUserControl will be ajaxified.

**MasterPage.master**

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
</telerik:RadAjaxManager>

<asp:Panel ID="Panel1" runat="server">
    <asp:ContentPlaceHolder ID="MainContent" runat="server">
        <%-- ContentPage.ASPX will be loaded here --%>
    </asp:ContentPlaceHolder>
</asp:Panel>
 ````

**ContentPage.aspx**

````ASPX
<asp:Panel ID="Panel2" runat="server">
    <%--WebUserControl--%>
</asp:Panel>
```` 

**WebUserControl.ascx** (AJAX is enabled on the innermost level of the hierarchy. Master and Content pages must not enable AJAX)

````ASPX
<telerik:RadAjaxManagerProxy ID="RadAjaxManagerProxy1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManagerProxy>

<telerik:RadGrid ID="RadGrid1" runat="server"></telerik:RadGrid>
 ````

## See Also

* [RadAjaxPanel Client-Side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxpanel/client-side-programming/overview)
* [RadAjaxManager Client-Side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/client-side-programming/overview)

