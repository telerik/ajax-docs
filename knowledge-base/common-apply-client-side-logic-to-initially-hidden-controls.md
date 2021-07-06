---
title: Apply Client-side Logic to Initially  Hidden Controls
description: Apply Client-side Logic to Initially  Hidden Controls. Check it now!
type: how-to
page_title: Apply Client-side Logic to Initially  Hidden Controls
slug: common-apply-client-side-logic-to-initially-hidden-controls
res_type: kb
---


## Description

The client-side object of a control is not created when its Visible="False" property is set, thus any client-side logic executed when the page is loaded will not affect the control (e.g., built-in function overrides). There are several ways in which this scenario can be handled, depending mainly on the moment when the control is shown (PostBack or a partial AJAX update):

 - Handle the `OnClientLoad` event of the hidden control;
 - Place the script inside the not visible container;
 - In case of AJAX – wrap the script in RadScriptBlock.


## Solution 

### Option 1: Handle the OnClientLoad event of the hidden control

The `OnClientLoad` event of each control inside the UI for ASP.NET AJAX suite is triggered when the client-side object of the control is created. With that said, the logic placed inside the handler of the `ClientLoad` event of a hidden control will be executed immediately after the control is shown.

For example:

````ASP.NET
<asp:Panel ID="HiddenWrapper" runat="server" Visible="false">
    <telerik:RadEditor ID="RadEditor1" runat="server" OnClientLoad="onLoad"></telerik:RadEditor>
</asp:Panel>
 
<script type="text/javascript">
    function onLoad(editor, args) {
        alert("The client-object of RadEditor is created.");
    }
</script>
````

````C#
protected void Btn1_Click(object sender, EventArgs e)
{
    HiddenWrapper.Visible = true;
}
````
````VB
Protected Sub Btn1_Click(ByVal sender As Object, ByVal e As EventArgs)
    HiddenWrapper.Visible = True
End Sub
````


### Option 2: Place the script inside the invisible container (shown on PostBack)

When the script is placed inside an initially hidden container, it also will be executed once the container is shown. If you are changing the visibility of the control on full PostBack, adding the script directly inside the hidden panel would suffice:

For example:

````ASP.NET
<telerik:RadButton ID="Btn1" runat="server" Text="Show" AutoPostBack="true" OnClick="Btn1_Click"></telerik:RadButton>
<asp:Panel ID="HiddenWrapper" runat="server" Visible="false">
    <telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
    <script type="text/javascript">
        Telerik.Web.UI.RadEditor.prototype._onKeyDown = function () { alert(1); };
    </script>
</asp:Panel>
````

````C#
protected void Btn1_Click(object sender, EventArgs e)
{
    HiddenWrapper.Visible = true;
}
````
````VB
Protected Sub Btn1_Click(ByVal sender As Object, ByVal e As EventArgs)
    HiddenWrapper.Visible = True
End Sub
````

###  

### Option 3: Place the script inside the invisible container (shown on PostBack)

In case you want to wrap the script inside a container, that will be shown on a AJAX call, you will need to wrap the added client-side logic inside **RadScriptBlock** (or in some cases - RadCodeBlock):

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="Btn1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="HiddenWrapper" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadButton ID="Btn1" runat="server" Text="Show" AutoPostBack="true" OnClick="Btn1_Click"></telerik:RadButton>
<asp:Panel ID="HiddenWrapper" runat="server" Visible="false">
    <telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
    <telerik:RadScriptBlock runat="server">
        <script type="text/javascript">
            Telerik.Web.UI.RadEditor.prototype._onKeyDown = function () { alert(1); };
        </script>
    </telerik:RadScriptBlock>
</asp:Panel>
````

````C#
protected void Btn1_Click(object sender, EventArgs e)
{
    HiddenWrapper.Visible = true;
}
````
````VB
Protected Sub Btn1_Click(ByVal sender As Object, ByVal e As EventArgs)
    HiddenWrapper.Visible = True
End Sub
````

## See Also

[RadCodeBlock and RadScriptBlock]({%slug ajaxmanager/radcodeblock-and-radscriptblock%})






