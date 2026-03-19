# Telerik UI for ASP.NET AJAX Documentation Style Guide

This guide outlines conventions and best practices for writing and maintaining documentation in the **Telerik UI for ASP.NET AJAX** (WebForms) repository.

- **Site URL:** `https://docs.telerik.com/devtools/aspnet-ajax`
- **Base URL:** `/devtools/aspnet-ajax`
- **Site name:** `AJAX`
- **Build system:** Jekyll 3.0 with custom plugins, Kramdown markdown processor
- **Build output:** `_site/`

---

## Metadata (YAML Frontmatter)

Every article must start with a YAML frontmatter block:

```yaml
---
title: Overview
page_title: RadGrid Overview
description: Explore the Grid control's features, including data binding, filtering, and customization options.
slug: grid/overview
tags: overview, grid, data binding, telerik
published: True
position: 0
---
```

### Field Reference

| Field          | Required | Description                                                                                                                                    |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`        | Yes      | Title shown in the Table of Contents (left navigation).                                                                                        |
| `page_title`   | Yes      | Used in the `<title>` element of the generated HTML. Should include the control name (e.g., `RadGrid Overview`).                               |
| `description`  | Yes      | Meta description for SEO. Should be concise and include the control name.                                                                      |
| `slug`         | Yes      | Unique identifier for the article, used in cross-reference links. Format: `control/section/article-name` (e.g., `grid/data-binding/overview`). |
| `tags`         | Yes      | Comma-separated keywords for search and SEO.                                                                                                   |
| `published`    | Yes      | `True` or `False`. Controls whether the page appears in the output.                                                                            |
| `position`     | Yes      | Integer controlling sort order among siblings. `0` is first.                                                                                   |
| `previous_url` | No       | Legacy URL path for redirects after article moves.                                                                                             |

### Special Metadata Fields

These fields are used in specific article types:

| Field      | Value                       | Usage                                          |
| ---------- | --------------------------- | ---------------------------------------------- |
| `res_type` | `kb`                        | Marks the article as a Knowledge Base article. |
| `type`     | `how-to`, `troubleshooting` | KB article category.                           |
| `ticketid` | number                      | Support ticket reference for KB articles.      |
| `is_api`   | `true`                      | Marks API reference pages.                     |
| `layout`   | `api-index`                 | Used for API reference pages.                  |

---

## Article Structure

### Control Documentation Articles

A typical control article follows this pattern:

---

[YAML Frontmatter]
---

# WebForms ControlName Overview

Brief introduction paragraph.

## Section Heading

Content about the feature or configuration.

> caption Figure 1: Description of what the figure shows

![Alt text](images/image-name.png "Tooltip text")

## Code Example

> caption Example: Brief description of the example

```ASP.NET
<telerik:RadButton ID="RadButton1" runat="server" Text="Click Me" />
```

```C#
protected void Page_Load(object sender, EventArgs e)
{
    // C# code
}
```
```VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
    ' VB code
