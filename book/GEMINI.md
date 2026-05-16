# Authoring Context: Pro Git for UX Designers

This directory contains the AsciiDoc source for the book. When authoring or revising content, strictly adhere to the following guides and conventions.

## Core Mandates
- **Tone:** Follow the [Voice and Tone Guide](../00-notes/voice-and-tone.md). Be empathetic, visual, and narrative-driven.
- **Consistency:** Adhere to [Cross-Chapter Conventions](../00-notes/conventions.md) for character names, branch names, and milestones.
- **Content Types:** Every sub-section must be tagged with a content type from the [Content Type Lexicon](../00-notes/content-type-lexicon.md).
- **Structure:** Use AsciiDoc. Keep sections modular. Include walkthroughs that reference the sample `sketchspark/` repository.

## Working with Walkthroughs
- Use the `sketchspark/` directory in the root to verify commands if possible.
- When describing a command, explain the *intent* (Nora's perspective) before showing the syntax.
- Use `[Phase: Component]` prefixes for any example commit messages.

## Chapter Progress
Refer to `00-notes/storyline.md` to ensure the narrative progression matches the chapter's Git focus.

## Content Tagging Example
```asciidoc
==== Stage Your Changes
tag::walkthrough[]

Nora has updated the product brief and is ready to select her changes for the next checkpoint...

[source,bash]
----
git add product-brief.md
----
```
