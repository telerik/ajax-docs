---
title: Overview
page_title: Telerik AJAX AI Tooling Overview
description: Learn about the AI-powered developer tools that integrate with your IDE or code editor for greater productivity and enhanced developer experience.
slug: ai/overview
tags: telerik, ajax, assistant, webforms, ai, assistant
published: True
position: 1
---

# Telerik AJAX AI Coding Assistant Overview

The Telerik AJAX AI Coding Assistant improves your developer experience and increases your productivity when implementing WebForms apps that include Telerik UI for ASP.NET AJAX. The coding assistant is an AI code generator that provides proprietary context to AI models in order to produce higher quality code samples with the [Telerik UI for ASP.NET AJAX components](https://www.telerik.com/products/aspnet-ajax.aspx) and API.

The Telerik AI Coding Assistant is integrated in the [WebForms MCP Server]({%slug ai/mcp-server%}). The MCP server can handle more complex prompts that require several requests to the AI model. An MCP-enabled client like Cursor or GitHub Copilot in **Agent** mode can directly suggest changes to your app and even rebuild it to verify the new AI generated code.

## Getting Started

To use the Telerik AJAX AI Coding Assistant, you need:

* A [Telerik user account](https://www.telerik.com/account/).
* An active [DevCraft or Telerik UI for ASP.NET AJAX license](https://www.telerik.com/purchase/individual/aspnet-ajax.aspx) or a [Telerik UI for ASP.NET AJAX trial](https://www.telerik.com/products/aspnet-ajax.aspx).
* A [WebForms application that includes Telerik UI for ASP.NET AJAX]({%slug getting-started/adding-the-telerik-controls-to-your-project%}).
* A [Telerik Subscription license](https://www.telerik.com/purchase/faq/licensing-purchasing) is recommended in order to use the Telerik Telerik AJAX AI Coding Assistant without restrictions. Perpetual license holders and trial users can make a [limited number of requests per year](#usage-limits).

## Intended Use

You can use the Telerik AI Coding Assistant for:

* Initial code generation: Quickly add components to your app to speed up the initial development.
* Component configuration: Enable or disable specific component features, or fine tune the configuration through prompting. More complex configurations are possible but may require additional manual work to be production-ready.
* Dummy data generation and data binding: Quickly add data to your app for testing and prototyping purposes. Avoid exposing or providing access to your proprietary or production data to AI-enabled tools.
* Step-by-step explanations: Understand the solutions provided by the AI Coding Assistant through the detailed explanations (depends on the tool, mode, and model). To further develop your knowledge, check the respective documentation.
* Preliminary troubleshooting: Resolve obvious and easy-to-solve issues affecting your code. For more complex issues, search the product documentation or look for assistance from the community.

>warning Always double-check the suggested code and solutions of any AI-powered tool before applying them to your app.

> The Telerik AI Coding Assistant is not intended for styling and theme customization. If you are looking for AI-powered styling and theming, check out [Telerik ThemeBuilder](https://www.telerik.com/themebuilder).

## Recommendations

Consider the following recommendations when working with the Telerik AI Coding Assistant:

* When switching between tasks and files, start a new session in a new chat window to avoid polluting the context with irrelevant or outdated information.
* At the time of publishing, Claude Sonnet 4 and GPT-5 produce better results.
* Sometimes, the AI Coding Assistant might generate custom styles. To avoid any custom styling, include a similar statement in your prompts: `Don't add custom CSS styles`.

## Telerik Document Processing AI Coding Assistant

You can also use the AI Coding Assistant for [Telerik Document Processing](https://www.telerik.com/document-processing-libraries) to generate high-quality code samples and speed up your development. Read the full guide in the dedicated [DPL AI Coding Assistant](https://docs.telerik.com/devtools/document-processing/ai-coding-assistant/overview) article.

## Usage Limits

The Telerik AJAX AI Conding Assistant allows the following maximum number of requests, depending on your [Telerik license type](https://www.telerik.com/purchase/faq/licensing-purchasing):

* Perpetual licenses: include 50 requests per year to let you explore and try out the AI Coding Assistant. If you'd like ongoing, higher-volume access, switch to a Subscription license.
* Subscription licenses: virtually unlimited number of requests with a fair use threshold of 300 requests per day
* Trial licenses: 300 requests per trial per year. Activating the same trial for a new release does not grant additional 300 requests.

> All Telerik AI tools share a single request limit for your Telerik account. For example, the [Telerik MCP server]({%slug ai/mcp-server%}) takes up from the same usage quota.
> When using the Telerik MCP server, one prompt may trigger several requests, depending on the prompt complexity.

## Privacy

The Telerik AJAX AI Coding Assistant operates under the following conditions:

* The Assistant does not have access to your workspace and application code. Note that when using the Telerik MCP server (or any other MCP server), the LLM generates parameters for the MCP server request, which may include parts of your application code.
* The Assistant does not use your prompts to train Telerik AI models.
* The Assistant does not generate the actual responses and has no access to these responses. The Assistant only provides a better context that helps your selected model (for example, GPT, Gemini, Claude) provide better responses.
* The Assistant does not associate your prompts to your Telerik user account. Your prompts and generated context are anonymized and stored for statistical and troubleshooting purposes.
* The Assistant stores metrics about how often and how much you use it in order to ensure compliance with the [allowed number of requests that correspond to your current license](#usage-limits).

Make sure to also get familiar with the terms and privacy policy of your selected AI model and AI client.

## Next Steps

Add the [WebForms MCP Server]({%slug ai/mcp-server%}) to an MCP-enabled client.
