# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the source repository for **Pro Git, Second Edition** — the official Git book published at https://git-scm.com/book. Content is written in AsciiDoc and built into HTML, PDF, EPUB, Mobi, and FB2 formats using Ruby-based tooling (Asciidoctor).

## Build Commands

Requires Ruby 3.1+ and Bundler. Install dependencies first with `bundle install`.

```bash
bundle exec rake book:build          # Build all formats (HTML, EPUB, FB2, Mobi, PDF)
bundle exec rake book:build_html     # Build HTML only (fastest, outputs progit.html)
bundle exec rake book:build_epub     # Build EPUB only (outputs progit.epub)
bundle exec rake book:build_pdf      # Build PDF only (slow, outputs progit.pdf)
bundle exec rake book:build_mobi     # Build Mobi/KF8 (outputs progit.mobi)
bundle exec rake book:build_fb2      # Build FB2 (outputs progit.fb2.zip)
bundle exec rake book:clean          # Remove all generated files
```

## Validation / Testing

There are no unit tests. Validation checks the generated output formats:

```bash
bundle exec rake book:check          # Builds HTML + EPUB, then runs htmlproofer and epubcheck
```

CI runs `bundle exec rake book:build` on pull requests to main.

## Architecture

**Entry point:** `progit.asc` — the master document that includes all chapters via AsciiDoc `include::` directives.

**Content structure:** Each chapter lives in `book/NN-chapter-name/` with a main `.asc` file and a `sections/` subdirectory containing individual topic files. Chapter-level include files (`ch01-getting-started.asc`, etc.) sit at the root and bridge `progit.asc` to the `book/` subdirectories.

**Themes:** Output format styling is in `theme/` with subdirectories per format (`html/`, `epub/`, `pdf/`, `mobi/`), each containing XSL and CSS files.

**Images:** Diagrams are in `images/` (PNG/SVG). Source designs are in `diagram-source/progit.sketch`. New figures should be added as pages in the Sketch file, exported at 800w.

**Build system:** `Rakefile` defines all build tasks. It auto-generates `book/contributors.txt` from git history and embeds version/date info from git tags into builds.

## Content Guidelines

- Content is licensed CC-BY-NC-SA-3.0. Contributors agree to this license via PR.
- Small corrections (errata, clarifications) are accepted directly. Large rewrites require an issue for discussion first — professional copy editors have already reviewed the content.
- The book has 10 chapters (01–10), plus 3 appendices (A, B, C).
