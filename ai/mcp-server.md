---
title: MCP Server
page_title: Telerik AJAX MCP Server
description: Learn how to add and use the Telerik AJAX MCP Server as an AJAX coding assistant and code generator for better developer productivity. The Telerik AJAX MCP server provides proprietary context about Telerik UI for ASP.NET AJAX to AI-powered software.
slug: ai/mcp-server
tags: telerik, ajax, assistant, webforms, ai, mcp server
published: True
position: 2
---


# Telerik AJAX MCP Server

The Telerik AJAX [MCP Server](https://modelcontextprotocol.io/docs/getting-started/intro) lets you interact with AI and reach new levels of developer productivity. The MCP server provides proprietary context to AI-powered IDEs, apps and tools. You can use the Telerik AJAX MCP server for AJAX AI code generation and ask about [Telerik UI for ASP.NET AJAX components](https://www.telerik.com/products/aspnet-ajax.aspx), features, or general usage. You can successfully prompt more complex questions and tasks, and generate tailored code that includes Telerik UI for ASP.NET AJAX components and API.

## Prerequisites

To use the Telerik AJAX MCP server, you need:

* A [Telerik UI for ASP.NET AJAX](https://www.telerik.com/purchase.aspx?filter=dotnet#individual-products) subscription license or a DevCraft subscription license to access the AI Coding Assistant. Alternatively, you can start a [30-day AI Tools trial](https://www.telerik.com/mcp-servers-blazor/thank-you).
* A [compatible MCP client (IDE, code editor or app)](https://modelcontextprotocol.io/clients) that supports *MCP tools*. Using the latest version of the MCP client is highly recommended.
* A [Telerik user account](https://www.telerik.com/account/).
* An active [DevCraft or Telerik UI for ASP.NET AJAX license](https://www.telerik.com/purchase/individual/aspnet-ajax.aspx) or a [Telerik UI for ASP.NET AJAX trial](https://www.telerik.com/products/aspnet-ajax.aspx).
* A [WebForms application that includes Telerik UI for ASP.NET AJAX]({%slug getting-started/adding-the-telerik-controls-to-your-project%}).
* [.NET 10](https://dotnet.microsoft.com/en-us/download)

## Installation

Use the documentation of your AI-powered MCP client to add the Telerik MCP server to a specific workspace or globally. You can see installation tips and examples for some popular MCP clients below.

The generic settings of the Telerik ASP.NET AJAX MCP server are:

* Server name: `telerik-ajax-assistant`  (depends on your preferences)
* Type: `stdio` (standard input/output transport)
* Command: `dnx` (the MCP server works through a nuget package https://www.nuget.org/packages/Telerik.AspNetMvc.MCP)
* Supported arguments: `--yes`
* nuget package name: `Telerik.Ajax.MCP`
* You also need to add your [Telerik licence key](https://www.telerik.com/account/your-licenses/license-keys). Place the file at `%AppData%/Telerik/telerik-license.txt`; 

    OR alternatively:

    * Use a `TELERIK_LICENSE_PATH` argument and point to your Telerik license file location.
    * Use a `TELERIK_LICENSE` argument and paste your Telerik license key. Make sure to [update the license key](https://www.telerik.com/account/your-licenses/license-keys) when necessary.

> * Some MCP clients expect the MCP servers to be listed under a `servers` JSON key, while others expect `mcpServers`.
> * Some MCP clients expect an `mcp.json` file, while others like Visual Studio expect an `.mcp.json` file.
> * Some MCP clients, including older Visual Studio versions, may not accept a server name that uses hyphens (`-`) or underscores (`_`). In such cases, update the MCP client version or use a different server name.

<TabStrip>
<TabStripTab title="Visual Studio">

For detailed instructions, refer to [Use MCP servers in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers).

> Early Visual Studio 17.14 versions require the Copilot Chat window to be open and active when you open a solution. Otherwise the Telerik MCP server is not used.

To enable the Telerik MCP Server in a specific WebForms app, add a `.mcp.json` file to the solution folder.

````JSON
{
  "servers": {
      "telerik-ajax-assistant": {
        "type": "stdio",
        "command": "dnx",
        "args": [
          "Telerik.Ajax.MCP",
          "--yes"
        ]
    }
  }
} 
````

To enable global automatic discovery of the Telerik MCP Server in Visual Studio, add the above `.mcp.json` file to your user directory (`%USERPROFILE%`), for example, `C:\Users\____\.mcp.json`.

> Once the Telerik MCP server is added, make sure that the `telerik_ajax_assistant` tool is [enabled (checked) in the Copilot Chat window's tool selection dropdown](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022#configuration-example-with-github-mcp-server). This dropdown opens when clicking on a wrench icon 🔧 at the bottom of the Copilot Window. The Telerik MCP server may get disabled when starting a new chat, changing threads, or relaunching Visual Studio. This is a known issue with MCP servers in general.
</TabStripTab>
<TabStripTab title="Visual Studio Code">

For detailed instructions, refer to [Use MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

> This section applies to VS Code 1.102.1 and newer versions.

Make sure that [`chat.mcp.enabled`](vscode://settings/chat.mcp.enabled) is enabled in the VS Code settings.

To enable the Telerik MCP Server in a specific [workspace](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-workspace), WebForms app, or [globally](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-configuration), add a `.vscode` folder with an `mcp.json` file at the root of the workspace, app, or your user folder, respectively.

>caption .vscode/mcp.json

````JSON
{
  "servers": {
      "telerik-ajax-assistant": {
        "type": "stdio",
        "command": "dnx",
        "args": [
          "Telerik.Ajax.MCP",
          "--yes"
        ]
    }
  }
}
````

To use the Telerik MCP server in all workspaces and apps, make sure that [`chat.mcp.discovery.enabled`](vscode://settings/chat.mcp.discovery.enabled) is enabled in [`settings.json`](https://code.visualstudio.com/docs/configure/settings#_settings-json-file).

>caption VS Code settings.json

````JSON
{
  // ...
  "chat.mcp.discovery.enabled": true,
}
````
</TabStripTab>
<TabStripTab title="Cursor">

For detailed instructions, refer to [Model Context Protocol](https://docs.cursor.com/context/mcp).

To [enable the Telerik MCP Server in a specific workspace, WebForms app, or globally](https://docs.cursor.com/context/mcp#using-mcp-json), add a `.cursor` folder with an `mcp.json` file at the root of the workspace, app, or your user folder, respectively.

>caption .cursor/mcp.json

````JSON
{
  "servers": {
      "telerik-ajax-assistant": {
        "type": "stdio",
        "command": "dnx",
        "args": [
          "Telerik.Ajax.MCP",
          "--yes"
        ]
    }
  }
}
````
</TabStripTab>
</TabStrip>

### .NET 8 & 9 Local Tool Installation

For .NET 8 and 9 projects, you can install the MCP server as a local tool without global installation:

```bash
dotnet tool install Telerik.Ajax.MCP
```

#### MCP Configuration for .NET 8 & 9 Local Tools

For VS Code `.vscode/mcp.json` using local tools:

````JSON
{
  "servers": {
    "telerik-ajax-assistant": {
      "type": "stdio",
      "command": "dotnet",
      "args": ["tool", "run", "telerik-ajax-assistant"]
    }
  },
  "inputs": []
}
````

## Usage

By default, MCP clients do not call MCP tools in a deterministic way. Some MCP clients like [VS Code](#vs-code) allow you to explicitly reference the desired MCP tool in your prompt.

To use the Telerik MCP Server:

1. Start your prompt with `Telerik` to make it more likely for the Telerik MCP server to get called. If you are using VS Code, then start your prompt with:
    * `#` and the MCP server name that you used in `mcp.json` (for example, `#telerik_ajax_assistant`)
    * `#` and the name of the Telerik Telerik AJAX MCP tool (`#telerik_ajax_assistant`)
1. Confirm that the Telerik MCP server is used. Look for a statement in the output, which is similar to:
    * `Running telerik_ajax_assistant` (in VS Code)
    * `Calling MCP tool telerik_ajax_assistant` (in Cursor)
1. Grant the Telerik tool permission to run for the current session, workspace, or always.

### Sample Prompts

The following list describes how your prompts may look like. Check the [Prompt Library]({%slug ai/prompt-library%}) for more examples.

* &quot;Telerik Generate an AJAX Grid with sorting and paging enabled. Bind the Grid to a Person model and provide dummy data.&quot;
* &quot;Telerik Generate a ComboBox for AJAX that shows a list of products. Create a Product class and generate sample data.&quot;
* &quot;Telerik Show me sample code for an AJAX Grid with virtual scrolling for the rows and columns.&quot;

## Usage Limits

A Telerik [Subscription license](https://www.telerik.com/purchase/faq/licensing-purchasing) is recommended in order to use the Telerik Blazor AI Coding Assistant without restrictions. Perpetual license holders and trial users can make a [limited number of requests per year]({%slug ai/overview#usage-limits%}).

## Connect to Local AI Model

You can use the Telerik Telerik AJAX MCP server with local large language models (LLM). For example, run your local model through [Ollama](https://ollama.com) and use a third-party package such as [MCP-LLM Bridge](https://github.com/patruff/ollama-mcp-bridge) to connect the model to the Telerik MCP server. This will allow you to use the Telerik AI Coding Assistant without a cloud-based AI model.

## Next Steps

Test with sample prompts from the [Prompt Library]({%slug ai/prompt-library%}).
