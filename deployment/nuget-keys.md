---
title: Restoring NuGet Packages in CI
page_title: Restoring NuGet Packages in CI
description: "Learn how Telerik ASP.NET AJAX enables you to use NuGet Keys to authenticate with the Telerik NuGet server and restore packages in your CI or desktop environment."
slug: deployment/nuget-keys
position: 6
---

# Restoring NuGet Packages in Your CI Workflow

This article describes how to use token-based authentication for the Telerik NuGet feed. You will learn how to create and use NuGet API keys to restore Telerik NuGet packages in your Continuous Integration (CI) workflow.

When you need to restore the [Telerik NuGet packages](slug:getting-started/what-you-need#nuget-packages) as part of your CI, using API Keys provides a secure way to authenticate. This method does not require you to provide your Telerik credentials anywhere in the CI workflow. An API key has a limited scope and can be used only with the Telerik NuGet server. If any of your API Keys is compromised, you can quickly delete it and create a new one.

## Generating API Keys

As the Telerik NuGet server requires authentication, the first step is to obtain an API key that you will use instead of a password. Using an API key instead of a password is a more secure approach.

1. Go to the [API Keys](https://www.telerik.com/account/downloads/api-keys) page in your Telerik account.
1. Click **Generate New Key +**.
1. In the **Key Note** field, add a note that describes the API key.
1. Click **Generate Key**.
1. Select **Copy and Close**. Once you close the window, you can no longer copy the generated key. For security reasons, the **API Keys** page displays only a portion of the key.
1. Store the generated NuGet API key as you will need it in the next steps. Whenever you need to authenticate your system with the Telerik NuGet server, use `api-key` as the username and your generated API key as the password.

## Storing API Keys

>warning Never check in NuGet API keys with your source code or leave them publicly visible in plain text (for example, in a `NuGet.Config` file). An API key is valuable and bad actors can use it to access the NuGet packages that are licensed under your account. A key abuse can lead to a review of the affected Telerik account.

To protect the API key, store it as a secret environment variable. The exact store steps depend on your workflow and environment:

* In GitHub Actions, save the key as a [GitHub Actions Secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions).
* In Azure DevOps, save the key as a [secret Azure DevOps pipeline variable](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/set-secret-variables). If you use an Azure DevOps Service connection instead of secret environment variables, enter `api-key` in the username field and the API key as the password in the **New NuGet service connection** form editor.
* In Docker images, save the key as a [Docker secret](https://docs.docker.com/tags/secrets/).

For more details on storing and protecting your API key, check the [Announcing NuGet Keys](https://www.telerik.com/blogs/announcing-nuget-keys) blog post by Lance McCarthy.

The examples below assume that the secret environment variable name is `TELERIK_NUGET_KEY`.


## Using API Keys

There are two common ways to use a [stored API key](#storing-api-keys) with the Telerik NuGet server during a build:

* [Use a NuGet.Config file](#using-a-nuget-config-file)
* [Use only CLI commands](#using-net-cli-commands)

For more information on how to use API keys in a build, check the [Announcing NuGet Keys](https://www.telerik.com/blogs/announcing-nuget-keys) blog post by Lance McCarthy.

### Using a NuGet.Config File

In your `NuGet.Config` file, set the `Username` value to `api-key` and the `ClearTextPassword` value to an environment variable name:

<div class="skip-repl"></div>

````XML
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
  <packageSources>
    <clear />
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
    <add key="TelerikOnlineFeed" value="https://nuget.telerik.com/v3/index.json" protocolVersion="3" />
  </packageSources>
  <packageSourceCredentials>
    <TelerikOnlineFeed>
      <add key="Username" value="api-key" />
      <add key="ClearTextPassword" value="%TELERIK_NUGET_KEY%" />
    </TelerikOnlineFeed>
  </packageSourceCredentials>
</configuration>
````

### Using .NET CLI Commands

You can use the .NET CLI `add source` or `update source` commands to set the credentials of a package source. This CLI approach is applicable if your CI system doesn't support [environment variable secrets](#storing-api-keys) or if you do not [use a custom `NuGet.Config`](#using-a-nuget-config-file).

* To set the credentials in Azure DevOps:

    ````SH.skip-repl
    dotnet nuget add source 'https://nuget.telerik.com/v3/index.json' --name 'TelerikOnlineFeed' --username 'api-key' --password '$(TELERIK_NUGET_KEY)' --configfile './NuGet.Config' --store-password-in-clear-text
    ````

* To set the credentials in GitHub Actions:

    ````SH.skip-repl
    dotnet nuget add source 'https://nuget.telerik.com/v3/index.json' --name 'TelerikOnlineFeed' --username 'api-key' --password '${{ "{{secrets.TELERIK_NUGET_KEY}}" }}' --configfile './NuGet.Config' --store-password-in-clear-text
    ````

> When restoring NuGet packages through the CLI, [use `dotnet restore` rather than `nuget restore` to avoid compatibility errors](slug:common-kb-package-telerik-pivot-not-compatible-with-netframework).

## See Also

* [Included Assemblies]({% slug introduction/installation/included-assemblies %})
* [Setting the web.config File]({% slug general-information/web-config-settings-overview %})
