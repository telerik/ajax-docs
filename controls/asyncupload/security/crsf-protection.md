---
title: CSRF Protection
page_title: CSRF Protection - RadAsyncUpload
description: Check our Web Forms article about CSRF protection in RadAsyncUpload and how to enforce information encryption to prevent attacks.
slug: asyncupload-csrf-protection
tags: security
published: True
position: 15
---

# CSRF Protection for RadAsyncUpload

## Overview

As of **Q1 2026**, RadAsyncUpload includes built-in Cross-Site Request Forgery (CSRF) protection to enhance security. This feature validates upload requests using session-based tokens, preventing malicious sites from submitting unauthorized file uploads on behalf of authenticated users.

**CSRF protection is enabled by default** and requires session state to be enabled in your application.

## How It Works

1. **Token Generation**: When RadAsyncUpload renders on a page, it generates a unique CSRF token (HMAC-SHA256 hash) and stores it in the user's session
2. **Token Transmission**: The token is automatically included with each file upload request to the AsyncUpload handler
3. **Token Validation**: The handler validates that the token from the request matches the token stored in the session
4. **Constant-Time Comparison**: Token comparison uses constant-time equality checks to prevent timing attacks

## Requirements

- **Session State**: Your application must have session state enabled. CSRF protection requires access to `HttpContext.Session`
- If session state is disabled and CSRF validation is enabled, uploads will fail with an HTTP 500 error: *"Session state is required for CSRF validation but is not available."*

## Configuration

### Disabling CSRF Protection

While **not recommended**, you can disable CSRF protection by adding the following setting to your `web.config`:

```xml
<configuration>
  <appSettings>
    <add key="Telerik.AsyncUpload.EnableCsrfValidation" value="false" />
  </appSettings>
</configuration>
```

**Warning**: Disabling CSRF protection makes your application vulnerable to CSRF attacks. Only disable this if you have alternative CSRF protection mechanisms in place.

### Default Behavior

If the `Telerik.AsyncUpload.EnableCsrfValidation` key is:
- **Not present** in web.config: CSRF validation is **enabled** (secure by default)
- **Set to "true"**: CSRF validation is **enabled**
- **Set to "false"**: CSRF validation is **disabled**

## Error Handling

### HTTP 403 Forbidden

If a request fails CSRF validation, the handler returns an HTTP 403 Forbidden error. This typically indicates:
- The CSRF token is missing from the request
- The CSRF token doesn't match the session token
- The session has expired and a new token was generated

**Resolution**: Ensure the page is properly loaded before initiating uploads. If users experience session timeouts, consider increasing the session timeout in `web.config`:

```xml
<system.web>
  <sessionState timeout="60" />
</system.web>
```

### HTTP 500 Internal Server Error

If session state is not available, the handler returns an HTTP 500 error with the message: *"Session state is required for CSRF validation but is not available."*

**Resolution**: Enable session state in your application:

```xml
<system.web>
  <sessionState mode="InProc" />
</system.web>
```

Or disable CSRF validation if session state cannot be enabled (not recommended).

## Security Considerations

### Token Storage
- CSRF tokens are stored in the user's session using the key `"AsyncUploadCsrfToken"`
- Tokens are regenerated if the session is cleared or expires
- Each user session has its own unique token

### Token Generation
- Tokens are generated using HMAC-SHA256 cryptographic hashing
- The token is derived from a random GUID to ensure uniqueness and unpredictability

### Constant-Time Comparison
- The validation implementation uses constant-time string comparison to prevent timing attacks
- This ensures attackers cannot determine token validity by measuring response times

## Migration from Previous Versions

If you're upgrading from a version prior to Q1 2026:

1. **Ensure Session State is Enabled**: Verify that session state is configured in your `web.config`
2. **Test Upload Functionality**: Test file uploads in your application to ensure they work correctly
3. **Monitor for 403/500 Errors**: Check your logs for any CSRF validation errors after deployment
4. **Optional**: If you have existing CSRF protection mechanisms, you may choose to disable the built-in validation, but this is not recommended

## Example Configuration

### Recommended Configuration (CSRF Enabled)

```xml
<configuration>
  <system.web>
    <!-- Session state is required for CSRF protection -->
    <sessionState mode="InProc" timeout="20" />
  </system.web>
  
  <appSettings>
    <!-- CSRF validation is enabled by default - no configuration needed -->
    <!-- Optionally, explicitly enable it: -->
    <!-- <add key="Telerik.AsyncUpload.EnableCsrfValidation" value="true" /> -->
  </appSettings>
</configuration>
```

### Configuration for Cookieless Session Mode

CSRF protection works with cookieless sessions as well:

```xml
<configuration>
  <system.web>
    <sessionState mode="InProc" cookieless="UseUri" />
  </system.web>
</configuration>
```

## Additional Security Recommendations

While CSRF protection significantly enhances security, consider implementing these additional measures:

1. **File Type Validation**: Configure `AllowedFileExtensions` to restrict upload types
2. **File Size Limits**: Set `MaxFileSize` to prevent resource exhaustion
3. **Temporary Folder Security**: Ensure the temporary upload folder has appropriate permissions
4. **Custom File Handlers**: Implement server-side validation in upload event handlers
5. **HTTPS**: Always use HTTPS in production to prevent token interception

## See Also

- [RadAsyncUpload Security Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/asyncupload/security)
- [Configuring File Extensions](https://www.telerik.com/products/aspnet-ajax/documentation/controls/asyncupload/security#file-extension-validation)
- [Custom File Handlers](https://www.telerik.com/products/aspnet-ajax/documentation/controls/asyncupload/how-to/how-to-manipulate-the-uploaded-files)
