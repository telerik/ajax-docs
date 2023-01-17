---
title: Image Export
page_title: Image Export - RadSignature
description: Check our Web Forms article about exporting of RadSignature as PNG image.
slug: signature/functionality/image-export
published: True
position: 1
---

# Image Export

You can export the ASP.NET AJAX RadSignature control to a PNG file by leveraging the the Kendo UI [saveAs](https://docs.telerik.com/kendo-ui/api/javascript/kendo/methods/saveas) method.

To achieve this functionality, retrieve the base64 value of the Signature by using the get_value() method of the client-side Signature object:

````ASPX
<telerik:RadButton runat="server" ID="RadButton1" Text="Export as PNG" AutoPostBack="false" OnClientClicked="exportAsPngClicked" />

<telerik:RadSignature runat="server" ID="RadSignature1" Height="270" Width="400">
    <ClientEvents OnLoad="signatureLoad" />
</telerik:RadSignature>

<telerik:RadScriptBlock runat="server" ID="RadScriptBlock1">
    <script>
        var signature;
        function signatureLoad(sender, args) {
            signature = sender;
        }

        function exportAsPngClicked(sender, args) {
            kendo.saveAs({
                dataURI: signature.get_value(),
                fileName: "signature.png"
            })
        }
</script>
</telerik:RadScriptBlock>
````


# See Also

 * [Export as Image Demo for the RadSignature](https://demos.telerik.com/aspnet-ajax/signature/applicationscenarios/exportasimage/defaultcs.aspx)


