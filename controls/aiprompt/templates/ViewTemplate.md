---
title: View Template
page_title: AIPrompt View Template
description: "Learn about how to use the Prompt View Template with the WebForms AIPrompt"
slug: templates/viewtemplate
position: 3
---

## View Template

The template of the view content. It can be a string or a Kendo Template.

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1" Width="400px">
    <Views>
        <telerik:AIPromptView Name="PromptView" Type="Prompt" />
        <telerik:AIPromptView Name="CustomView" Type="Custom" ButtonIcon="pencil" ButtonText="Custom View" InitializeComponents="customFunction">
            <ViewTemplate>
                <div class='custom-view'>This is a custom view</div>
            </ViewTemplate>
        </telerik:AIPromptView>
    </Views>
</telerik:RadAIPrompt>
````

````JavaScript
function customFunction() {
    alert("View initialized")
}
````

## Next Steps

- [FooterTemplate]({%slug templates/footertemplate%})
