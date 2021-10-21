---
title: Placeholder is not updated by RadAjaxManager
description: Placeholder is not updated by RadAjaxManager. Check it now!
type: how-to
page_title: Placeholder is not updated by RadAjaxManager
slug: ajax-placeholder-is-not-updated-by-radajaxmanager
res_type: kb
---


### PROBLEM

`<asp:Placeholder>` and `<asp:Literal>` controls and their content do not get updated by RadAjaxManager.

### DESCRIPTION

RadAjaxManager looks for rendered content that it will wrap in an update panel. This means that the controls it AJAX-enables need to render on the page with the ID provided in the AjaxSettings.

Placeholders and LiteralControl instances do not render a wrapping element with their ID and so RadAjaxManager cannot get a proper handle on them. Sometimes this can also be true for user controls, depending on the concrete control.

You can get the same behavior for controls that initially had `Visible="false"` so they did not render.

### SOLUTION

Wrap the content in an element that will render an HTML element with its ID. For example, an `<asp:Panel>` or `<asp:Label>`.

```ASP.NET
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="Button1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Panel1" />
                <%--instead of ControlID="PlaceHolder1"--%>
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
<asp:Button Text="partial rendering" runat="server" ID="Button1" />
<asp:Panel runat="server" ID="Panel1">
    <asp:PlaceHolder runat="server" ID="PlaceHolder1"></asp:PlaceHolder>
</asp:Panel>
```



