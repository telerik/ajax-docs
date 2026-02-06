---
title: Troubleshooting
meta_title: Telerik WebForms AI Tools Troubleshooting
description: Common issues and their solutions when using the Telerik WebForms MCP Server for AI-powered development tools.
slug: ai/troubleshooting
tags: AI, troubleshooting, issue
position: 5
---

# Troubleshooting

This article provides solutions to common issues you may encounter when working with the Telerik UI for ASP.NET AJAX AI Coding Assistant.

>warning **Кnown Issue: Hanging tool calls in Visual Studio**
>
> When using Telerik AI tools in Visual Studio, GitHub Copilot may:
>
> * **hang** during tool invocation;
> * show UI for a successful tool response, but actually **fail silently**;
> * continue generation without waiting for **parallel tool calls**.
>
>
> In these cases, the response may be generated but not provided to the Copilot Agent UI.
>
> This is a known issue in Visual Studio Copilot, not related to Telerik MCP servers or AI tools, and does not reproduce in VS Code.
>
> For more details, see the related Visual Studio Developer Community issue:  
https://developercommunity.visualstudio.com/t/Copilot-stopped-working-after-latest-upd/10936456
>
> Microsoft has acknowledged the issue and marked it as **Fixed - Pending Release**. A future Visual Studio update is expected to resolve it.

## AI Coding Assistant Stopped Working

Starting in January 2026, we restructured the Telerik UI for ASP.NET AJAX AI Coding Assisant to better serve different user needs. The AI Coding Assistant is now delivered through a single Telerik MCP server. 

License requirements have changed as follows:

* **DevCraft Complete Subscription or DevCraft Ultimate Subscription**&mdash;Provides full access to the AI Coding Assistant.
* **DevCraft UI Subscription, Telerik UI for ASP.NET AJAX Subscription**&mdash;Provide access to the AI Coding Assistant.
* **Perpetual licenses**&mdash;Do not grant access to any of the AI tools. You must have an active Subscription or trial license to use the Telerik MCP server.

For detailed information about license requirements and tool capabilities, see [License Requirements]({%slug ai/overview%}).

## I Started a Trial License but Cannot Activate the MCP Server

When you activate a trial license, you must download and install the updated license key to enable access to the AI Tools. To resolve this issue:

1. Follow the steps in the [Setting up your license key]({%slug licensing/license-key%}) section.
1. Restart your IDE to ensure the changes take effect.

The MCP server validates your license during initialization. Without a properly activated license key, the server cannot authenticate your access to the AI Tools.

## The MCP Server Tools Are Not Recognized by Visual Studio

If the Telerik MCP server tools are not available or recognized by GitHub Copilot in Visual Studio, you may need to manually enable them:

1. Click on the *Select Tools* button on the bottom right part of the Copilot chat window.
1. In the popup that opens, check the **telerik-ajax-mcp** from the list to enable it.

<img alt="Enable MCP Server tools in Visual Studio" src="images/mcp-server-enable-tools.png" style="width: 50%; height: 50%"/>

## See Also

* [Telerik MCP Server Installation]({%slug ai/overview%})
* [Licensing]({%slug licensing/overview%})