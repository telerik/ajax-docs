# Support Ticket Knowledge-Base Workflow

This folder contains an agent and two skills for reviewing Telerik Support Heroes
threads and turning eligible AJAX resolutions into documentation work.

## What is included

- [Support ticket KB workflow agent](agents/telerik-support-ticket-kb-workflow.agent.md)
  runs the complete queue workflow from Support Heroes review through the
  applicable documentation and publication steps.
- [Documentation semantic search skill](skills/telerik-documentation-semantic-search/SKILL.md)
  searches the full local documentation repository and decides whether a ticket
  is covered, unsuitable, requires manual review, or is a KB candidate.
- [KB review and repair skill](skills/telerik-documentation-kb-review-and-repair/SKILL.md)
  checks an accepted draft against local documentation rules, repairs it when
  appropriate, and validates the result.

The two skills are stages in the agent workflow. Run semantic search before KB
review and repair.

## Use the complete agent

The agent identifier is `telerik-support-ticket-kb-workflow`. Select that agent
in the VS Code agent picker before sending the request.

### 1. Prepare the required information

Have these values ready:

- Support Heroes My Threads URL: `https://supportheroes.telerik.com/my-threads`
- Product: `AJAX`, with all AJAX products selected
- Exact date period, including start and end dates
- Local repository: `C:\work\ajax-docs`

The agent uses the templates in
`skills/telerik-documentation-kb-review-and-repair/references/`.

### 2. Invoke the agent in VS Code

To invoke `telerik-support-ticket-kb-workflow`, open Copilot Chat and select
`telerik-support-ticket-kb-workflow` from the agent picker. Then send a request
containing the required values. For example:

```text
Review all Support Heroes tickets for the AJAX product from 2026-10-01 through
2026-10-21. Use https://supportheroes.telerik.com/my-threads and the local
repository C:\work\ajax-docs. Complete the workflow for every ticket and report
the final disposition for the full queue.
```

The date range in the example is illustrative. Replace it with the requested
period.

### 3. Complete interactive login if prompted

If Support Heroes requests authentication, sign in in the opened browser page.
Do not send credentials in chat. The agent continues from the same browser page
after login.

### 4. Let the agent enumerate the complete queue

The complete run has five phases: queue enumeration, ticket assessment,
accepted-draft generation, repository review and repair, and preview and
publication of verified new articles.

The agent applies the product and date filters, verifies the filtered Ticket
Search results, reads every result page, and deduplicates ticket IDs. It then
reviews tickets one at a time, newest first. A candidate tag alone does not
make a ticket eligible.

### 5. Review the ticket decisions

Each in-scope ticket receives one of these decisions:

- `GOOD_CANDIDATE`: reusable resolution with a verified documentation gap
- `COVERED`: the same need is already documented by an exact owner
- `NOT_A_CANDIDATE`: unsuitable for public documentation
- `MANUAL_REVIEW`: evidence or product verification is incomplete or conflicting
- `SECURITY_REVIEW_ONLY`: security content that must remain read-only
- `OUT_OF_SCOPE`: product or date does not match the request

Only `GOOD_CANDIDATE` tickets continue to draft generation and KB review.

### 6. Review accepted drafts and complete publication when applicable

For each accepted candidate, the agent:

1. Redacts customer or confidential information.
2. Selects `How-to` or `Troubleshooting` and uses the matching template.
3. Runs semantic coverage checks across the full repository.
4. Reviews and repairs the generated article.
5. Updates one exact existing owner when the handoff says
   `UpdateExistingArticle`.
6. Returns copy-ready Markdown to Support Heroes when the handoff says
   `CreateNewArticle`.
7. Previews and publishes only a verified new article through Support Heroes.

The agent does not create a new article file locally. It does not publish covered,
unsuitable, manual-review, security-only, or blocked tickets, and it does not
merge pull requests.

### 7. Check the final report

The final report includes the product and date period, queue totals, every ticket
disposition, candidate validation results, blocked items, and exact follow-up
actions. It also states that no queue export or native save was used and that no
pull request was represented as merged or live.

## Run the skills separately

Use the individual skills when the complete browser workflow is not needed.
Always search before reviewing or repairing a draft.

### Step 1: Run semantic coverage search

Provide the semantic search skill with:

- Exact repository path: `C:\work\ajax-docs`
- Full ticket conversation or technical resolution
- Product, component, and version, when known
- Confirmation that the source is a Support Heroes ticket/thread
- Whether the solution came from a Telerik engineer
- Ticket ID and visible tags, if available

The skill searches product documentation and KB content across the supplied
repository. It returns a compact handoff in this form:

```text
Decision: <classification> | <action> | <confidence>
Context: <product/component> | <version> | <input type> | <repository>
Coverage: <documentation areas searched>
Evidence: <semantic or lexical> | <strongest owner or none>
Next: <one exact next action>
Risks: <unverified, contradictory, or blocking claims>
```

Do not draft or edit documentation during this stage.

### Step 2: Run KB review and repair for accepted candidates

Run the KB review skill only when the handoff is `GOOD_CANDIDATE`. Provide:

- Exact repository path
- Generated article text or exact article path
- The complete semantic-search handoff
- Candidacy reason and evidence
- Source type, product, component, version, and acceptance criteria

For pasted content, use `PastedContent`. For an existing local draft, use
`FilePath`. The skill edits only an unambiguous existing owner for
`UpdateExistingArticle`; for `CreateNewArticle`, it returns validated
copy-ready Markdown and does not create a new repository file.

The review result reports the input mode, pass or block status, changes,
validation commands, and the next action. Do not continue when the handoff is
`COVERED`, `NOT_A_CANDIDATE`, `MANUAL_REVIEW`, or
`SECURITY_REVIEW_ONLY`.

## Important boundaries

- Search only the pointed repository; do not infer a gap from a KB-only search.
- Treat Telerik engineer guidance as product evidence, while checking for local
  contradictions.
- Do not expose credentials, customer names, account details, private URLs, or
  other confidential information.
- Do not create or edit security documentation.
- Do not invent internal slugs; verify the target file before using a slug link.
- Preserve unrelated worktree changes.
- Do not commit or push unless explicitly requested.
