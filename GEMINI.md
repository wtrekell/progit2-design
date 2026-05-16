# Pro Git (2nd Edition) - Gemini Context

This repository contains the source code and assets for the second edition of the **Pro Git** book, written by Scott Chacon and Ben Straub. The book is an open-source guide to mastering Git, available online at [git-scm.com/book](https://git-scm.com/book).

## Project Overview

*   **Primary Format:** The book is written using **AsciiDoc**.
*   **Build System:** Uses **Ruby** with **Asciidoctor** and **Rake**.
*   **Architecture:**
    *   `progit.asc`: The master entry point that includes all chapters and front matter.
    *   `book/`: Contains the modular content. Each chapter is often represented by a container `.asc` file at the root or in `book/`, which then includes specific section files located in `book/<chapter>/sections/`.
    *   `images/`: Stores all visual assets (PNG and SVG).
    *   `theme/`: Contains styling and templates for various output formats (HTML, PDF, EPUB, Mobi).
    *   `diagram-source/`: Holds the original **Sketch 3** (`.sketch`) files for diagrams.

## Building and Running

The project uses `rake` to orchestrate the build process. Ensure you have Ruby installed and run `bundle install` first.

### Key Build Commands

*   **Build all formats:**
    ```bash
    bundle exec rake book:build
    ```
*   **Build HTML:**
    ```bash
    bundle exec rake book:build_html
    ```
*   **Build PDF:**
    ```bash
    bundle exec rake book:build_pdf
    ```
*   **Build EPUB:**
    ```bash
    bundle exec rake book:build_epub
    ```
*   **Build Mobi:**
    ```bash
    bundle exec rake book:build_mobi
    ```
*   **Clean generated files:**
    ```bash
    bundle exec rake book:clean
    ```

## Development Conventions

### Content Authoring
*   **AsciiDoc:** Adhere to AsciiDoc syntax. Refer to the [AsciiDoc Quick Reference](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/) if needed.
*   **Modular Sections:** Do not write large blocks of text directly in the chapter container files. Instead, create section files in the appropriate `book/<chapter>/sections/` directory and include them in the main chapter file.
*   **Cross-references:** Use the `[[anchor]]` syntax for defining anchors and `<<anchor>>` or `xref:anchor[]` for referencing them.

### Images and Diagrams
*   **Source Files:** Original diagrams are in `diagram-source/progit.sketch`. Use Sketch 3 to modify them.
*   **Exporting:** Slices in Sketch should match the target filename and be exported at `800w`.
*   **Referencing:** Use the `image::images/filename.png[]` macro in AsciiDoc.

### Contributions
*   **Licensing:** All contributions are provided under the Creative Commons license specified in `LICENSE.asc`.
*   **Translation:** Translations are maintained in separate repositories. Refer to `TRANSLATING.md` for more information.
*   **Issues:** Check for existing issues before reporting new ones. Verify if the issue persists in the PDF version or the source files, as the website might lag behind.

## Key Files Summary

*   `progit.asc`: The main book file.
*   `Rakefile`: Defines all build tasks.
*   `Gemfile`: Lists Ruby dependencies (Asciidoctor, etc.).
*   `atlas.json`: Configuration for the O'Reilly Atlas publishing platform.
*   `status.json`: Metadata about chapters and their translation/completion status.
*   `CONTRIBUTING.md`: Detailed guidelines for contributors.
