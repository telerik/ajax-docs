---
title: Show RadAjaxLoadingPanel in the center of RadWindow on button Click
description: This knowledge base article provides two approaches to display a RadAjaxLoadingPanel in the center of a RadWindow while loading upon a button click - Telerik Web UI
type: how-to
page_title: Position RadAjaxLoadingPanel in the center of RadWindow during loading upon a button Click
slug: window-show-loading-panel-center-of-window
position: 
tags: 
ticketid: 1614535
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadAjaxPanel for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
This knowledge base article provides two approaches to display a RadAjaxLoadingPanel in the center of a RadWindow while loading upon a button click.

## Solution
To display a loading panel over the RadWindow contents, you have to wrap the content in a panel and set it to be an AjaxUpdatedControl when the AjaxControlID property is set to the ID of the save button. Note that the size of this panel depends on the content.

Here are two examples:

Example 1 with ajaxified asp:Panel

````ASPX
    <telerik:RadWindow ID="RadWindow1" runat="server" VisibleOnPageLoad="true" Skin="Default">
        <ContentTemplate>
            <telerik:RadAjaxManager ID="RadAjaxManager" runat="server" meta:resourcekey="RadAjaxManagerResource1" DefaultLoadingPanelID="RadAjaxLoadingPanelLogin" RequestQueueSize="2" ShowLoadingPanelForPostBackControls="True">
                <AjaxSettings>
                    <telerik:AjaxSetting AjaxControlID="RadButton1">
                        <UpdatedControls>
                            <telerik:AjaxUpdatedControl ControlID="Panel1" LoadingPanelID="RadAjaxLoadingPanelLogin" UpdatePanelCssClass="" />
                        </UpdatedControls>
                    </telerik:AjaxSetting>
                </AjaxSettings>
            </telerik:RadAjaxManager>
            <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanelLogin" runat="server" BackgroundTransparency="50" RenderMode="Auto" Skin="Black" />

            <asp:Panel ID="Panel1" runat="server" Height="100%">
                <asp:Button Text="RadButton" ID="RadButton1" runat="server" OnClick="RadButton1_Click" />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
            </asp:Panel>
        </ContentTemplate>
    </telerik:RadWindow>
````

````C#
    protected void RadButton1_Click(object sender, EventArgs e)
    {
        System.Threading.Thread.Sleep(1500);
    }
````
````VB
    Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
        System.Threading.Thread.Sleep(1500)
    End Sub
````

Example 2 with a div with runat="server"

````ASPX
    <telerik:RadWindow ID="RadWindow1" runat="server" VisibleOnPageLoad="true" AutoSize="true" Skin="Default">
        <ContentTemplate>
            <telerik:RadAjaxManager ID="RadAjaxManager" runat="server" meta:resourcekey="RadAjaxManagerResource1" DefaultLoadingPanelID="RadAjaxLoadingPanelLogin" RequestQueueSize="2" ShowLoadingPanelForPostBackControls="True">
                <AjaxSettings>
                    <telerik:AjaxSetting AjaxControlID="RadButton1">
                        <UpdatedControls>
                            <telerik:AjaxUpdatedControl ControlID="Panel1" LoadingPanelID="RadAjaxLoadingPanelLogin" UpdatePanelCssClass="" />
                        </UpdatedControls>
                    </telerik:AjaxSetting>
                </AjaxSettings>
            </telerik:RadAjaxManager>
            <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanelLogin" runat="server" BackgroundTransparency="50" RenderMode="Auto" Skin="Black" />
                <div style="height: 400px; width: 400px;" runat="server" id="Panel1">
                    <asp:Button Text="RadButton" ID="RadButton1" runat="server" OnClick="RadButton1_Click" />
                </div>
        </ContentTemplate>
    </telerik:RadWindow>
````

You can find more useful information for the RadWindow ajaxification best practices at [How to Use RadWindow with AJAX]({%slug window/how-to/how-to-use-radwindow-with-ajax%}).

   