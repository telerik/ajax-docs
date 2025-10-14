---
title: Prompt Library
page_title: Telerik AJAX Prompt Library
description: Get familiar with some example prompts that show how to use the Telerik AI Coding Assistant for better developer productivity.
slug: ai/prompt-library
tags: webforms, ai, prompt library
published: True
position: 3
---

# Telerik AJAX Prompt Library

This article provides a list of sample prompts for use with the [Telerik AJAX MCP Server]({%slug ai/mcp-server%}). They can help you get a better idea what the Telerik AI Coding Assistant can do and how to compose your prompts. This collection is not exhaustive and you can prompt the Telerik AI Coding Assistant about other scenarios and components as well.

## How to Use the Prompts

All prompts in this library target the [Telerik AJAX MCP Server]({%slug ai/mcp-server%}). The [`#telerik_ajax_assistant` handle](slug:ai-mcp-server#usage) assumes that this is the server name you have [entered in the `mcp.json` file during installation](slug:ai-mcp-server#installation).

1. Browse the prompt library to find a prompt that suits your needs.
2. Copy the prompt text including the `#telerik_ajax_assistant` handle.
3. (optional) Customize the prompt as needed for your specific use case. Make sure the changes comply with the [intended use](slug:ai-overview#intended-use) and the [recommendations](slug:ai-overview#recommendations) for the AI Coding Assistant.
4. Run the prompt against the MCP server.

>warning Always double-check the code and solutions proposed by any AI-powered tool before applying them to your project.

## Grid

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant Create a basic Grid component that displays employee data with columns for ID, Name, Position, and Salary. Include sorting and pagination functionality.
````

````TEXT
#telerik_ajax_assistant Implement a Grid with enabled filtering and show how to set up different filter types for text, numeric, and date columns.
````

````TEXT
#telerik_ajax_assistant Set up a Grid that loads data from a REST API endpoint.
````

````TEXT
#telerik_ajax_assistant Set up a Grid with virtual scrolling to handle large datasets efficiently
````

````TEXT
#telerik_ajax_assistant Create a Grid having Edit button on each row, and conditional formatting based on cell values.
````

````TEXT
#telerik_ajax_assistant Implement Grid with enabled grouping and expand/collapse functionality for the groups.
````

````TEXT
#telerik_ajax_assistant Set up a Grid with еnabled multiple selection.
````

````TEXT
#telerik_ajax_assistant Set up a Grid with еnabled checkbox selection. 
````

````TEXT
#telerik_ajax_assistant Create an editable Grid that includes validation for different data types.
````

</div>

## Scheduler

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant Create a Scheduler component with month, week, and day views.
````

````TEXT
#telerik_ajax_assistant Create a Scheduler with sample event data and enabled basic event creation, editing, and deletion functionality.
````

````TEXT
#telerik_ajax_assistant Create a resource-based Scheduler with sample data grouped by Name of the event owner.
````

````TEXT
#telerik_ajax_assistant Create a Scheduler that allows users to toggle between different views and displays appointments.
````

````TEXT
#telerik_ajax_assistant Create a Scheduler that allows to create weekly repeating events.
````

</div>

## Chart

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant Build a column chart that shows quarterly sales by region.
````

````TEXT
#telerik_ajax_assistant Build a column chart that shows quarterly sales by region with drill-down functionality to show monthly data when clicking on a quarter.
````

</div>

## Form

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant How to create a form with three TextBox fields.
````

````TEXT
#telerik_ajax_assistant Generate a Form with required field validation for email and password inputs.
````

</div>

## Upload

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant Create a simple Upload component allowing chunk file upload.
````

````TEXT
#telerik_ajax_assistant Create an Upload component allowing single file upload to a predefined saving location.
````

</div>

## DropDownList

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant Create two cascading DropDownLists where the second list depends on the first selection. Use Categories and Products data with a simple relationship.
````

````TEXT
#telerik_ajax_assistant Create a DropDownList with countries data and enabled filtering.
````

</div>

## DatePicker

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant Create a DatePicker that disables weekends.
````

````TEXT
#telerik_ajax_assistant Create two DatePickers for "From" and "To" date selection where the "To" picker's min date updates based on "From" selection.
````

````TEXT
#telerik_ajax_assistant Render a DatePicker with a default selected date.
````

````TEXT
#telerik_ajax_assistant Configure the DatePicker to show week numbers in its calendar popup.
````

````TEXT
#telerik_ajax_assistant Change the display format in the DatePicker so dates show as 'MM/dd/yyyy'.
````

</div>

## Calendar

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant Create a Calendar component in which all past days are disabled.
````

````TEXT
#telerik_ajax_assistant Create a Calendar component in which all weekends are disabled.
````

````TEXT
#telerik_ajax_assistant Create a Calendar that shows the past 5 years.
````

</div>

## MultiSelect

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

````TEXT
#telerik_ajax_assistant Create a MultiSelect with an array of product objects and show the selected product names below the component.
````

````TEXT
#telerik_ajax_assistant Create a MultiSelect with checkboxes bound to a simple list of countries and show the selected count.
````