End Sub
```

## See Also

- [Related Article]({%slug control/related-article%})
- [Another Article]({%slug control/another-article%})

### Knowledge Base Articles

KB articles follow a fixed structure with an **Environment** table:

```yml
---
title: Descriptive Problem or Solution Title
description: Short description of the KB article
type: how-to
page_title: Page Title - ControlName
slug: controlname-descriptive-kb-slug
res_type: kb
ticketid: 1234567
---
```

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>20XX.X.XXX</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>RadControlName for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>

## Description

Description of the problem or scenario.

## Solution

Step-by-step solution with code examples.

## See Also

- [Related KB article or docs link]({%slug slug-here%})

---

## Slugs

The `slug` identifies the article during build and is used for cross-references. Use a hierarchical, descriptive format.

**Pattern:** `control-folder/section/article-name`

- ✅ `slug: grid/overview`
- ✅ `slug: grid/data-binding/overview`
- ✅ `slug: button/server-side-programming/properties-and-events`
- ❌ `slug: overview_aspnetajax`
- ❌ `slug: aspnetajax_overview_autocomplete`

For KB articles, use descriptive slugs without the `control/` prefix:

- ✅ `slug: asyncupload-add-radwizard-finish-button-as-postbacktrigger`
- ✅ `slug: grid-apply-filters-and-then-display-grid`
---

## Links

### Internal Cross-References

Use the `{%slug %}` syntax for all internal links. This resolves to the correct URL regardless of the file's physical location:

```markdown
[RadGrid Overview]({%slug grid/overview%})
[Data Binding Basics]({%slug grid/data-binding/overview%})
[Properties and Events]({%slug button/server-side-programming/properties-and-events%})
```
 
### External Links

Use standard Markdown link syntax:

```markdown
[Online Demos](https://demos.telerik.com/aspnet-ajax/grid/examples/overview/defaultcs.aspx)
[Browser Support](https://www.telerik.com/aspnet-ajax/tech-sheets/browser-support)
```

### Image Links

Images are stored in an `images/` subfolder relative to the article. Reference them with relative paths:

```markdown
![Alt text](images/image-name.png "Tooltip text")
```

Use the `>caption` blockquote before images to add a figure caption:

```markdown
> caption Figure 1: Description of the screenshot

![Alt text](images/screenshot.png)
```

---

## Code Blocks

### Language Markers

Use fenced code blocks with one of the following language markers:

| Marker                          | Usage                            |
| ------------------------------- | -------------------------------- |
| ` ```ASP.NET `                  | WebForms markup (`.aspx`)        |
| ` ```C# `                       | C# code-behind                   |
| ` ```VB `                       | VB.NET code-behind               |
| ` ```JavaScript `               | Client-side JavaScript           |
| ` ```XML `                      | Configuration files (web.config) |
| ` ```CSS `                      | Stylesheets                      |
| ` ```SQL `                      | Database queries                 |

### Tabbed Code Blocks (C# and VB)

When showing server-side code, always provide both **C#** and **VB** versions as consecutive fenced code blocks. The build system (`code_tabstrip_generator` plugin) automatically renders them as tabs:


```C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetData();
}
```

```VB
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = GetData()
End Sub
```

### Code Captions

Use `>caption` blockquotes before code blocks to describe the example:

````markdown
> caption Create a RadGrid with paging and sorting enabled

```ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" AllowSorting="True">
</telerik:RadGrid>
```
````

---

## Alert Blockquotes

The following blockquote prefixes render as styled alert boxes (handled by the `alert_generator` plugin):

| Syntax | Appearance | Usage |
|--------|------------|-------|
| `>note` | Blue info box | General information or clarification |
| `>tip` | Green tip box | Helpful hints and suggestions |
| `>important` | Orange emphasis box | Key information that should not be missed |
| `>caution` | Orange warning box | Potential pitfalls or things to be careful about |
| `>warning` | Red warning box | Serious warnings about breaking changes or critical issues |
| `>caption` | Caption text | Figure captions and code example descriptions |

### Example

```markdown
>tip You can use the `Skin` property to change the visual appearance of the control.

>important RadAsyncUpload requires a valid encryption configuration. See the [Security article]({%slug asyncupload/security%}) for details.

>warning Never expose NuGet API keys in source code or documentation.

>note The `RenderMode` property was introduced in the Q2 2013 release.
```

---

## Templates

Reusable content blocks are stored in the `_templates/` folder. Include them with the `@[template]` syntax:

```markdown
@[template](/_templates/common/render-mode.md#intro-all "control: RadWindow, version: Q2 2013")
```

### Syntax

```
@[template](path/to/template.md#section-id "param1: value1, param2: value2")
```

- **Path:** Relative to the repository root, starting with `/_templates/`.
- **Section ID:** A `#section-id` within the template file, delimited by `#section-id` and `#end` markers.
- **Parameters:** Key-value pairs passed as template variables. Use `@{paramName}` placeholders inside the template.

### Available Templates

| Template                       | Purpose                                |
| ------------------------------ | -------------------------------------- |
| `common/render-mode.md`        | RenderMode documentation sections      |
| `common/skins-notes.md`        | Skin/theme customization notes         |
| `common/font-size-notes.md`    | Font size and elastic design notes     |
| `common/wai-aria-templates.md` | Accessibility (WAI-ARIA) documentation |

---

## Navigation

Navigation is defined in `_config.yml` under the `navigation:` key. Each entry maps a folder path to a title and position:

```yaml
navigation:
  "controls/grid":
    title: "Grid"
    position: 2
  "controls/grid/data-binding":
    title: "Data Binding"
    position: 5
```

- Use the `position` field in both `_config.yml` and article frontmatter to control ordering.
- Knowledge Base articles are **excluded** from the main navigation tree (`exclude_navigation: ["knowledge-base/*"]`).

---

## Build Configuration

### Key Files

| File               | Purpose                                                   |
| ------------------ | --------------------------------------------------------- |
| `_config.yml`      | Jekyll configuration, navigation tree, excludes           |
| `docs-builder.yml` | Product metadata, CTA text, search config, meta overrides |
| `Gemfile`          | Ruby/Jekyll dependencies                                  |
| `Dockerfile`       | Containerized build environment                           |
| `build-docs.sh`    | Main build script                                         |

### docs-builder.yml Variables

The `docs-builder.yml` file defines product-level variables:

```yaml
product-name: Telerik UI for ASP.NET AJAX
product-code: RCAJAX
product-id: 561
product-url: https://www.telerik.com/products/aspnet-ajax.aspx
enable-tabbed-code-blocks: true
```

---

## Custom Jekyll Plugins

Key plugins in `_plugins/` that affect article authoring:

| Plugin                       | Effect on Content                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| `alert_generator.rb`         | Converts `>tip`, `>note`, `>important`, `>caution`, `>warning` into styled blockquotes |
| `code_tabstrip_generator.rb` | Renders consecutive C#/VB code blocks as tabs                                          |
| `caption_generator.rb`       | Processes `>caption` blockquotes                                                       |
| `template_generator.rb`      | Processes `@[template]` inclusions and `@{variable}` substitutions                     |
| `slug.rb`                    | Resolves `{%slug %}` links to actual URLs                                              |
| `redirect_generator.rb`      | Generates redirect pages from `previous_url` frontmatter                               |
| `markdown_processor.rb`      | Adds `baseurl` prefix to root-relative links and images                                |
| `embed_file.rb`              | Embeds file contents with `{% embed_file path %}`                                      |
| `embed_demo.rb`              | Embeds demo content with `{% embed_demo path %}`                                       |

---

## Formatting Conventions

### Text Formatting

- **Bold** for UI elements, control names, and property names in prose: `**RadGrid**`, `**AllowPaging**`, `**Design view**`.
- `Backticks` for code keywords, property values, API members, and inline code: `` `DataSource` ``, `` `True` ``, `` `OnNeedDataSource` ``.
- _Italics_ sparingly, for emphasis only.

### Headings

- `# H1` — One per article, typically the control or feature name (e.g., `# WebForms Grid Overview`).
- `## H2` — Major sections.
- `### H3` — Subsections within H2 sections.
- Do not skip heading levels (e.g., do not go from `## H2` directly to `#### H4`).

### Lists

- Use numbered lists for sequential steps.
- Use bulleted lists for non-sequential items.
- **See Also** sections always use bulleted lists with slug links.

### Code Order in Examples

When an example includes both markup and code-behind:

1. ASP.NET markup first (`.aspx`)
2. C# code-behind
3. VB.NET code-behind
4. JavaScript (if applicable)
5. CSS (if applicable)

---

## WebForms Markup Conventions

### ScriptManager Requirement

Always include `<asp:ScriptManager>` in standalone page examples:

```ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
```

### Telerik Control Tags

All Telerik controls use the `<telerik:ControlName>` tag prefix:

```ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True">
</telerik:RadGrid>
```

### Common Patterns

- Always include `ID` and `runat="server"` on server controls.
- Use `PascalCase` for property names and control IDs.
- Use meaningful IDs (e.g., `RadGrid1`, `RadButton_Submit`).

---

## API Documentation

API reference articles are located in the `api/` folder with two branches:

- `api/server/` — Server-side .NET API (e.g., `Telerik.Web.UI.RadGrid`)
- `api/client/` — Client-side JavaScript API (e.g., `Telerik.Web.UI.RadGrid`)

API articles use the `api-index` layout and are marked with `is_api: true` and `res_type: api` in frontmatter.

---

## File and Folder Naming

- Article files: lowercase with hyphens (e.g., `getting-started.md`, `data-binding.md`).
- KB article files: descriptive names with hyphens (e.g., `grid-apply-filters-and-then-display-grid.md`).
- Image files: descriptive names with hyphens (e.g., `grid-overview-basic.png`).
- Each control has its own folder under `controls/` with subfolders for related topics and an `images/` subfolder.

---

## Naming Conventions

- PascalCase for model members (`Id`, `FirstName`)
- camelCase for local variables and lambdas
- Avoid repeating class names in properties (`Product.Name`, not `Product.ProductName`)
- Use meaningful names (`GridModel`, `Product`)
- For test data: prefer `[Component]Data` or plural nouns (`GridData`, `Products`)
- For references: `[Component]Ref` (e.g., `GridRef`)

---

## Components

- Use minimal configuration for clarity.

---

## Event Handlers

- Use `On[Component][Event]` or descriptive verbs (`OnGridDataBound`, `ReloadGrid`).
- Use `e` or `args` for event arguments in JS.
- Place handlers outside the component.

---

## Data Generation

- Use `List<T>` for samples.
- Avoid `Id = 0`.
- Use `Random` for realistic values.

---

## Documentation Structure

- `overview.md` – purpose and usage
- `events.md` – supported events
- `templates.md` – templates overview
- `appearance.md` – styling and customization

---

## Writing Guidelines

- Use American English.
- Prefer active voice.
- Avoid gerunds when possible.
- Use present simple tense.
- Short sentences (≤ 25 words).
- Short paragraphs (≤ 6 lines).

## Article Structure and Navigation

```markdown
# Article Title

Brief introduction explaining the article's purpose.

- [Section One](#section-one)
- [Section Two](#section-two)
- [Advanced Configuration](#advanced-configuration)
- [Best Practices](#best-practices)

## Section One

Content here...

## Section Two

Content here...
```

---

## Formatting

| Element          | Style         | Example                                    |
| ---------------- | ------------- | ------------------------------------------ |
| UI elements      | Bold          | Click Save                                 |
| Code/keywords    | `Code`        | Set `filterable` to `true`                 |
| Keys             | `Code`        | Press `Ctrl+S`                             |
| Cross-references | [Descriptive] | See [Grid Filtering](../grid/filtering.md) |

---

## Notes, Tips, and Warnings

> note This article describes the basic usage of the AutoComplete.  
> tip You can bind the AutoComplete to both local and remote data.  
> caution Setting the `Name` option is mandatory.

---

## FAQ Articles

Heading = question.

# How can I bind the Grid to a remote data source?

---

## Next Steps

- Appears at the end of overview or getting started articles.
- Purpose: structured guidance for learning the component further.
- Always bulleted list.

### Example

## Next Steps

- [Bind the Grid to Local Data]({% slug databinding_grid %})
- [Configure Grid Columns]({% slug columns_grid %})
- [Handle Grid Events]({% slug events_grid %})

---

## See Also

- Appears at the end of all articles.
- Purpose: provide related articles, KBs, external links.
- Always bulleted list.

### Example

## See Also

- [Grid Overview]({% slug overview_grid %})
- [Grid Data Binding]({% slug databinding_grid %})
- [Knowledge Base: How to Export the Grid to Excel](https://docs.telerik.com/kendo-ui/knowledge-base/grid-export-excel)

---

# Copilot Rules

When generating docs:

- Always add metadata at the top.
- Use global variables (`{{ site.product }}`, `{{ site.framework }}`).
- Follow Telerik API exactly.
- Article structure:
  - Overview
  - Getting Started
  - Configuration
  - Events
  - Templates
  - Appearance
  - Next Steps
  - See Also
- End with related links.

---

## Slug Reference Patterns

Use correct slugs when referencing existing articles. Common Grid slug patterns:

| Article Type               | Slug Pattern                                                          | Example                                                                                            |
| -------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Overview                   | `controlname/overview`                                                | `{% slug grid/overview %}`                                                                         |
| Getting Started            | `controlname/getting_started`                                         | `{% slug grid/getting_started %}`                                                                  |
| Client Events              | `controlname/client-side-programming/events`                          | `{% slug grid/client-side-programming/events %}`                                                   |
| Server Events              | `controlname/server-side-programming/events`                          | `{% slug grid/server-side-programming/events %}`                                                   |
| Data Binding Overview      | `controlname/data-binding/overview`                                   | `{% slug grid/data-binding/overview %}`                                                            |
| Columns Overview           | `controlname/column-types`                                            | `{% slug grid/column-types %}`                                                                     |
| Filtering                  | `controlname/functionality/filtering/overview`                        | `{% slug grid/functionality/filtering/overview %}`                                                 |
| Sorting                    | `controlname/functionality/sorting/overview`                          | `{% slug grid/functionality/sorting/overview %}`                                                   |
| Paging                     | `controlname/functionality/paging/overview`                           | `{% slug grid/functionality/paging/overview %}`                                                    |
| Grouping                   | `controlname/functionality/grouping/overview`                         | `{% slug grid/functionality/grouping/overview %}`                                                  |
| Selecting                  | `controlname/functionality/selecting/overview`                        | `{% slug grid/functionality/selecting/overview %}`                                                 |
| Hierarchy                  | `controlname/hierarchy`                                               | `{% slug grid/hierarchical-grid-types-and-load-modes/understanding-hierarchical-grid-structure %}` |
| Performance Best Practices | `controlname/performance/controlname-performance-optimizations`       | `{% slug grid/performance/grid-performance-optimizations %}`                                       |
| Accessibility              | `controlname/accessibility-and-internationalization/wai-aria-support` | `{% slug grid/accessibility-and-internationalization/wai-aria-support %}`                          |
| Keyboard Navigation        | `controlname/accessibility-and-internationalization/keyboard-support` | `{% slug grid/accessibility-and-internationalization/keyboard-support %}`                          |

⚠️ Always verify slugs by checking existing article files before using them in cross-references. Incorrect slugs will cause documentation build failures.

---
