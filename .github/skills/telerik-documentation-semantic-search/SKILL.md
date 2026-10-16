---
name: telerik-documentation-semantic-search
description: "Run a bounded, read-only coverage search against the current Telerik UI for ASP.NET AJAX documentation repository before deciding whether supplied knowledge-base content is new or already covered."
user-invocable: false
---

# Telerik UI for ASP.NET AJAX Documentation Semantic Search

Use this skill before authoring, reviewing, repairing, or editing a knowledge-
base article. It produces an evidence-backed handoff and never writes
documentation.

## Inputs

Require:

- the supplied technical information, question, draft, or article path;
- product, component, and version when known;
- whether the source is a support ticket/thread;
- whether solution code was supplied by a Telerik engineer, when applicable.

The current repository is the only search scope. Do not search sibling
repositories, the workspace, or external sites. Remove customer names,
account details, credentials, private URLs, and unrelated confidential details
from queries and output.

## Search Procedure

1. Confirm that the current repository is the Telerik UI for ASP.NET AJAX
   documentation repository. Use local evidence such as `README.md`,
   `docs-builder.yml`, and the `knowledge-base/` directory.
2. Read only the nearest routing rules needed for this search, especially
   `.github/docs-istructions.md` and any applicable repository guidance.
3. Create no more than five concise query variants:
   - the complete goal, symptom, cause, and expected result;
   - APIs, control names, events, properties, code symbols, and configuration;
   - product, component, version, error, workaround, and limitation;
   - distinctive technical phrases from the supplied information;
   - related vocabulary discovered during the first searches.
4. Search filenames, headings, prose, APIs, code, navigation, and likely KB
   paths. Search the technical behavior and outcome, not only the title, slug,
   ticket ID, or metadata.
5. Deduplicate results, then read no more than six strongest candidates. A
   search hit is not evidence until the relevant content is read.
6. Compare no more than eight meaningful information fragments independently.
   A candidate covers a fragment only when its prose or example answers the
   same technical need and outcome.
7. For support content, treat engineer-provided solution code as strong product
   evidence. Flag direct contradictions against local source, tests, or docs.
8. Use `ExistingResource` only for one unambiguous exact subject owner. Use
   `CreateNewArticle` for a distinct, self-contained, technically credible
   resolution. Use `ManualReview` when behavior or ownership remains
   unverified, contradictory, or ambiguous.
9. If semantic search is unavailable, use focused repository text search, label
   the result `lexical`, and lower confidence. A zero-result search is not
   proof of a documentation gap.

## Handoff

Return only:

```text
Decision: <ExistingResource | CreateNewArticle | ManualReview> | <confidence>
Context: <product/component> | <version> | <input type> | Telerik UI for ASP.NET AJAX
Evidence: <semantic or lexical> | <strongest owner or none>
Coverage: <Sufficient | Missing specific information | Contradictory>
Next: <none | review suggestions | resolve one blocker>
Risks: <only unverified, contradictory, or blocking claims; omit when none>
```

Do not draft article text, edit files, approve publication, or list every match
in this stage.