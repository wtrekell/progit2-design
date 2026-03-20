# Common Storyline Analysis

## Problem: Fragmented Examples Across Chapters

The current revision notes propose disconnected examples across chapters:

- **Inconsistent characters**: Sarah (Ch5), Marcus (Ch5), Aisha (Ch5), Maria (Ch6), Megan (Ch5 branch name only) — none carry between chapters
- **Disconnected artifacts**: button components, checkout flows, form components, icon sets, and design tokens appear repeatedly but without continuity
- **No progression**: each chapter reinvents its scenario from scratch, so readers never build on prior context

A unified storyline solves all three problems. Readers follow one product, one team, and one set of artifacts from Chapter 1 through Chapter 10, with each chapter advancing the story naturally.

---

## Proposed Storyline: "Meadow" — A Design System for a Wellness App

### Why This Product
- A wellness/health app is visually rich (illustrations, icons, color palettes, typography) — maximizes design artifact variety
- Broad enough to require multiple component types (forms, cards, navigation, charts, onboarding flows)
- Relatable across industries — not tied to fintech, e-commerce, or gaming jargon
- Naturally involves accessibility concerns (contrast, screen readers, motion sensitivity)

### The Team

| Character | Role | Personality Trait | Introduced |
|-----------|------|-------------------|------------|
| **Nora** | Lead Designer / Design System Owner | Methodical, sets standards | Ch1 |
| **Sam** | UI Designer (components) | Moves fast, sometimes forgets to commit cleanly | Ch2 |
| **Priya** | Visual Designer (illustrations, icons) | Works with large binary files | Ch3 |
| **Dev (the developer)** | Frontend Engineer | Bridge between design and code — consumes tokens | Ch5 |

Four characters are enough to demonstrate solo work, pair collaboration, team coordination, and cross-functional handoff. Each has a trait that naturally triggers specific Git scenarios.

### The Product Timeline

The storyline maps to a realistic product lifecycle. Each chapter picks up where the prior left off:

| Chapter | Story Phase | What Happens |
|---------|-------------|--------------|
| **Ch1** | Discovery | Nora discovers version control after losing a week of work when her "final-v3-REAL" folder gets overwritten. She learns what Git is and installs it. |
| **Ch2** | Foundation | Nora creates the Meadow design system repo. Adds `design-tokens.json`, component documentation, and exported assets. Learns status, add, commit, diff, log. Her first `.gitignore` excludes `.sketch` temp files. |
| **Ch3** | Exploration | Sam joins. They use branches to explore a dark mode variant (`feature/dark-mode`) while Nora continues refining the light theme on `main`. Their first merge conflict: both edited `colors.json`. |
| **Ch4** | Infrastructure | The team picks GitHub to host the repo (not a bare server). Nora sets up branch protection so `main` requires a review before merge. |
| **Ch5** | Collaboration | Priya joins for an icon overhaul. Three designers coordinate: Nora on tokens, Sam on components, Priya on icons. They practice the integration-manager workflow. First design system release (`v1.0`). |
| **Ch6** | Open Source | Meadow's design system goes public on GitHub. An external contributor (Marcus) forks it and submits a PR adding a Tooltip component. Nora reviews, requests changes, merges. |
| **Ch7** | Maturity | The team handles real-world complexity: Sam stashes half-finished button states to fix a production color bug. Priya uses `git blame` to find when an icon color changed. Nora uses interactive rebase to clean up a messy token migration history. |
| **Ch8** | Customization | Nora configures `.gitattributes` for binary design files, sets up a commit message template (`[Component: X]`), and adds a pre-commit hook that validates token JSON syntax. |
| **Ch9** | Migration | The team migrates legacy brand assets from an SVN archive into the Git repo. They handle large binary files and history cleanup. |
| **Ch10** | Mastery | Sam accidentally force-resets `main`, losing recent commits. Nora uses reflog to recover. The chapter demystifies Git internals through the lens of "your work is never truly lost." |
| **App A** | Tooling | The team evaluates VS Code vs. GitHub Desktop vs. CLI for their workflow. Decision tree based on comfort level. |
| **App B** | Integration | The team considers how design tools (Figma plugins, token pipelines) integrate with Git under the hood. |
| **App C** | Reference | Quick-reference card organized by Meadow workflow phases, not command taxonomy. |

---

## Artifact Continuity Map

These artifacts appear and evolve across chapters, giving readers anchoring reference points:

### Core Files (appear 5+ chapters)

