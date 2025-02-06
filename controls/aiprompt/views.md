---
title: Views
page_title: AIPrompt Views
description:  "Learn about how to set the views of the WebForms AIPrompt"
slug: aiprompt/views
tags: aiprompt, views
published: True
position: 2
---

# Views

The AIPrompt allows you to show pre-defined and custom views. The [`Views`](/api/javascript/ui/aiprompt/configuration/views) configuration exposes a number of options that you can set for a view, such as text, name, or icon. Each view can be craeted in the markup or in the backend.

Below you will find a list of the supported view types: 

- `Prompt` - This view contains the prompt suggestions. Rendered by default.
- `Output` - This is where you see the generated content, along with the copy, retry, and rating buttons. Rendered by default.
- `Commands` - This view contains the actions a user can pick from to further process the generated content. Rendered only if a set of commands is passed.
- `Custom` - You can configure and show additional content based on your project's requirements. Use [Templates]({%slug aiprompt/templates/overview%}) to control the contents of the custom view.

## Create the Views 

### In the Markup

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="AIPrompt1" Width="450px">
    <Views>
        <telerik:AIPromptView Name="View1" Type="Prompt"  />
        <telerik:AIPromptView Name="View2" Type="Output" />
        <telerik:AIPromptView Name="View3" Type="Commands" />
        <telerik:AIPromptView Name="View4" Type="Custom" ButtonIcon="pencil" InitializeComponents="customFunction">
            <ViewTemplate>
                <div>
                    <p>This is a custom view</p>
                </div>
            </ViewTemplate>
            <FooterTemplate>
                <div class='custom-footer'>This is a custom footer</div>
            </FooterTemplate>
        </telerik:AIPromptView>
    </Views>
    <PromptCommands>
        <telerik:ViewPromptCommand ID="Command1" Text="Command one" Icon="x">
            <Items>
                <telerik:ViewPromptCommand ID="InnerCommand1" Text="Inner Command 1" Icon="paperclip" />
                <telerik:ViewPromptCommand ID="InnerCommand2" Text="Inner Command 2" Icon="calendar" />
                <telerik:ViewPromptCommand ID="InnerCommand3" Text="Inner Command 3" Icon="trash" />
            </Items>
        </telerik:ViewPromptCommand>
        <telerik:ViewPromptCommand ID="Command2" Text="Command two" Icon="pencil" />
        <telerik:ViewPromptCommand ID="Command3" Text="Command three" Icon="link" />
    </PromptCommands>
</telerik:RadAIPrompt>
````

