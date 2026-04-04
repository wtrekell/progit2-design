# Appendix A: Git in Other Environments — Section Outline

> **Storyline phase**: Tooling Choices
> **Characters**: Nora (CLI), Sam (VS Code), Priya (GitHub Desktop), Kai (JetBrains)
> **Key event**: Team never agreed on one tool — each uses what fits their workflow

---

## Structural Change: Add Decision Tree Opening

### New Section: "Choosing Your Git Interface"
Add at the start (~20 lines):
- "There is no single best Git tool. Each SketchSpark team member uses something different."
- Decision tree:
  - "I mainly write text files (research, docs, tokens)" → CLI or VS Code
  - "I work with lots of image files and large binaries" → GitHub Desktop
  - "I write code alongside design work" → VS Code or JetBrains
  - "I want the simplest possible interface" → GitHub Desktop
  - "I want maximum control" → CLI
- "No choice is wrong. The best Git tool is the one you'll actually use."

---

## Section: Graphical Interfaces (`guis.asc`)
**Original**: 151 lines | **Action**: REWRITE

### Keep
- gitk and git-gui mention (for reference)
- Third-party client overview concept

### Rewrite
- Lead with the three tools the team actually uses: GitHub Desktop, VS Code Git panel, GitKraken
- Add: "When to use Git vs. cloud design tools" — Figma's version history handles Figma files; Git handles everything else (tokens, docs, research, exports, configs)
- Add `.gitignore` reminder: "GUI tools still require `.gitignore` — they just provide a friendlier way to stage and commit."
- Replace generic client list with curated recommendations for designers

---

## Section: Visual Studio Code (`visualstudiocode.asc`)
**Original**: 22 lines | **Action**: EXPAND

### Rewrite
- Expand to ~50 lines — VS Code is Sam's primary tool
- "Sam edits `design-tokens.json` and `user-flows.md` with inline gutter indicators showing what changed since last commit."
- Highlight: Source Control panel, inline diff, staging individual hunks via UI, GitHub PR extension for reviewing Marcus's contributions
- Add: "VS Code's Git integration covers 90% of daily design workflow. You'll need the CLI for advanced operations (rebase, bisect, reflog)."
- Note limitation: "Binary files (PNGs, Figma exports) show as 'changed' but can't display visual diffs in VS Code."

---

## Section: JetBrains IDEs (`jetbrainsides.asc`)
**Original**: 11 lines | **Action**: LIGHT EXPAND

### Rewrite
- Frame for Kai: "WebStorm integrates Git into the development workflow — commit, push, merge conflicts, and log are accessible without leaving the editor."
- Add: Version Control ToolWindow, three-pane merge conflict resolution
- ~20 lines (up from 11)

---

## Section: Sublime Text (`sublimetext.asc`)
**Original**: 16 lines | **Action**: KEEP, ADD NOTE

### Add
- "If you use Sublime Text, its Git integration is solid. For most designers, VS Code or GitHub Desktop will be more intuitive."

---

## Sections: Shell Configuration (Bash, Zsh, PowerShell)
**Original**: 184 lines combined | **Action**: TRIM

### Bash (`bash.asc`, 43 lines) → TRIM TO ~20 LINES
- Keep: prompt showing current branch (safety check — "prevents committing to wrong branch")
- Cut: detailed `\w`, `\$` syntax — link to reference

### Zsh (`zsh.asc`, 55 lines) → TRIM TO ~25 LINES
- Note: Zsh is macOS default post-Catalina
- Recommend oh-my-zsh as beginner-friendly path
- Cut: manual `vcs_info` configuration detail

### PowerShell (`powershell.asc`, 86 lines) → TRIM TO ~30 LINES
- Simplify posh-git installation to single command
- Cut: ExecutionPolicy scope explanation
- Add: "For Windows designers who prefer a visual tool, GitHub Desktop is a simpler alternative."

---

## Appendix Summary
**Action**: ADD

### New
- "The right tool depends on your role and comfort level. Nora's CLI mastery, Sam's VS Code workflow, Priya's GitHub Desktop staging, and Kai's JetBrains integration all accomplish the same thing — they just match different working styles. Start with whatever feels least intimidating and expand from there."
