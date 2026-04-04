# Appendix B: Embedding Git in Your Applications — Section Outline

> **Storyline phase**: Tool Integration
> **Characters**: Kai, Priya, Nora
> **Key event**: SketchSpark uses libgit2 internally; Priya automates exports with Dulwich

---

## Structural Change: Reframe Entirely

Replace "how to code Git integration" with "where Git integration appears in design tools and how it affects UX."

### New Introduction (~15 lines)
> "This appendix is relevant in two scenarios: (1) you're designing applications that integrate version control, or (2) you want to understand how your design tools use Git under the hood. You don't need to write code — this is about understanding the landscape."

### New Section Order
1. Overview: "Where Git Integration Appears in Design Tools" (NEW)
2. Libgit2 → "The Library Behind Your Tools"
3. Dulwich → "Git Automation with Python"
4. Command-Line Git → "When Tools Shell Out to Git"
5. JGit & go-git → consolidated as "Other Libraries" (brief)

---

## New Section: Where Git Integration Appears
**Action**: NEW (~40 lines)

- GitHub Desktop, GitKraken, Sublime Merge — all built on libgit2
- Figma plugins that export to Git — use Dulwich or command-line Git
- CI/CD systems (GitHub Actions) — use command-line Git
- SketchSpark itself: Kai explains that the generation pipeline uses libgit2 to create each of the 5 generated options as a lightweight branch in a temporary repo. "The product's architecture mirrors Git's branching model — you've been using Git concepts through the UI all along."

---

## Section: Libgit2 (`libgit2.asc`)
**Original**: 237 lines | **Action**: REWRITE + TRIM

### Keep
- What libgit2 is and what it powers
- Language bindings concept (Rugged/Ruby, LibGit2Sharp/C#)
- Basic usage example

### Rewrite
- Lead with: "Libgit2 powers GitHub Desktop, GitKraken, and Sublime Merge — the GUI tools designers actually use."
- After code example, add: "In a design tool, users never see this code. They click 'Save Version' and libgit2 creates the commit."
- Frame bindings as: "Available in every language — Ruby, Python, C#, JavaScript. If your engineering team builds internal tools, they likely use one of these."

### Cut
- Advanced ODB backends
- Detailed binding installation instructions

### Target
- ~80 lines (down from 237)

---

## Section: Dulwich (`dulwich.asc`)
**Original**: 42 lines | **Action**: EXPAND

### Keep
- What Dulwich is (pure Python Git)

### Rewrite
- Frame as most designer-relevant: "Python is widely used in design automation — Figma plugins, token generation scripts, SVG optimization pipelines."
- **Priya's export script**: She wants to auto-commit illustrations whenever she exports from her design tool:
  ```python
  from dulwich.repo import Repo
  repo = Repo(".")
  repo.stage(["illustrations/onboarding/step-1-upload.png"])
  repo.do_commit(b"Auto-export: updated onboarding illustration step 1")
  ```
  "Ten lines of code. Now her workflow is: export from design tool → script commits automatically → she opens a PR when the batch is ready."
- Add: "Common in: Figma plugins, design token scripts, CI/CD automation, export pipelines."

### Target
- ~50 lines (up from 42)

---

## Section: Command-Line Git (`command-line.asc`)
**Original**: 16 lines | **Action**: REWRITE

### Rewrite
- Replace technical constraints (text parsing, process management) with UX design patterns:
  - "If you're designing an application that integrates Git, users expect: version history, save/commit, undo, branch/explore, and sync/share."
  - Reference existing UX patterns: GitHub Desktop's commit list, VS Code's gutter indicators, GitKraken's visual graph
- **Nora's exercise**: She sketches a "version history" panel for SketchSpark — translating Git concepts into a visual interface for non-technical designers

---

## Sections: JGit and go-git
**Original**: 243 lines combined | **Action**: CONSOLIDATE + TRIM

### Rewrite
- Combine into single "Other Libraries" section (~30 lines)
- JGit: "Java — powers Eclipse and some CI tools"
- go-git: "Go — powers CLI tools and some design token generators"
- Add: "For most design-adjacent work, Dulwich (Python) or libgit2 (multi-language) are more relevant."

---

## Appendix Summary
**Action**: ADD

### New
- "The tools you use every day — GitHub Desktop, VS Code, Figma plugins — are built on these libraries. Understanding that they exist demystifies how those tools work and opens the door to simple automation, like Priya's export script. You don't need to become a programmer — you just need to know what's possible."
