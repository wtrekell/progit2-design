# Appendix A: Git in Other Environments — UX Designer Revision Notes

## Overview
Appendix A covers terminal shells (Bash, Zsh, PowerShell) and IDE/editor integrations (VS Code, Sublime Text, JetBrains, GUIs). For designers, the IDE/GUI sections are most relevant. Shell configuration is intimidating and less applicable. A decision tree at the start would help designers choose the right section.

---

## Structural Recommendation

Add a **decision tree** at the beginning:
- "Are you on macOS?" → Zsh section
- "Are you on Windows?" → PowerShell section or GitHub Desktop
- "Are you using VS Code?" → VS Code section
- "Building a design system with React?" → WebStorm section

---

## Section: Graphical Interfaces (`guis.asc`)

### Priority: MEDIUM-HIGH

- Add design system branching strategy context
- Clarify when to use Git vs. cloud design tools (Figma's built-in versioning)
- Add `.gitignore` guidance for design artifacts
- Mention design-specific hosting (GitHub vs. Figma version control vs. Abstract/Plant)

---

## Section: VS Code (`visualstudiocode.asc`)

### Priority: MEDIUM

- Expand for design token workflows and design system documentation
- Add: "diff in gutter" is like Figma's "track changes"
- Add: when VS Code Git integration is insufficient (binary design files)
- Mention Pull Request extension for design reviews

---

## Section: Sublime Text (`sublimetext.asc`)

### Priority: LOW

- Clarify Sublime Merge integration
- Consider recommending VS Code instead for designers

---

## Section: JetBrains IDEs (`jetbrainsides.asc`)

### Priority: MEDIUM

- Focus on WebStorm (most relevant to designers building design systems)
- Explain Version Control ToolWindow
- Add design system component workflow example

---

## Section: Bash (`bash.asc`)

### Priority: LOW

- Shell configuration is intimidating for designers
- Add context: "The prompt showing branch name prevents committing to the wrong branch — a safety check"
- Simplify technical explanations (`\w`, `\$`)

---

## Section: Zsh (`zsh.asc`)

### Priority: LOW

- Note that Zsh is macOS default post-Catalina
- Reference oh-my-zsh as the beginner-friendly path (rather than manual vcs_info config)
- Zsh's graphical tab completion is like Figma's component picker — add this analogy

---

## Section: PowerShell (`powershell.asc`)

### Priority: LOW

- Condense ExecutionPolicy to single command — don't explain scopes in detail
- Suggest GitHub Desktop for Windows designers as simpler alternative

---

## Cross-Cutting Gaps

| Gap | Action |
|-----|--------|
| Design file version control limitations | Git works best with text; design files are binary/proprietary |
| Collaborative design workflows | When to use Git vs. Figma real-time collaboration |
| Design system branching | Managing v1, v2, v3 with branches or tags |
| Asset management | Versioning icons, illustrations, fonts in Git (Git LFS, separate repos, CDN) |
| Tool decision guidance | No help choosing between shell vs. editor, or between editors |
