---
title: Integration with OpenAI
page_title: Integration with OpenAI
description: "Learn how to integrate the WebForms AIPrompt with OpenAI and add Artificial Intellegence in it"
slug: aiprompt-integration-with-openai
tags: aiprompt,ai,integration,openai
published: True
res_type: kb
---

## Description

I would like to integrate the AIPrompt with an AI service/model, such as OpenAI.

## Solution

The WebForms AIPrompt allows you to easily integrate it with a Chat API service such as ChatGPT using its [OnPromptRequest]({%slug aiprompt/client-side-programming/events#prompt-request%}) event.

### Configure OpenAI 

If you have an OpenAI subscription, you can directly use it with the AIPrompt component. We need to install the **OpenAI** Nuget package, in order to use their services. Go to the Nuget Package Manager, search for OpenAI and install the package. 

> note For more information on the OpenAI library, you can check [The official .NET library for the OpenAI API](https://github.com/openai/openai-dotnet).

#### Install OpenAI Package

![Installing OpenAI](images/aiprompt-openai-integration/nuget.png "Installing OpenAI")

> note At the time of updating this article (November 2025), we used the OpenAI package version `2.7.0`, which installed the following packages.

```XML
<?xml version="1.0" encoding="utf-8"?>
<packages>
    <package id="Microsoft.Bcl.AsyncInterfaces" version="9.0.9" targetFramework="net48" />
    <package id="Microsoft.Extensions.DependencyInjection.Abstractions" version="8.0.2" targetFramework="net48" />
    <package id="Microsoft.Extensions.Logging.Abstractions" version="8.0.3" targetFramework="net48" />
    <package id="OpenAI" version="2.7.0" targetFramework="net48" />
    <package id="System.Buffers" version="4.5.1" targetFramework="net48" />
    <package id="System.ClientModel" version="1.8.1" targetFramework="net48" />
    <package id="System.Diagnostics.DiagnosticSource" version="8.0.1" targetFramework="net48" />
    <package id="System.Memory" version="4.5.5" targetFramework="net48" />
    <package id="System.Memory.Data" version="8.0.1" targetFramework="net48" />
    <package id="System.Net.ServerSentEvents" version="9.0.9" targetFramework="net48" />
    <package id="System.Numerics.Vectors" version="4.5.0" targetFramework="net48" />
    <package id="System.Runtime.CompilerServices.Unsafe" version="6.0.0" targetFramework="net48" />
    <package id="System.Text.Encodings.Web" version="8.0.0" targetFramework="net48" />
    <package id="System.Text.Json" version="8.0.6" targetFramework="net48" />
    <package id="System.Threading.Tasks.Extensions" version="4.5.4" targetFramework="net48" />
    <package id="System.ValueTuple" version="4.5.0" targetFramework="net48" />
</packages>
```

#### Configure the Web App

If your NuGet packages do not add the Assembly Binding Redirects automatcailly, make sure you have them in the `web.config`.

```XML
<runtime>
	<assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
		<dependentAssembly>
			<assemblyIdentity name="System.Text.Json" publicKeyToken="cc7b13ffcd2ddd51" culture="neutral" />
			<bindingRedirect oldVersion="0.0.0.0-8.0.0.6" newVersion="8.0.0.6" />
		</dependentAssembly>
		<dependentAssembly>
			<assemblyIdentity name="Microsoft.Bcl.AsyncInterfaces" publicKeyToken="cc7b13ffcd2ddd51" culture="neutral" />
			<bindingRedirect oldVersion="0.0.0.0-9.0.0.9" newVersion="9.0.0.9" />
		</dependentAssembly>
		<dependentAssembly>
			<assemblyIdentity name="System.Runtime.CompilerServices.Unsafe" publicKeyToken="b03f5f7f11d50a3a" culture="neutral" />
			<bindingRedirect oldVersion="0.0.0.0-6.0.0.0" newVersion="6.0.0.0" />
		</dependentAssembly>
		<dependentAssembly>
			<assemblyIdentity name="System.Diagnostics.DiagnosticSource" publicKeyToken="cc7b13ffcd2ddd51" culture="neutral" />
			<bindingRedirect oldVersion="0.0.0.0-8.0.0.1" newVersion="8.0.0.1" />
		</dependentAssembly>
		<dependentAssembly>
			<assemblyIdentity name="System.Buffers" publicKeyToken="cc7b13ffcd2ddd51" culture="neutral" />
			<bindingRedirect oldVersion="0.0.0.0-4.0.3.0" newVersion="4.0.3.0" />
		</dependentAssembly>
		<dependentAssembly>
			<assemblyIdentity name="Microsoft.Extensions.Logging.Abstractions" publicKeyToken="adb9793829ddae60" culture="neutral" />
			<bindingRedirect oldVersion="0.0.0.0-8.0.0.3" newVersion="8.0.0.3" />
		</dependentAssembly>
	</assemblyBinding>
</runtime>
```

Add reference to the `netstandard2.0` assembly.

```XML
<system.web>
	<compilation debug="true" strict="false" explicit="true" targetFramework="4.8">
		<assemblies>
			<add assembly="netstandard, Version=2.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51"/>
		</assemblies>
	</compilation>
</system.web>
```

Add API key and AI Model to the `appSettings`.

```XML
<appSettings>
	<add key="OPENAI_API_KEY" value="your-api-key" />
	<add key="OPENAI_MODEL" value="gpt-4o" />
</appSettings>
```

>warning Never share your API key with anyone or push it to GitHub/GitLab! The key will automatically be disabled by OpenAI and you will need to create a new one.

### AI Integration

First, use the AIPrompt's [`OnPromptRequest`]({%slug aiprompt/client-side-programming/events#prompt-request%}) event and chose/write a prompt.

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="AIPrompt1" Width="400px">
    <Views>
        <telerik:AIPromptView Name="PromptView" Type="Prompt" />
        <telerik:AIPromptView Name="OutputView" Type="Output" />
    </Views>
    <ClientEvents OnPromptRequest="onPromptRequest" />
</telerik:RadAIPrompt>
````

````JavaScript
function onPromptRequest(sender, args) {
    let prompt = args.get_prompt();

    if (!prompt) return;

    $.ajax({
        url: 'Default.aspx/AskChatGPT',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ request: prompt }),
        success: function (response) {
            let promptOutput = {
                prompt: prompt,
                output: response.d
            }

            let outputView = Telerik.Web.UI.RadAIPromptViewType.Output;

            sender.set_activeView(outputView);
            sender.set_promptOutput(promptOutput);
        },
        error: function (error) {
            console.error('Error in AJAX call:', error);
        }
    });
}
````

Add prompt suggestion to the AIPrompt.

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        string[] promptSuggestions = new string[]
        {
            "Write an out of office message",
            "Write a short LinkedIn post for work/life balance.",
            "Write a short email to a colleague about a project",
        };

        AIPrompt1.PromptSuggestions = promptSuggestions;
    }
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    If Not IsPostBack Then
        Dim promptSuggestions As String() = {
            "Write an out of office message",
            "Write a short LinkedIn post for work/life balance.",
            "Write a short email to a colleague about a project"
        }

        AIPrompt1.PromptSuggestions = promptSuggestions
    End If
