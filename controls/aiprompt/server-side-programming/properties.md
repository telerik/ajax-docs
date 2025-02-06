---
title: Properties
page_title: AIPrompt Server-side Properties
description: "Server-side properties of the Telerik WebForms AIPrompt component."
slug: aiprompt/server-side-programming/properties
tags: properties
published: True
position: 1
---

# Properties

AIPrompt specific properties to customize the Control.

## AIPrompt Properties

| Name                            | Return type                                            | Description                                      |
| ---                             | ---                                                    | ---                                              |
| `ActiveViewIndex`               | `int`                                                  | Get/Set the active view.                         |
| `PromptSuggestionItemTemplate`  | `string`                                               | Get/Set the Template of the `PromptSuggestion`.  |
| `ShowOutputRating`              | `bool`                                                 | Get/Set the visibility of the output rating.     |
| `PromptSuggestions`             | `string[]`                                             | Get/Set the `PromptSuggestion` array.            |
| `Views`                         | `Telerik.Web.UI.AIPrompt.ViewsCollection`              | Get the collection of `AIPromptView`.            |
| `ToolbarItems`                  | `Telerik.Web.UI.AIPrompt.ToolbarItemsCollection`       | Get the collection of `ToolbarItems`.            |
| `PromptCommands`                | `Telerik.Web.UI.AIPrompt.ViewPromptCommandsCollection` | Get the collection of `ViewPromptCommand`.       |
| `PromptOutputs`                 | `Telerik.Web.UI.AIPrompt.PromptOutputsCollection`      | Get the collection of `PromptOutputs`.           |
| `Messages`                      | `Telerik.Web.UI.AIPrompt.Messages`                     | Get/Set the `Messages` displayed in the Control. |

## View Properties

| Name                   | Return type                         | Description                                             |
| ---                    | ---                                 | ---                                                     |
| `Name`                 | `string`                            | Get/Set the View Name.                                  |
| `Type`                 | `Telerik.Web.UI.AIPromptViewType`   | Get/Set the View Type.                                  |
| `ButtonIcon`           | `string`                            | Get/Set the View Icon.                                  |
| `ButtonText`           | `string`                            | Get/Set the View Text.                                  |
| `InitializeComponents` | `function`                          | Set a function that will be initialzed with the view.   |

## Toolbar Item Properties

| Name                            | Return type                                            | Description                    |
| ---                             | ---                                                    | ---                            |
| `Type`                          | `Telerik.Web.UI.ToolbarItemType`                       | Get/Set the Toolbar Item type. |
| `Icon`                          | `string`                                               | Get/Set the Icon.              |
| `Click`                         | `function`                                             | Set a click function.          |

## Prompt Command Properties

| Name                            | Return type     | Description                      |
| ---                             | ---             | ---                              |
| `ID`                            | `string`        | Get/Set the Prompt Command ID.   |
| `Text`                          | `string`        | Get/Set the Prompt Command Text. |
| `Icon`                          | `string`        | Get/Set the Prompt Command Icon. | 

## Prompt Output Properties

| Name                            | Return type     | Description                      |
| ---                             | ---             | ---                              |
| `ID`                            | `string`        | Get/Set the Prompt Output ID.    |
| `Prompt`                        | `string`        | Get/Set the Prompt.              |
| `Output`                        | `string`        | Get/Set the Output.              | 

## Messages

| Name                  | Return type | Description                                                                                                       |  
| ---                   | ---         | ---                                                                                                               |  
| `CommandsView`        | `string`    | Gets/Sets the text of the commands view button in the ToolBar.                                                    |
| `CopyOutput`          | `string`    | Gets/Sets the text of the copy output button in the output element.                                               |
| `CustomView`          | `string`    | Gets/Sets the text of the custom view button in the ToolBar.                                                      |
| `GenerateOutput`      | `string`    | Gets/Sets the text of the generate output button in the prompt view footer.                                       |
| `OutputRetryTitle`    | `string`    | Gets/Sets the title of the output card when the output is generated after clicking the retry button of an output. |
| `OutputTitle`         | `string`    | Gets/Sets the title of the output card when the output is generated.                                              |
| `OutputView`          | `string`    | Gets/Sets the text of the commands view button in the ToolBar.                                                    |
| `PromptPlaceholder`   | `string`    | Gets/Sets the placeholder text of the textarea input of the prompt view.                                          |
| `PromptSuggestions`   | `string`    | Gets/Sets the text of the prompt suggestions toggle button in the prompt view.                                    |
| `PromptView`          | `string`    | Gets/Sets the text of the prompt view button in the ToolBar.                                                      |
| `RetryGeneration`     | `string`    | Gets/Sets the text of the retry generation button in the output card.                                             |

## Next Steps

- [Enums]({%slug aiprompt/server-side-programming/enums%})
