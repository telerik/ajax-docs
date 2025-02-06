---
title: Properties
page_title: AIPrompt JavaScript Properties
description: "JavaScript properties of the Telerik WebForms AIPrompt component."
slug: aiprompt/client-side-programming/properties
tags: properties
published: True
position: 1
---

# Properties

AIPrompt specific properties to add prompt outputs, set active view, and more.

## Getters

| Name                             | Return Type        | Description                                |
| ---                              | ---                | ---                                        |
| `get_kendoWidget()`              | `Object`           | Get the Kendo jQuery Widget.               |
| `get_views()`                    | `string[]`         | Get the Views of the AIPrompt.             |
| `get_activeView()`               | `Object`           | Get the Active View of the AIPrompt.       |
| `get_promptOutputs()`            | `Object`           | Get the Prompt Output.                     |
| `get_promptOutput(index)`        | `Object`           | Get a specific Prompt Output.              |
| `get_promptSuggestions()`        | `string[]`         | Get the Prompt Suggestions.                |
| `get_toolbarItems()`             | `Object`           | Get the Toolbar Items.                     |
| `get_promptCommands()`           | `Object`           | Get the Prompt Commands.                   |
| `get_showOutputRating()`         | `bool`             | Check if the Output Rating is shown.       |
| `get_messages()`                 | `Object`           | Get the Messages.                          |

## Setters

| Name                                    | Parameter                   | Description                              |
| ---                                     | ---                         | ---                                      |
| `set_activeView(index)`                 | `string or number`          | Set the Active View of the AIPrompt.     |
| `set_promptSuggestions(newSuggestions)` | `string[]`                  | Add new Prompt Suggestions.              |
| `set_view(newView)`                     | `Object`                    | Add new Views.                           |
| `set_promptOutput(promptOutput)`        | `Object`                    | Add a new Prompt Output.                 |
| `set_toolbarItems(newToolbarItems)`     | `Object`                    | Add new Toolbar Item.                    |
| `set_promptCommands(newPromptCommands)` | `Object`                    | Add new Prompt Commands Item.            |
| `set_showOutputRating(showRating)`      | `bool`                      | Toggle the Output Rating visibility.     |
| `set_messages(newMessages)`             | `Object`                    | Add new Messages.                        |

Most of the above methods expect an Object to be passed to them, in order for the API methods to work properly. Below you can find a list of method-specific objects.

### Set Prompt Suggestions

`set_promptSuggestions(newSuggestions)` expects a **string array**:

````JavaScript
var prompt = $find("<%= RadAIPrompt1.ClientID %>");
var newSuggestions = ["suggestion 1", "suggestion 2", "suggestion 3"];

prompt.set_promptSuggestions(newSuggestions);
````

### Set View

`set_view(newView)` expects a **View** object to be passed to it. 

````JavaScript
var aiPrompt = $find("<%= RadAIPrompt1.ClientID %>");

var views = {
    prompt: {
        index: 0,
        name: "prompt",
        type: "kendo.ui.AIPromptPromptView",
        buttonIcon: "comment",
        buttonText: "Ask AI",
    },
    output: {
        index: 1,
        name: "output",
        type: "kendo.ui.AIPromptOutputView",
        buttonIcon: "comment",
        buttonText: "Output",
    },
    commands: {
        index: 2,
        name: "commands",
        type: "kendo.ui.AIPromptCommandsView",
        buttonIcon: "more-horizontal",
        buttonText: "",
        promptCommands: [],
    },
    custom: {
        index: 3,
        name: "custom",
        type: "kendo.ui.AIPromptCustomView",
        buttonText: "Custom",
        buttonIcon: "pencil",
        viewTemplate: "This is a template",
        footerTemplate: "This is a footer",
    }
}

aiPrompt.set_view(views);
````

### Set Prompt Output

`set_promptOutput(promptOutput)` expects a **Prompt Output** object to be passed to it. 

````JavaScript
var aiPrompt = $find("<%= RadAIPrompt1.ClientID %>");

var promptOutput = {
    id: crypto.randomUUID(),
    prompt: "New Prompt",
    output: "New Output",
};

aiPrompt.set_promptOutput(promptOutput);
````

### Set Toolbar Items

`set_toolbarItems(newToolbarItem)` expects a **Toolbar Item** object to be passed to it. 

````JavaScript
var aiPrompt = $find("<%= RadAIPrompt1.ClientID %>");

var toolbarItems = [{
    type: "spacer"
}, {
    type: "button",
    icon: "x",
    click: function () {
        alert("clicked");
    }  
}]

aiPrompt.set_toolbarItems(toolbarItems);
````

### Set Prompt Commands 

`set_promptCommands(newPromptCommands)` expects a **Prompt Commands** object to be passed to it. 

````JavaScript
var aiPrompt = $find("<%= RadAIPrompt1.ClientID %>");

var newPromptCommands = [{
    id: crypto.randomUUID(),
    text: "New Prompt Command",
    icon: "brush",
}, {
    id: crypto.randomUUID(),
    text: "New Prompt Command 2",
    icon: "x",
    items: [{
        id: crypto.randomUUID(),
        text: "New Prompt Command 2.1",
        icon: "x",
    }, {
        id: crypto.randomUUID(),
        text: "New Prompt Command 2.2",
        icon: "x",
    }]
}];

aiPrompt.set_promptCommands(newPromptCommands);
````

### Set Messages

`set_messages` expects a **Messages** objct to be passed to it.

````JavaScript
var aiPrompt = $find("<%= RadAIPrompt1.ClientID %>");

var newMessages = {
    promptView: "Ask LLM",
    outputView: "See Output",
    commandsView: "",
    customView: "This is custom",
    promptPlaceholder: "Place text here",
    promptSuggestions: "Some sugestions for you",
    generateOutput: "Prompt!",
    outputTitle: "AI generated this",
    outputRetryTitle: "AI generated this",
    copyOutput: "Ctrl + C",
    retryGeneration: "Ctrl + R",
    ratePositive: "",
    rateNegative: ""
}

aiPrompt.set_messages(newMessages);
````

## Next Steps

- [Events]({%slug aiprompt/client-side-programming/events%})
