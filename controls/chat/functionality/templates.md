---
title: Custom Templates 
page_title: Custom Templates | RadChat for ASP.NET AJAX Documentation
description: Custom Templates 
slug: chat/functionality/templates
tags: custom,templates
published: True
position: 2
---

# Custom Templates


The **RadChat** supports the definition of custom templates to fit any custom payload that is returned by the service.

The following example demonstrates how to implement a simple [Kendo UI template](https://docs.telerik.com/kendo-ui/framework/templates/overview) and to register it for the **RadChat**.

````ASPX
<telerik:RadChat runat="server" ID="RadChat1">
</telerik:RadChat>
 ````

````HTML
<script id="quote-template" type="text/x-kendo-template">
  <div class="#=styles.card# #=styles.cardRich#">
    <div class="#=styles.cardBody#">
      <div>
        <strong>Type:</strong>
        <span>#:coverage#</span>
      </div>
      <div>
        <strong>Car model:</strong>
        <span>#:make#</span></div>
      <div>
        <strong>Car cost:</strong>
        <span>#:worth#</span>
      </div>
      <div>
        <strong>Start date:</strong>
        <span>#:startDate#</span>
      </div>
      <hr/>
      <div>
        <strong>Total:</strong>
        <span>#:premium#</span>
      </div>
    </div>
  </div>
</script>
````

````JavaScript
function renderCustomTemplate() {
    // register template
    var QUOTE_CARD_TEMPLATE = kendo.template($('#quote-template').html());
    kendo.chat.registerTemplate("quote", QUOTE_CARD_TEMPLATE);

    var chat = $find("<%= RadChat1.ClientID %>");
    chat.renderAttachments({
        attachments: [{
            contentType: "quote",
            content: {
                "premium": 200.0,
                "coverage": "Full coverage",
                "make": "Opel",
                "model": "Astra",
                "worth": "4000",
                "startDate": "2018-10-10"
            }
        }],
        attachmentLayout: "carousel"
    }, chat.get_user());
}
````

# See Also

 * [RadChat Structure]({%slug chat/structure%})

 * [RadChat Server-Side Programming]({%slug diagram/server-side-programming%})

 * [RadChat Client-Side Programming]({%slug chat/client-side-programming/overview%})

 * [Kendo UI Templates](https://docs.telerik.com/kendo-ui/framework/templates/overview)

 