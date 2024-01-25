---
title: Resolving Rendering issues When Signature is Not in Focus
description: Learn how to fix the issue where the signature stroke is distorted when the Signature control is not in focus upon loading in Telerik UI Controls for ASP.NET AJAX.
type: troubleshooting
page_title: Signature Control Loaded When Not In Focus | Troubleshooting | RadSignature for ASP.NET AJAX
slug: signature-control-rendering-issues-when-not-in-focus
tags: signature, control, focus, distorted, stroke, Telerik UI Controls, ASP.NET AJAX
res_type: kb
---
​
## Description
When the Signature control in Telerik UI Controls for ASP.NET AJAX is not in focus upon loading, the signature stroke appears distorted and does not match the configured styles. There is also an offset issue where the stroke does not align with the starting point. This issue occurs when the control is hidden in a tab using jQuery or when placed in an initially hidden container such as RadTabStrip or RadPageView.
​
## Solution
To resolve this issue, follow these steps:
1. Call the `$find("<%=txtSignature.ClientID%>").get_kendoWidget()._createPad();` method when the Signature control becomes visible.
2. If using RadWizard, add the following script to the page:
   ```
   <script>
   function OnClientButtonClicked(sender, args) {
       if (args.get_activeStep().get_title() == "Personal Info") {
           $find("<%=txtSignature.ClientID%>").get_kendoWidget()._createPad();
       }
   }
   </script>
   ```
   Make sure to replace `"Personal Info"` with the title of the step where the Signature control is located.
3. If using RadTabStrip or RadPageView, use the solution provided in the "Render Selected Page Only" demo. This ensures that only the content of the currently selected tab or page is loaded, preventing layout issues. Refer to the [Render Selected Page Only demo](https://demos.telerik.com/aspnet-ajax/tabstrip/examples/renderselectedpageonly/defaultcs.aspx) for implementation details.
​
**Example:**
```
<telerik:RadTabStrip ID="tabSignature" AutoPostBack="true" runat="server" Width="100%" MultiPageID="rmpgSignature" EnableAriaSupport="true">
    <Tabs>
        <telerik:RadTab Text="Type in Signature" aria-label="Type in Signature - Click to Open Tab" TabIndex="0" CssClass="midTab" Value="rtWrite" PageViewID="rpvwWrite" Selected="true">
        </telerik:RadTab>
        <telerik:RadTab Text="Draw Signature" aria-label="Draw Signature - Click to Open Tab" TabIndex="0" CssClass="midTab" Value="rtDraw" PageViewID="rpvwDraw">
        </telerik:RadTab>
    </Tabs>
</telerik:RadTabStrip>
<telerik:RadMultiPage RenderSelectedPageOnly="true" runat="server" ID="rmpgSignature">
    <telerik:RadPageView runat="server" ID="rpvwWrite" CssClass="pageView" Selected="true">
        <telerik:RadTextBox runat="server" Width="100%" MaxLength="100" ID="txtSignatureBox"></telerik:RadTextBox>
    </telerik:RadPageView>
    <telerik:RadPageView runat="server" ID="rpvwDraw" CssClass="pageView">
        <telerik:RadSignature runat="server" ID="txtSignature" Width="100%" HideLine="true" Maximizable="false">
        </telerik:RadSignature>
        <asp:HiddenField ID="HiddenField1" runat="server" />
    </telerik:RadPageView>
</telerik:RadMultiPage>
```
​
By following these steps, you can ensure that the Signature control renders correctly even when not in focus upon loading.
​