| Artifact | First Appears | Evolves Through | Purpose |
|----------|---------------|-----------------|---------|
| `design-tokens.json` | Ch2 (created) | Ch3 (dark mode added), Ch5 (v1.0 release), Ch7 (migration cleanup), Ch8 (validation hook) | The primary "code-like" design file — mergeable, diffable, central to the system |
| `colors.json` (subset of tokens) | Ch2 (initial palette) | Ch3 (merge conflict), Ch5 (coordinated update), Ch7 (blame for change), Ch8 (diff config) | Most relatable file for designers — color values changing |
| `components/button/` | Ch2 (first component) | Ch3 (dark mode variant), Ch5 (Sam's work), Ch7 (stash scenario), Ch8 (commit template) | The universal UI component — every designer understands buttons |
| `.gitignore` | Ch2 (created) | Ch8 (expanded for design tools) | Practical file designers need immediately |
| `README.md` | Ch2 (basic) | Ch6 (expanded for public repo) | Entry point for contributors |

### Secondary Files (appear 2-3 chapters)

| Artifact | Chapters | Purpose |
|----------|----------|---------|
| `icons/` directory | Ch5 (Priya creates), Ch7 (blame for color change), Ch10 (packfile performance) | Binary file handling, large asset management |
| `CONTRIBUTING.md` | Ch6 (created for open source), Ch8 (referenced in hooks) | Governance, standards |
| `CHANGELOG.md` | Ch5 (v1.0 release), Ch7 (rewriting history) | Release documentation |
| `typography.json` | Ch7 (selective staging), Ch8 (attributes config) | Second token file for staging/splitting scenarios |

---

## Scene-by-Scene Storyline Mapping to Existing Recommendations

### Chapter 1 — Discovery

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Add concrete scenario after line 8's designer mention | Nora's "final-v3-REAL" folder disaster — she loses a week of button iterations |
| CVCS = Figma shared file analogy | Nora compares her Figma workflow (centralized) to Git (distributed) |
| Three states = draft/ready/approved | Nora maps modified/staged/committed to her existing review process |
| Binary file support flag | Nora asks: "Can I version my Sketch files?" — honest answer about binary limitations |

### Chapter 2 — Foundation

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| "Initializing a design system repository" | Nora runs `git init` in the `meadow-design-system` directory |
| Replace `.c` file examples | All examples use `design-tokens.json`, `components/button/button.md`, exported PNGs |
| `.gitignore` template for designers | Nora creates `.gitignore` excluding `.sketch~`, `*.figma_cache`, `node_modules/` |
| Commit message conventions | Nora writes: `Add initial color palette and button component` |
| Design token search in log | Nora uses `git log -S "primary-blue"` to find when she changed the brand color |
| Tags for releases | Nora tags the repo's first stable state: `git tag -a v0.1 -m "Initial token set and button component"` |

### Chapter 3 — Exploration

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Branch as design variant | Sam creates `feature/dark-mode` to explore a dark palette without touching Nora's light theme |
| Hotfix interruption scenario | Sam is working on dark mode; urgent accessibility bug on `main` button contrast — creates `hotfix/button-contrast` |
| Merge conflict in token file | Both Nora and Sam edited `colors.json` — Nora updated `primary-blue`, Sam added `dark-bg`. They resolve together. |
| Branch naming conventions | Team establishes: `feature/`, `fix/`, `hotfix/`, `experiment/` |
| Rebasing as "replay on cleaner foundation" | Sam rebases dark mode onto main to pick up Nora's latest token structure |

### Chapter 4 — Infrastructure

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Lead with hosted options | Nora evaluates GitHub vs. GitLab — picks GitHub for simplicity |
| SSH key setup with context | Sam struggles with SSH keys — Nora walks him through it, comparing `.pub` file to a "trusted device" |
| Branch protection | Nora enables `main` branch protection: PRs required, one approval needed |
| Role mapping | Nora = admin, Sam = write, stakeholders = read-only |

### Chapter 5 — Collaboration

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Three-person coordination | Nora (tokens), Sam (components), Priya (icons) work in parallel on feature branches |
| Replace `lib/simplegit.rb` files | All file references: `design-tokens/colors.json`, `components/Button/`, `icons/navigation/` |
| Integration-manager workflow | Nora acts as integrator — reviews and merges Sam's and Priya's branches |
| Design system release cycle | Team releases Meadow v1.0: tag, archive, changelog |
| Email workflow → skip notice | "Meadow uses GitHub PRs, not email patches" |

### Chapter 6 — Open Source

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Replace Arduino blink with design system PR | Marcus forks Meadow, creates `feature/tooltip-component`, adds SVG + token + docs, opens PR with screenshots |
| Expand image embedding for reviews | Marcus includes light/dark mode screenshots in his PR; Nora annotates with feedback |
| CONTRIBUTING.md for design projects | Nora writes guidelines: icon grid (24x24), token naming (`category-property-variant`), accessibility requirements |
| GitHub Pages for documentation | Team deploys component documentation to `meadow-design-system.github.io` |
| Async collaboration norms | Marcus is in a different timezone — PR review takes 24 hours; Nora leaves detailed written feedback |

### Chapter 7 — Maturity

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Stashing scenario | Sam is halfway through new button states; production color bug reported; stashes work, fixes bug, pops stash |
| `git blame` for design files | Priya uses `git blame icons/navigation/home.svg` to find who changed the icon stroke width |
| Interactive staging | Nora's `design-tokens.json` has both color and typography updates; she stages only color changes for the current PR |
| Reset demystified | Sam accidentally commits to `main` instead of his feature branch — uses `git reset` to move the commit |
| Squashing messy history | Priya squashes "Add home icon" + "Fix home icon size" + "Adjust home icon padding" into clean "Add navigation home icon" |
| Submodules | The product app repo includes `meadow-design-system` as a submodule — Dev updates the pointer when v1.1 releases |

### Chapter 8 — Customization

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| `.gitattributes` for binary files | Nora configures: `*.png binary`, `*.sketch binary`, `*.svg diff` |
| Commit message template | Team template: `[Component: Name] Description` — enforced by commit-msg hook |
| Pre-commit hook | Hook validates `design-tokens.json` is valid JSON before allowing commit |
| Image diffing | Nora sets up EXIF-based diffing so `git diff` shows metadata changes on PNG exports |
| Export-ignore | `.sketch` source files are versioned but excluded from release archives |

### Chapter 9 — Migration

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| SVN design archive migration | The company's legacy brand assets (logos, illustrations) live in SVN. Nora migrates them into the Meadow repo. |
| Large binary file handling | Migration surfaces 200MB of PSDs — team decides to use Git LFS for files >10MB |
| Pre-import planning | Nora checks total size, identifies files for LFS, plans branch structure |

### Chapter 10 — Mastery

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Reflog for data recovery | Sam runs `git reset --hard` on `main` by accident, losing three commits. Nora uses reflog to recover. |
| Objects as "fingerprints" | Nora explains to Sam: "Every version of every file gets a unique ID. Even if you delete a branch, the data is still there." |
| Packfiles and performance | Priya notices `git push` is slow — learns Git packs similar icon files together |
| References as labels | "Branches are just sticky notes pointing to commits — moving them doesn't destroy anything" |

### Appendix A — Tooling

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Decision tree | Nora uses CLI, Sam prefers VS Code's Git panel, Priya uses GitHub Desktop for visual diffs of icons |
| VS Code for token workflows | Sam edits `design-tokens.json` with inline Git diff highlighting |

### Appendix B — Integration

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Design tool internals | Priya wonders how Figma plugins could auto-commit exported assets — learns about Dulwich (Python Git library) |
| UX patterns for Git integration | Nora sketches a "version control panel" for a design tool prototype |

### Appendix C — Reference

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Workflow-based organization | Commands grouped by Meadow workflow: "Starting your day" (pull, status), "Making changes" (add, commit), "Sharing work" (push, PR), "Releasing" (tag, archive) |

---

## Key Benefits of the Unified Storyline

1. **Progressive complexity**: readers learn Git operations in the order they'd encounter them on a real project
2. **Emotional investment**: readers care about Nora's team and their product — mistakes feel relatable, not abstract
3. **Artifact familiarity**: by Chapter 5, `design-tokens.json` and `colors.json` are old friends — readers focus on the Git concept, not parsing new file names
4. **Natural motivation**: each chapter answers "why do I need this?" through the story's progression (branching because Sam joined, GitHub because they went public, hooks because they need quality gates)
5. **Character-driven scenarios**: Sam's sloppiness triggers stash/reset/recovery lessons; Priya's binary files trigger LFS/attributes lessons; Nora's leadership triggers governance/hooks/release lessons

---

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Storyline feels forced in reference chapters (App C) | Use storyline as organizational principle, not narrative prose |
| Readers skip chapters and miss context | Each chapter opens with a 2-line "Previously in Meadow" recap |
| Product choice alienates some readers | "Wellness app" is generic enough; swap product name without breaking any examples |
| Characters feel contrived | Keep characterization minimal — traits emerge from actions, not descriptions |
| Chapters 9-10 have low design relevance | Migration and internals are naturally "advanced" — storyline justifies why the team encounters them |

---

## Implementation Priority

| Priority | Action | Impact |
|----------|--------|--------|
| 1 | Lock character names and roles across all chapters | Consistency foundation |
| 2 | Define the `meadow-design-system` repo file structure used in examples | Artifact continuity |
| 3 | Rewrite Ch1-3 examples with storyline (highest reader volume) | First impression |
| 4 | Rewrite Ch5-6 collaboration examples (most design-relevant) | Core value proposition |
| 5 | Update Ch7-8 tool examples with established artifacts | Builds on familiarity |
| 6 | Adapt Ch4, Ch9-10, appendices last (lowest impact) | Completeness |
