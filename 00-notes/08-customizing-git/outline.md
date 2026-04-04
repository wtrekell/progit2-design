# Chapter 8: Customizing Git — Section Outline

> **Storyline phase**: Process & Automation
> **Characters**: Nora, Sam, Priya, Kai
> **Key event**: `.gitattributes` for binary files, commit template, pre-commit hooks

---

## Section: Git Configuration (`config.asc`)
**Original**: 517 lines | **Action**: REWRITE + TRIM

### Keep
- External merge/diff tools (visual comparison — intuitive for designers)
- Commit templates
- Color configuration
- `core.editor` setting

### Rewrite
- **Commit template**: Replace `[Ticket: X]` with SketchSpark template:
  ```
  [Phase: Component] Short description

  # Phases: Research, Concept, Design, Pipeline, Docs, Fix, Release
  ```
  Show `git config commit.template .gitmessage`
- **Diff tool**: Expand with `design-tokens.json` diff example — show how visual diff tools make JSON changes easier to review
- **Color**: "Designers naturally understand color configuration — customize Git's terminal output to match your preferences."

### Cut
- `core.autocrlf` and `core.whitespace` — irrelevant to designers working with design files
- Server-side config — designers don't administer servers
- Detailed pager/diff algorithm config

### Target
- ~250 lines (down from 517)

---

## Section: Git Attributes (`attributes.asc`)
**Original**: 377 lines | **Action**: REWRITE — THIS IS THE CHAPTER'S CENTERPIECE

### Keep
- Binary file identification
- Custom diff drivers
- Export-ignore
- Merge strategies per file

### Rewrite
- **Binary file handling**: Replace generic examples with SketchSpark's `.gitattributes`:
  ```
  # Binary — don't attempt to diff or merge
  *.png binary
  *.psd binary
  *.fig binary
  *.sketch binary

  # Text-based design files — diff normally
  *.svg diff
  *.md diff
  *.json diff
  *.yaml diff

  # Large source files — version but exclude from archives
  *.psd export-ignore
  *.sketch export-ignore
  research/raw-interviews/ export-ignore
  ```
- **Image diffing**: Nora sets up EXIF-based diffing for PNG exports — `git diff` shows metadata changes (dimensions, color profile, DPI). "It's not a visual diff, but it catches the color profile mistake that cost Priya time in Chapter 7."
- **Export-ignore**: "Priya's `.psd` source files are versioned in Git (for backup and history) but excluded from release archives. Stakeholders get clean exports, not 100MB Photoshop files."
- **Merge strategy**: "For binary design files, set `merge=ours` — if two people modify the same illustration, Git keeps your version and flags the conflict rather than producing a corrupted merge."

### Cut
- C code indentation filter — replace with design-relevant filter concept: "A filter could auto-optimize SVGs on checkout or transform design tokens from JSON to CSS variables."
- Complex Ruby keyword expansion

### New
- Add complete `.gitattributes` template for design projects with comments explaining each rule

---

## Section: Git Hooks (`hooks.asc`)
**Original**: 131 lines | **Action**: REWRITE

### Keep
- Hook lifecycle (client-side vs. server-side)
- pre-commit, commit-msg, post-commit

### Rewrite
- Front-load the hooks designers will use:
  1. **pre-commit**: "Validate `model-params.yaml` syntax before committing. Check that prompt templates don't exceed 4096 tokens. Warn if PNG files exceed 5MB."
  2. **commit-msg**: "Validate that commit messages match `[Phase: Component]` pattern. Reject `fix stuff` with a helpful error."
  3. **post-commit**: "Trigger a design system build or Slack notification after each commit."
- De-emphasize email hooks (`applypatch-msg`, `pre-applypatch`) — designers never use `git am`
- Add: "Hooks are shell scripts in `.git/hooks/`. They run automatically. If a pre-commit hook fails, the commit is blocked until you fix the issue."

### New
- Provide copy-paste hook scripts — designers can't write Ruby/Perl from scratch:
  - YAML validation pre-commit hook (5 lines of bash)
  - Commit message format validation (10 lines of bash)
  - File size warning (5 lines of bash)

---

## Section: An Example Git-Enforced Policy (`policy.asc`)
**Original**: 443 lines | **Action**: REWRITE + TRIM HEAVILY

### Keep
- Concept of policy enforcement through hooks
- Client-side hook testing walkthrough

### Rewrite
- Replace full Ruby scripts with simpler shell scripts
- Replace `[ref: XXXX]` pattern with `[Phase: Component]` pattern
- **ACL example**: Reframe for SketchSpark:
  - Nora: edit anything
  - Sam: edit `screens/`, `design-tokens.json`, `concept/`
  - Priya: edit `illustrations/`, `icons/`
  - Kai: edit `pipeline/`, `model-params.yaml`
  - "This prevents accidentally committing to someone else's area."
- Emphasize client-side hooks over server-side — designers care about local validation
- Add testing scenario: "Sam tries to commit with message `fix stuff`. The hook rejects it and shows the expected format."

### Cut
- Dense Ruby ACL implementation — replace with pseudo-code + explanation
- Server-side update hook detail (designers don't manage server hooks)

### Target
- ~150 lines (down from 443)

---

## Chapter Summary
**Action**: REWRITE

### New
- "The team's process is now encoded in the repository. `.gitattributes` tells Git how to handle binary files. The commit template enforces consistent messages. Hooks validate files before they're committed. New contributors (like Marcus from Chapter 6) inherit these rules automatically when they clone. In the next chapter, the team faces an unexpected challenge: migrating a competitor's design assets from an older version control system."
