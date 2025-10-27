---
title: Properties
page_title: SpeechToTextButton Server-side Properties
description: "Server-side properties of the WebForms SpeechToTextButton component."
slug: speechtotextbutton/server-side-programming/properties
tags: speechtotextbutton,server-side,properties
published: True
position: 1
---

# Properties

SpeechToTextButton-specific properties to configure recognition behavior, appearance, localization, and more.

| Name              | Return Type / Enum Link                                                                                                         | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Continuous`      | `bool`                                                                                                                          | Gets/Sets whether continuous results are produced or only a single result.     |
| `Enable`          | `bool`                                                                                                                          | Gets/Sets whether the button is enabled for user interaction.                  |
| `FillMode`        | [`Telerik.Web.UI.SpeechToTextButtonFillMode`]({%slug speechtotextbutton/server-side-programming/enums#fillmode%})               | Gets/Sets how the theme color is applied.                                      |
| `Icon`            | `string`                                                                                                                        | Gets/Sets the Kendo icon name shown when idle (default: `microphone-outline`). |
| `IntegrationMode` | [`Telerik.Web.UI.SpeechToTextButtonIntegrationMode`]({%slug speechtotextbutton/server-side-programming/enums#integrationmode%}) | Gets/Sets which speech engine integration to use.                              |
| `InterimResults`  | `bool`                                                                                                                          | Gets/Sets whether interim (non‑final) transcription results are emitted.       |
| `Language`        | `string`                                                                                                                        | Gets/Sets the BCP‑47 language tag used for recognition (e.g. `en-US`).         |
| `MaxAlternatives` | `double`                                                                                                                        | Gets/Sets the maximum number of alternative transcripts per final result.      |
| `Messages`        | [`Telerik.Web.UI.Messages`](#messages)                                                                                          | Provides localized/override strings for UI messages.                           |
| `Rounded`         | [`Telerik.Web.UI.SpeechToTextButtonRounded`]({%slug speechtotextbutton/server-side-programming/enums#rounded%})                 | Gets/Sets the border radius style.                                             |
| `Size`            | [`Telerik.Web.UI.SpeechToTextButtonSize`]({%slug speechtotextbutton/server-side-programming/enums#size%})                       | Gets/Sets the overall size.                                                    |
| `StopIcon`        | `string`                                                                                                                        | Gets/Sets the Kendo icon name shown while listening (default: `stop-sm`).      |
| `ThemeColor`      | [`Telerik.Web.UI.SpeechToTextButtonThemeColor`]({%slug speechtotextbutton/server-side-programming/enums#themecolor%})           | Gets/Sets the theme color.                                                     |

## Messages

Use the nested `<Messages>` tag to customize the UI strings shown by the component. Only provide the attributes you want to override; unspecified ones keep their defaults.

| Attribute        | Default Value                                       | Description                                                                                   |
| ---------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `Start`          | Start speech recognition                            | Tooltip/message used when the control is idle and can start recognition.                      |
| `Stop`           | Stop speech recognition                             | Tooltip/message used while recognition is active (clicking stops it).                         |
| `Unsupported`    | Speech recognition is not supported in this browser | Message shown when the current browser/environment does not support required speech features. |
| `NotInitialized` | Speech recognition engine not initialized           | Message shown before the underlying speech engine is ready.                                   |

## Next Steps

- [Enums]({%slug speechtotextbutton/server-side-programming/enums%})
