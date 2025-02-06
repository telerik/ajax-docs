---
title: Footer Template
page_title: AIPrompt Footer Template
description: "Learn about how to use the Prompt Footer Template with the WebForms AIPrompt"
slug: templates/footertemplate
position: 4
---

## Footer Template

The template of the view footer. It can be a string or a Kendo Template.

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1" Width="400px">
    <Views>
        <telerik:AIPromptView Name="PromptView" Type="Prompt" />
        <telerik:AIPromptView Name="CustomView" Type="Custom" ButtonIcon="pencil" ButtonText="Custom View" InitializeComponents="customFunction">
            <FooterTemplate>
                Custom Footer
            </FooterTemplate>
        </telerik:AIPromptView>
    </Views>
</telerik:RadAIPrompt>
````

````JavaScript
function customFunction() {
    alert("View initialized")
}
````
