---
title: Overview
page_title: SmartPasteButton Overview
description: "Try now the Telerik UI for ASP.NET AJAX SmartPasteButton component that intelligently extracts structured data from clipboard content and automatically fills form fields using AI processing. This component is a server-side, ASP.NET WebForms wrapper over the Kendo UI for jQuery SmartPasteButton widget"
slug: smartpastebutton/overview
tags: overview
published: True
position: 0
CTAControlName: WebForms SmartPasteButton
---

# WebForms SmartPasteButton Overview

The Telerik WebForms SmartPasteButton is an AI-powered component that extracts structured data from clipboard content and automatically fills form fields. When users paste unstructured text from emails, documents, or other sources, the SmartPasteButton sends the content to an AI service, which processes the text and returns structured field values that are intelligently distributed to relevant form fields. This component is an ASP.NET WebForms wrapper over the [Kendo UI SmartPasteButton widget](https://docs.telerik.com/kendo-ui/controls/smartpastebutton/overview).

{% if site.has_cta_panels == true %}
{% include cta-panel-overview.html %}
{% endif %}

!["SmartPasteButton Overview"](images/spb-overview.png "SmartPasteButton Overview")

The SmartPasteButton works with regular HTML forms using standard input elements (text, email, tel, etc.) as well as ASP.NET AJAX components, providing an intelligent way to reduce manual data entry and improve form completion efficiency.

To see the SmartPasteButton in action, you can check out the live examples at [WebForms SmartPasteButton demos](https://demos.telerik.com/aspnet-ajax/smartpastebutton/overview/defaultcs.aspx).

## How It Works

The component follows this workflow:

1. **Retrieves the active form fields** - Automatically detects form controls within its form context
2. **Shapes the data into FormFields** - Creates metadata that will be passed to the AI Service
3. **AI Service processes the data** - Returns **FieldValues** which are intelligently distributed to relevant fields

## Next Steps

- [Getting Started with the Telerik WebForms SmartPasteButton]({%slug smartpastebutton/getting-started%})
- [Change the Appearance]({%slug smartpastebutton/appearance%})
- [Form Fields]({%slug smartpastebutton/form-fields%})
- [Error Handling]({%slug smartpastebutton/error-handling%})
- [AI Service Integration]({%slug smartpastebutton/ai-service-integration%})
- [Keyboard Navigation]({%slug smartpastebutton/accessibility/keyboard-navigation%})
- [Client-side Programming]({%slug smartpastebutton/client-side-programming/overview%})
- [Server-side Programming]({%slug smartpastebutton/server-side-programming/overview%})