### In the CodeBehind

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        AIPromptView promptView = new AIPromptView()
        {
            Name = "PromptView",
            Type = AIPromptViewType.Prompt,
        };

        RadAIPrompt1.Views.Add(promptView);

        AIPromptView outputView = new AIPromptView()
        {
            Name = "OutputView",
            Type = AIPromptViewType.Output,
        };

        RadAIPrompt1.Views.Add(outputView);

        AIPromptView commandsView = new AIPromptView()
        {
            Name = "CommandsView",
            Type = AIPromptViewType.Commands,
        };

        RadAIPrompt1.Views.Add(commandsView);

        ViewPromptCommand command1 = new ViewPromptCommand()
        {
            ID = "Command1",
            Text = "Command one",
            Icon = "x"
        };

        command1.Items.Add(new ViewPromptCommand() { ID = "InnerCommand1", Text = "Inner Command 1", Icon = "paperclip" });
        command1.Items.Add(new ViewPromptCommand() { ID = "InnerCommand2", Text = "Inner Command 2", Icon = "calendar" });
        command1.Items.Add(new ViewPromptCommand() { ID = "InnerCommand3", Text = "Inner Command 3", Icon = "trash" });

        RadAIPrompt1.PromptCommands.Add(command1);

        ViewPromptCommand command2 = new ViewPromptCommand()
        {
            ID = "Command2",
            Text = "Command two",
            Icon = "pencil"
        };

        RadAIPrompt1.PromptCommands.Add(command2);

        ViewPromptCommand command3 = new ViewPromptCommand()
        {
            ID = "Command3",
            Text = "Command three",
            Icon = "link"
        };

        RadAIPrompt1.PromptCommands.Add(command3);

        AIPromptView customView = new AIPromptView()
        {
            Name = "CustomView",
            Type = AIPromptViewType.Custom,
            ButtonIcon = "pencil",
            ViewTemplate = "<div class='custom-view'>This is a custom view</div>",
            FooterTemplate = "<div class='custom-footer'>This is a custom footer</div>",
            InitializeComponents = "customFunction"
        };

        RadAIPrompt1.Views.Add(customView);

        List<string> promptSuggestions = new List<string>
        {
            "Write an out of office message",
            "Write a short LinkedIn post for work/life balance.",
            "Write a short email to a colleague about a project",
        };

        RadAIPrompt1.PromptSuggestions = promptSuggestions.ToArray();
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        Dim promptView As AIPromptView = New AIPromptView() With {
            .Name = "PromptView",
            .Type = AIPromptViewType.Prompt
        }

        RadAIPrompt1.Views.Add(promptView)

        Dim outputView As AIPromptView = New AIPromptView() With {
            .Name = "OutputView",
            .Type = AIPromptViewType.Output
        }

        RadAIPrompt1.Views.Add(outputView)

        Dim commandsView As AIPromptView = New AIPromptView() With {
            .Name = "CommandsView",
            .Type = AIPromptViewType.Commands
        }

        RadAIPrompt1.Views.Add(commandsView)

        Dim command1 As ViewPromptCommand = New ViewPromptCommand() With {
            .ID = "Command1",
            .Text = "Command one",
            .Icon = "x"
        }

        command1.Items.Add(New ViewPromptCommand() With {
            .ID = "InnerCommand1",
            .Text = "Inner Command 1",
            .Icon = "paperclip"
        })

        command1.Items.Add(New ViewPromptCommand() With {
            .ID = "InnerCommand2",
            .Text = "Inner Command 2",
            .Icon = "calendar"
        })

        command1.Items.Add(New ViewPromptCommand() With {
            .ID = "InnerCommand3",
            .Text = "Inner Command 3",
            .Icon = "trash"
        })

        RadAIPrompt1.PromptCommands.Add(command1)

        Dim command2 As ViewPromptCommand = New ViewPromptCommand() With {
            .ID = "Command2",
            .Text = "Command two",
            .Icon = "pencil"
        }

        RadAIPrompt1.PromptCommands.Add(command2)

        Dim command3 As ViewPromptCommand = New ViewPromptCommand() With {
            .ID = "Command3",
            .Text = "Command three",
            .Icon = "link"
        }

        RadAIPrompt1.PromptCommands.Add(command3)

        Dim customView As AIPromptView = New AIPromptView() With {
            .Name = "CustomView",
            .Type = AIPromptViewType.Custom,
            .ButtonIcon = "pencil",
            .ViewTemplate = "<div class='custom-view'>This is a custom view</div>",
            .FooterTemplate = "<div class='custom-footer'>This is a custom footer</div>",
            .InitializeComponents = "customFunction"
        }

        RadAIPrompt1.Views.Add(customView)

        Dim promptSuggestions As List(Of String) = New List(Of String) From {
            "Write an out of office message",
            "Write a short LinkedIn post for work/life balance.",
            "Write a short email to a colleague about a project"
        }
        
        RadAIPrompt1.PromptSuggestions = promptSuggestions.ToArray()
    End If
End Sub
````

You can also create **Views** dynamically using JavaScript. To learn how, check the [Properties article]({%slug aiprompt/client-side-programming/properties#set-view%})


## Next Steps

- [Toolbar Items]({%slug aiprompt/toolbar-items%})
- [Integration with OpenAI API]({%slug aiprompt-integration-with-openai%})
- [Client-side Programming]({%slug aiprompt/client-side-programming/overview%})
- [Server-side Programming]({%slug aiprompt/server-side-programming/overview%})

