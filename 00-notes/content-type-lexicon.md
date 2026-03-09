# Content Type Lexicon

This lexicon defines the content type tags used across all chapter TOC files.
Each sub-section is tagged to describe the **primary kind of content** it delivers.

## Content Types

| Tag          | Meaning                                                                                     |
|--------------|---------------------------------------------------------------------------------------------|
| `concept`    | Explains an idea, model, or theory. Answers "what is this?" or "how does this work?"        |
| `walkthrough`| Step-by-step narrative that guides the reader through a realistic scenario or workflow       |
| `procedure`  | Task-oriented instructions: do X, then Y, then Z. Answers "how do I do this?"               |
| `reference`  | Lookup-oriented listing of options, flags, commands, or settings                             |
| `history`    | Historical narrative or background context about origins and evolution                       |
| `comparison` | Evaluates alternatives side-by-side, including pros/cons and trade-offs                      |
| `diagram`    | Primarily visual — uses diagrams or figures to explain a model or data structure              |
| `recipe`     | Short, self-contained example showing a specific technique or tip                            |
| `config`     | Configuration-focused: editing config files, setting options, customizing behavior           |
| `internals`  | Deep dive into underlying mechanisms, data structures, or protocols                          |
| `overview`   | Brief orientation or survey — introduces a topic area without going deep                     |
| `integration`| Covers connecting Git with external tools, services, or platforms                            |

## Usage Rules

1. Every sub-section (`====` level) and leaf section (`===` with no children) gets exactly one tag.
2. Parent sections (`===` with children) do **not** get tagged — the children carry the type.
3. When a section blends types, choose the **dominant** one (>50% of content).
4. `Summary` sections at chapter end are tagged `overview` (they recap, not introduce).