End Sub
````

On the server, get a reference to your **API key** and **Model** you wish to use. You can also give some additional information to the LLM (text formatting, giving it addtional instructions, etc.).

Create the following Page Method or a Web Service Method, which will recieve the request from the AIPrompt.

>note For more information about Page Methods and Web Services, refer to the [ASP.NET Web Services - Quick Walkthrough]({%slug common-quick-walkthrough-asp-net-web-services%}) article.

````C#
using OpenAI.Chat;

[WebMethod]
public static string AskChatGPT(string request)
{
    string apiKey = System.Configuration.ConfigurationManager.AppSettings["OPENAI_API_KEY"];
    string model = System.Configuration.ConfigurationManager.AppSettings["OPENAI_MODEL"];

    string textFormat = "Respond in short, plain text (maximum of 3-4 sentences), without any formatting, such as bold text, dashes, slashes, numbering, ordered/unordered list, or special characters.";
    string prompt = string.Join("", request, textFormat);

    ChatClient chatClient = new ChatClient(model, apiKey);
    ClientResult<ChatCompletion> completion = chatClient.CompleteChat(prompt);
    string response = completion.Value.Content[0].Text;

    return response;
}
````
````VB
Imports OpenAI.Chat

<WebMethod()>
Public Shared Function AskChatGPT(request As String) As String
    Dim apiKey As String = System.Configuration.ConfigurationManager.AppSettings("OPENAI_API_KEY")
    Dim model As String = System.Configuration.ConfigurationManager.AppSettings("OPENAI_MODEL")

    Dim textFormat As String = "Respond in short, plain text (maximum of 3-4 sentences), without any formatting, such as bold text, dashes, slashes, numbering, ordered/unordered list, or special characters."
    Dim prompt As String = String.Join(vbLf, request, textFormat)

    Dim chatClient As New ChatClient(model, apiKey)
    Dim completion As ClientResult(Of ChatCompletion) = chatClient.CompleteChat(prompt)
    Dim response As String = completion.Value.Content(0).Text

    Return response
End Function
````

Now the integration is complete. Below you can see the result.

![Result](images/aiprompt-openai-integration/result.gif "Result")
