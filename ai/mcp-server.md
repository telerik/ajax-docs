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

To use the Telerik Telerik AJAX MCP server, you need:

* [Node.js](https://nodejs.org/en) 18 or a newer version.
* A [compatible MCP client (IDE, code editor or app)](https://modelcontextprotocol.io/clients) that supports *MCP tools*. Using the latest version of the MCP client is highly recommended.
* A [Telerik user account](https://www.telerik.com/account/).
* An active [DevCraft or Telerik UI for ASP.NET AJAX license](https://www.telerik.com/purchase/individual/aspnet-ajax.aspx) or a [Telerik UI for ASP.NET AJAX trial](https://www.telerik.com/products/aspnet-ajax.aspx).
* A [WebForms application that includes Telerik UI for ASP.NET AJAX]({%slug getting-started/adding-the-telerik-controls-to-your-project%}).

Check [AI Coding Assistant Overview]({%slug ai/overview%}) for more recommendations and usage information.

## Installation

To install the Telerik MCP server, use the documentation of your AI-powered MCP client. You can enable the MCP server for specific workspaces or globally. The sections below provide installation tips and examples for some popular MCP clients like [Visual Studio](#visual-studio), [VS Code](#vs-code), and [Cursor](#cursor). The generic settings of the Telerik Telerik AJAX MCP server are:

* npm package name: `@progress/telerik-ajax-mcp`
* Type: `stdio` (standard input/output transport)
* Command: `npx`
* Arguments: `-y`
* Server name: `telerik_ajax_assistant`. This name depends on your preferences. The suggestion here matches the MCP tool name in the npm package. See the notes below.
* Your [Telerik license key](#license-key) as an `env` parameter

> * Some MCP clients expect the MCP servers to be listed under a `servers` JSON key, while others expect `mcpServers`.
> * Some MCP clients expect an `mcp.json` file, while others like Visual Studio 2022 expect an `.mcp.json` file.
> * Some MCP clients, including older Visual Studio versions, may not accept a server name that uses hyphens (`-`) or underscores (`_`). In such cases, update the MCP client version or use a different server name.

### License Key

To use the Telerik MCP Server, your configuration must provide your [Telerik licence key]({%slug licensing/license-key %}) as an `env` parameter in the MCP `.json` file. There are two options:

* Use a `TELERIK_LICENSE_PATH` argument and point to your Telerik license file location. This approach is recommended, unless you are sharing your VS Code settings across different computers with different operating systems or user names.
* Use a `TELERIK_LICENSE` argument and paste your Telerik license key. Make sure to update the license key when necessary.

### Visual Studio

For detailed instructions, refer to [Use MCP servers in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers).

> Early Visual Studio 17.14 versions require the Copilot Chat window to be open and active when you open a solution. Otherwise the Telerik MCP server is not used.

To enable the Telerik MCP Server in a specific WebForms app, add a `.mcp.json` file to the solution folder.

>caption .mcp.json

````JSON
{
  "servers": {
    "telerik-ajax-assistant": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@progress/telerik-ajax-mcp@latest" ],
      "env": {
        "TELERIK_LICENSE_PATH": "C:\\Users\\___\\AppData\\Roaming\\Telerik\\telerik-license.txt"
      }
    }
  }
}
````

To enable global automatic discovery of the Telerik MCP Server in Visual Studio, add the above `.mcp.json` file to your user directory (`%USERPROFILE%`), for example, `C:\Users\____\.mcp.json`.

> Once the Telerik MCP server is added, make sure that the `telerik_ajax_assistant` tool is [enabled (checked) in the Copilot Chat window's tool selection dropdown](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022#configuration-example-with-github-mcp-server). This dropdown opens when clicking on a wrench icon 🔧 at the bottom of the Copilot Window. The Telerik MCP server may get disabled when starting a new chat, changing threads, or relaunching Visual Studio. This is a known issue with MCP servers in general.

### VS Code

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
      "command": "npx",
      "args": ["-y", "@progress/telerik-ajax-mcp@latest" ],
      "env": {
        "TELERIK_LICENSE_PATH": "C:\\Users\\___\\AppData\\Roaming\\Telerik\\telerik-license.txt"
      }
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

### Cursor

For detailed instructions, refer to [Model Context Protocol](https://docs.cursor.com/context/mcp).

To [enable the Telerik MCP Server in a specific workspace, WebForms app, or globally](https://docs.cursor.com/context/mcp#using-mcp-json), add a `.cursor` folder with an `mcp.json` file at the root of the workspace, app, or your user folder, respectively.

>caption .cursor/mcp.json

````JSON
{
  "servers": {
    "telerik-ajax-assistant": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@progress/telerik-ajax-mcp@latest" ],
      "env": {
        "TELERIK_LICENSE_PATH": "C:\\Users\\___\\AppData\\Roaming\\Telerik\\telerik-license.txt"
      }
    }
  }
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