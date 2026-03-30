# Common Storyline Analysis

## Problem: Fragmented Examples Across Chapters

The current revision notes propose disconnected examples across chapters:

- **Inconsistent characters**: Sarah (Ch5), Marcus (Ch5), Aisha (Ch5), Maria (Ch6), Megan (Ch5 branch name only) — none carry between chapters
- **Disconnected artifacts**: button components, checkout flows, form components, icon sets, and design tokens appear repeatedly but without continuity
- **No progression**: each chapter reinvents its scenario from scratch, so readers never build on prior context

A unified storyline solves all three problems. Readers follow one product, one team, and one set of artifacts from Chapter 1 through Chapter 10, with each chapter advancing the story naturally.

---

## Proposed Storyline: "SketchSpark" — AI-Powered Rapid Prototyping

### The Product
SketchSpark is an AI-powered rapid prototyping application. A designer uploads or draws a rough sketch, and the system generates up to 5 polished UI options in parallel. The designer reviews, selects, and refines a direction — then iterates toward a shippable product.

### Why This Product
- **Parallel generation mirrors Git branching**: 5 options from 1 sketch = 5 branches from 1 commit. The core metaphor is baked into the product itself.
- **Full design lifecycle**: research (user interviews, competitive analysis), concept design (sketches, information architecture), UI design (wireframes, mockups), visual design (high-fidelity screens, motion), development, testing, launch, iteration — every phase produces distinct artifacts that need version control.
- **Rich artifact variety**: research briefs, persona documents, journey maps, wireframes, AI model configuration files, prompt templates, training data manifests, screen mockups, icon sets, motion specs, design tokens, and production assets — a mix of text (Git-friendly) and binary (Git-challenged) files that naturally teaches both workflows.
- **AI component adds modern relevance**: model configs (`model-params.yaml`), prompt templates (`prompts/sketch-to-ui.txt`), and generation pipelines are text files that merge cleanly — contrasting with binary mockup files that don't.
- **Accessible domain**: every designer understands "sketch to prototype" — no industry-specific jargon required.

### The Team

| Character | Role | Personality Trait | Introduced |
|-----------|------|-------------------|------------|
| **Nora** | UX Lead / Product Owner | Methodical researcher, sets standards, writes the briefs | Ch1 |
| **Sam** | UI/Visual Designer | Fast mover, generates options quickly, sometimes commits messy | Ch2 |
| **Priya** | Concept Designer / Illustrator | Works with large binary files (sketches, illustrations, journey maps) | Ch3 |
| **Kai** | Frontend Engineer / ML Integration | Bridges design and code, maintains AI pipeline configs | Ch5 |

Each character's working style naturally triggers specific Git scenarios:
- **Nora's** research documents and briefs are text-heavy — perfect for diffs and merges
- **Sam's** speed creates stash/reset/amend situations — he commits too fast, forgets files, works on wrong branches
- **Priya's** illustrations and high-fidelity mockups are large binaries — triggers LFS, attributes, and binary merge challenges
- **Kai's** model configs and pipeline files are structured text — demonstrates cross-functional collaboration and submodules

### The Product Timeline

Each chapter picks up where the prior left off, following SketchSpark from idea to shipped product:

| Chapter | Product Phase | What Happens |
|---------|---------------|--------------|
| **Ch1** | Research & Discovery | Nora loses a week of user research notes when her "interview-notes-FINAL-v3" folder gets overwritten by a sync conflict. She discovers Git. Installs it. Learns what version control means through the lens of protecting research artifacts. |
| **Ch2** | Concept Design | Nora creates the SketchSpark repo. Adds the product brief (`product-brief.md`), early wireframes, competitive analysis, and persona documents. Learns status, add, commit, diff, log. Creates `.gitignore` for design tool temp files. First tag: `v0.1-concept`. |
| **Ch3** | Parallel Exploration | Sam joins to explore UI directions. The core product idea — 5 options from 1 sketch — plays out in their workflow: Sam creates 3 branches (`option/card-layout`, `option/list-layout`, `option/canvas-freeform`) to explore different approaches to the results screen. Nora continues refining the input sketch flow on `main`. Their first merge conflict: both edited `user-flows.md`. |
| **Ch4** | Team Infrastructure | The team moves from local-only to GitHub. Nora sets up the org, branch protection (no direct pushes to `main`), and team roles. They evaluate hosting options — GitHub wins over self-hosted for a startup-stage product. |
| **Ch5** | Design & Build Sprint | Priya joins for illustration and high-fidelity mockups. Kai joins to build the AI generation pipeline. Four people coordinating: Nora on UX flows, Sam on UI screens, Priya on onboarding illustrations, Kai on model configs. Integration-manager workflow. First milestone release: `v0.5-alpha` — the sketch-to-options pipeline works end to end. |
| **Ch6** | Public Beta & Community | SketchSpark launches a public beta on GitHub. External contributor (Marcus) forks the repo and submits a PR improving the prompt template for better mobile layouts. Nora reviews with annotated screenshots, requests changes, merges. The team writes CONTRIBUTING.md with guidelines for prompt templates, asset specs, and accessibility requirements. |
| **Ch7** | Production Hardening | Real-world complexity hits: Sam stashes half-finished screen designs to hotfix a broken onboarding flow. Priya uses `git blame` to find when an illustration's color palette drifted from the brand guide. Nora uses interactive rebase to clean up a messy sprint of "fix layout" / "fix layout again" / "actually fix layout" commits. Kai's AI pipeline repo becomes a submodule. |
| **Ch8** | Process & Automation | Nora configures `.gitattributes` for Priya's binary illustration files, creates a commit message template (`[Phase: Component] Description`), and adds a pre-commit hook that validates `model-params.yaml` syntax and checks that prompt templates don't exceed token limits. |
| **Ch9** | Legacy Migration | The company acquires a competitor whose design assets live in SVN. The team migrates 3 years of mockups, illustrations, and research documents into the SketchSpark repo. They handle large binaries, history cleanup, and Git LFS setup. |
| **Ch10** | Scale & Recovery | Sam accidentally force-resets `main`, losing three days of work before a launch deadline. Nora uses reflog to recover every commit. The chapter demystifies Git internals through the lens of "your work is never truly lost" — critical when months of design research, illustrations, and AI configs are at stake. |
| **App A** | Tooling Choices | Each team member uses different tools: Nora uses CLI, Sam prefers VS Code's Git panel for visual diffs of screen designs, Priya uses GitHub Desktop for large file management, Kai uses JetBrains. Decision tree based on role and comfort. |
| **App B** | Tool Integration | Kai explains how SketchSpark's own AI pipeline uses libgit2 under the hood to version-control generated options. Priya explores how Figma plugins use Dulwich (Python) to auto-export assets to Git. |
| **App C** | Reference | Quick-reference card organized by SketchSpark workflow phases: "Starting research" (init, clone), "Daily design work" (branch, add, commit, status), "Reviewing options" (diff, log, show), "Shipping a release" (tag, merge, push). |

---

## Artifact Continuity Map

These artifacts appear and evolve across chapters, giving readers anchoring reference points.

### Core Files (appear 5+ chapters)

| Artifact | First Appears | Evolves Through | Purpose |
|----------|---------------|-----------------|---------|
| `product-brief.md` | Ch2 (created) | Ch3 (updated with chosen direction), Ch5 (alpha scope), Ch6 (public beta scope), Ch8 (commit template references it) | The "source of truth" text file — mergeable, diffable, anchors every design decision |
| `user-flows.md` | Ch2 (initial sketch flow) | Ch3 (merge conflict — Nora and Sam both edited), Ch5 (expanded for full pipeline), Ch7 (blame to find when a flow changed) | Primary UX artifact — where merge conflicts feel real and relatable |
| `screens/results/` | Ch3 (3 layout options as branches) | Ch5 (Sam's production screens), Ch7 (stash scenario mid-redesign), Ch8 (commit template) | The heart of the product — where parallel options become parallel branches |
| `model-params.yaml` | Ch5 (Kai creates) | Ch7 (submodule), Ch8 (pre-commit validation hook), Ch10 (recovered via reflog) | Structured text config — demonstrates Git-friendly AI/ML files alongside binary design files |
| `.gitignore` | Ch2 (created) | Ch5 (expanded for build artifacts), Ch8 (expanded for design tools and model caches) | Practical file designers need immediately |

### Secondary Files (appear 2-3 chapters)

| Artifact | Chapters | Purpose |
|----------|----------|---------|
| `research/personas/` | Ch2 (Nora creates), Ch5 (referenced in sprint planning), Ch9 (migrated from legacy) | Text-heavy research artifacts — ideal for diffs |
| `research/competitive-analysis.md` | Ch2 (created), Ch6 (updated when going public) | Shows how research docs evolve alongside product |
| `illustrations/onboarding/` | Ch5 (Priya creates), Ch7 (blame for color drift), Ch10 (packfile performance with large PNGs) | Binary file handling — large asset management |
| `prompts/sketch-to-ui.txt` | Ch5 (Kai creates), Ch6 (Marcus improves via PR), Ch8 (token-limit validation hook) | AI prompt templates — text files that external contributors can improve |
| `CONTRIBUTING.md` | Ch6 (created for public beta), Ch8 (referenced in hooks) | Governance and standards for open contribution |
| `CHANGELOG.md` | Ch5 (v0.5-alpha), Ch7 (rewriting history to clean up entries) | Release documentation |
| `design-tokens.json` | Ch5 (Sam creates for handoff to Kai), Ch7 (selective staging — color vs. typography), Ch8 (attributes config) | Bridge between design and code — the handoff file |

### Lifecycle Phase Artifacts

| Product Phase | Key Artifacts | File Types | Git Behavior |
|---------------|---------------|------------|--------------|
| Research | `product-brief.md`, `personas/*.md`, `competitive-analysis.md`, `interview-notes/*.md` | Markdown, text | Fully mergeable, excellent diffs |
| Concept Design | `user-flows.md`, `information-architecture.md`, `sketches/*.png` | Mixed | Text merges cleanly; sketch PNGs are binary |
| UI Design | `screens/**/*.fig`, `screens/**/*.png`, `wireframes/*.md` | Mostly binary | Binary conflicts require manual resolution |
| Visual Design | `illustrations/**/*.png`, `icons/**/*.svg`, `design-tokens.json` | Binary + JSON | SVGs diff as text; PNGs don't; tokens merge |
| AI Pipeline | `model-params.yaml`, `prompts/*.txt`, `training-data-manifest.json` | Structured text | Fully mergeable, hookable, validatable |
| Production | `assets/exported/**`, `docs/`, `CHANGELOG.md` | Mixed | Export-ignore for source files; archive for releases |

---

## Scene-by-Scene Storyline Mapping to Existing Recommendations

### Chapter 1 — Research & Discovery

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Add concrete scenario after line 8's designer mention | Nora's "interview-notes-FINAL-v3" folder disaster — a cloud sync conflict overwrites a week of user research for the SketchSpark concept |
| CVCS = Figma shared file analogy | Nora compares her team's shared Google Drive (centralized, single point of failure) to Git (full local copy of all research history) |
| Three states = draft/ready/approved | Nora maps modified/staged/committed to her research workflow: draft notes → reviewed findings → published insight |
| Binary file support flag | Nora asks: "Can I version my sketch mockups and interview recordings?" — honest answer about binary limitations sets up a theme that runs through every chapter |

### Chapter 2 — Concept Design

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| "Initializing a design system repository" | Nora runs `git init` in the `sketchspark/` directory after completing the concept phase |
| Replace `.c` file examples | All examples use `product-brief.md`, `research/personas/early-adopter.md`, `wireframes/sketch-input-flow.png` |
| `.gitignore` template for designers | Nora creates `.gitignore` excluding `.sketch~`, `*.figma_cache`, `__MACOSX/`, `.DS_Store`, `node_modules/` |
| Commit message conventions | Nora writes: `Add product brief and initial user flow wireframes` |
| Design token search in log | Nora uses `git log -S "single sketch"` to find when the core product concept changed from "3 options" to "5 options" in the brief |
| Tags for releases | Nora tags the concept milestone: `git tag -a v0.1-concept -m "Research complete, concept approved, entering UI exploration"` |

### Chapter 3 — Parallel Exploration

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Branch as design variant | Sam creates `option/card-layout`, `option/list-layout`, `option/canvas-freeform` — three parallel UI directions for the results screen, mirroring SketchSpark's own "5 options from 1 sketch" philosophy |
| Hotfix interruption scenario | Sam is deep in `option/card-layout`; Nora discovers a critical user flow gap in the sketch input screen on `main` — Sam creates `fix/sketch-input-upload-error` |
| Merge conflict in token file | Both Nora and Sam edited `user-flows.md` — Nora refined the upload step, Sam added a "compare options" step. They resolve together, learning that text files merge but require coordination. |
| Branch naming conventions | Team establishes: `option/` (design explorations), `feature/` (approved work), `fix/` (corrections), `research/` (investigation branches) |
| Rebasing as "replay on cleaner foundation" | Sam rebases `option/card-layout` onto main to pick up Nora's updated user flow before the team reviews all three options side by side |

### Chapter 4 — Team Infrastructure

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Lead with hosted options | Nora evaluates GitHub vs. GitLab for the growing team — picks GitHub for its PR review workflow and project boards |
| SSH key setup with context | Sam struggles with SSH keys — Nora walks him through it: "The `.pub` file is like a badge that proves who you are. The private file is your ID — never share it." |
| Branch protection | Nora enables `main` branch protection: PRs required, one design review approval needed before merge. No direct commits to `main`. |
| Role mapping | Nora = admin (merges to main, manages releases), Sam = write (creates branches, opens PRs), stakeholders = read-only (view progress, leave comments) |

### Chapter 5 — Design & Build Sprint

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Three-person coordination | Nora (UX flows and research updates), Sam (production UI screens), Priya (onboarding illustrations), Kai (AI pipeline configs) — four parallel workstreams |
| Replace `lib/simplegit.rb` files | All file references: `screens/results/card-layout.fig`, `illustrations/onboarding/step-1.png`, `model-params.yaml`, `prompts/sketch-to-ui.txt` |
| Integration-manager workflow | Nora acts as integrator — reviews Sam's screen PRs, Priya's illustration PRs, and Kai's pipeline PRs before merging to `main` |
| Design system release cycle | Team releases SketchSpark `v0.5-alpha`: the sketch-to-options pipeline works end to end. Tag, archive, changelog. Sam creates `design-tokens.json` for handoff to Kai's frontend. |
| Email workflow → skip notice | "The SketchSpark team uses GitHub PRs for all collaboration. Email-based patches are a legacy workflow — skip unless contributing to projects that require them." |

### Chapter 6 — Public Beta & Community

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Replace Arduino blink with design system PR | Marcus forks SketchSpark, creates `feature/mobile-prompt-template`, improves `prompts/sketch-to-ui.txt` for better mobile layout generation, opens PR with before/after screenshots of generated options |
| Expand image embedding for reviews | Marcus includes side-by-side screenshots: "Current mobile output" vs. "Improved mobile output" with 5 generated options each. Nora annotates with feedback directly in the PR. |
| CONTRIBUTING.md for design projects | Nora writes guidelines: prompt template format, illustration specs (2x resolution, brand palette), screen mockup naming conventions, accessibility requirements for generated UI |
| GitHub Pages for documentation | Team deploys SketchSpark user docs and API reference to `sketchspark.github.io` |
| Async collaboration norms | Marcus is in a different timezone — PR review takes 24 hours. Nora leaves detailed written feedback with annotated screenshots rather than expecting a synchronous call. |

### Chapter 7 — Production Hardening

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Stashing scenario | Sam is redesigning the results comparison screen; urgent bug report — the onboarding flow crashes on tablet. Sam stashes his half-finished screens, switches to `fix/onboarding-tablet`, fixes the layout, merges, pops his stash, and continues. |
| `git blame` for design files | Priya uses `git blame illustrations/onboarding/step-2.png` to find who changed the illustration's color palette — it drifted from the brand guide three commits ago during a rushed sprint. |
| Interactive staging | Nora's `product-brief.md` has both a scope change (adding tablet support) and a research update (new user interview findings). She stages only the research update for the current PR, saving the scope change for a separate review. |
| Reset demystified | Sam accidentally commits directly to `main` instead of his feature branch — uses `git reset --soft HEAD~1` to move the commit back to staging, then creates the correct branch. |
| Squashing messy history | Sam squashes "Update results layout" + "Fix results layout spacing" + "Actually fix the spacing this time" + "Tweak padding" into clean "Redesign results comparison screen for card layout" |
| Submodules | Kai's AI pipeline repo (`sketchspark-ml`) becomes a submodule of the main product repo. When the model improves option generation quality, Kai updates the submodule pointer and the team pulls the new version. |

### Chapter 8 — Process & Automation

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| `.gitattributes` for binary files | Nora configures: `*.png binary`, `*.fig binary`, `*.svg diff`, `*.md diff`, `*.yaml diff` — so Git knows which files can be meaningfully diffed |
| Commit message template | Team template enforced by hook: `[Phase: Component] Description` — e.g., `[Design: Results Screen] Add tablet breakpoint layout` or `[Research: Persona] Update early-adopter goals after round 2 interviews` |
| Pre-commit hook | Hook validates that `model-params.yaml` is valid YAML, checks that prompt templates in `prompts/` don't exceed 4096 tokens, and warns if PNG files exceed 5MB |
| Image diffing | Nora sets up EXIF-based diffing so `git diff` shows metadata changes on exported screen mockups — dimensions, color profile, export date |
| Export-ignore | `.fig` source files and `research/raw-interviews/` are versioned in Git but excluded from release archives via `.gitattributes export-ignore` |

### Chapter 9 — Legacy Migration

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| SVN design archive migration | SketchSpark acquires a competitor ("QuickMock") whose 3 years of mockups, user research, and design assets live in SVN. Nora leads the migration into the SketchSpark repo. |
| Large binary file handling | Migration surfaces 400MB of PSD source files and high-res mockups — team configures Git LFS for files >10MB |
| Pre-import planning | Nora audits total size, identifies files for LFS, maps QuickMock's flat folder structure to SketchSpark's organized directory hierarchy, and plans which history to preserve vs. squash |

### Chapter 10 — Scale & Recovery

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Reflog for data recovery | Two days before the v1.0 launch, Sam runs `git reset --hard` on `main` by accident, losing three days of final polish commits. Nora uses `git reflog` to find the lost HEAD, creates a recovery branch, and restores everything. |
| Objects as "fingerprints" | Nora explains to Sam: "Every version of every file — every screen mockup, every prompt template, every research note — gets a unique ID. Even if you delete a branch, the data is still in Git's object store." |
| Packfiles and performance | Priya notices `git push` takes 90 seconds — learns that Git packs similar illustration files together using delta compression, but her 50MB PSD additions bypass efficient packing. The team moves large files to LFS. |
| References as labels | "Branches are just labels pointing to commits — like sticky notes on a timeline. Moving them doesn't destroy anything. That's why Sam's 'lost' work was still there." |

### Appendix A — Tooling Choices

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Decision tree | Nora uses CLI (fastest for research doc workflows), Sam prefers VS Code's Git panel (inline diffs of screen designs and tokens), Priya uses GitHub Desktop (visual staging of large illustration files), Kai uses JetBrains (integrated with Python ML pipeline) |
| VS Code for token workflows | Sam edits `design-tokens.json` and `user-flows.md` with inline Git gutter indicators showing what changed since last commit |

### Appendix B — Tool Integration

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Design tool internals | Kai explains how SketchSpark's own generation pipeline uses libgit2 to version-control each of the 5 generated options as lightweight branches — the product's architecture mirrors Git's branching model |
| UX patterns for Git integration | Nora designs SketchSpark's "version history" panel — translating Git concepts (commits, branches, diffs) into a visual interface that non-technical designers can use |
| Dulwich / Python integration | Priya's export script uses Dulwich to auto-commit illustration assets to Git whenever she exports from her design tool — removing manual `git add` from her workflow |

### Appendix C — Reference

| Revision Note Recommendation | Storyline Scene |
|------------------------------|-----------------|
| Workflow-based organization | Commands grouped by SketchSpark workflow: "Starting a research phase" (init, clone, branch), "Daily design work" (status, add, commit, diff), "Reviewing options" (log, show, diff between branches), "Collaborating" (push, pull, fetch, merge), "Shipping a release" (tag, archive, merge to main) |

---

## Key Benefits of the Unified Storyline

1. **Progressive complexity**: readers learn Git operations in the order they'd encounter them building a real product — research notes before merge conflicts, branching before rebasing
2. **Product mirrors Git**: SketchSpark generates 5 parallel options from 1 sketch; Git creates parallel branches from 1 commit. The product's core concept reinforces the most important Git mental model.
3. **Artifact familiarity**: by Chapter 5, `product-brief.md`, `user-flows.md`, and `screens/results/` are familiar landmarks — readers focus on the Git concept, not parsing new file names
4. **Full lifecycle coverage**: research, concept, design, build, test, launch, scale — every phase produces different artifacts (text vs. binary, solo vs. collaborative) that naturally teach different Git workflows
5. **Natural motivation**: each chapter answers "why do I need this?" through the product's progression — branching because the team explores 3 UI options, GitHub because they launched a beta, hooks because they need quality gates before shipping
6. **Character-driven scenarios**: Sam's speed creates stash/reset/recovery lessons; Priya's binary files trigger LFS/attributes lessons; Nora's leadership triggers governance/review/release lessons; Kai's ML pipeline triggers submodule/cross-functional lessons

---

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Storyline feels forced in reference chapters (App C) | Use storyline as organizational principle, not narrative prose |
| Readers skip chapters and miss context | Each chapter opens with a 2-line "Previously on SketchSpark" recap |
| AI product concept feels niche | The design workflow (research → concept → UI → ship) is universal; the AI generation is flavor, not prerequisite |
| Characters feel contrived | Keep characterization minimal — traits emerge from actions (Sam's messy commits, Priya's large files), not backstory |
| Chapters 9-10 have lower design relevance | Migration and internals are naturally "advanced" — the storyline (acquiring a competitor, recovering before launch) justifies why the team encounters them |
| Binary file challenges recur without resolution | Thread Git LFS as a progressive solution: mentioned Ch1, explained Ch5, configured Ch8, essential in Ch9 |

---

## Implementation Priority

| Priority | Action | Impact |
|----------|--------|--------|
| 1 | Lock character names, roles, and traits across all chapters | Consistency foundation |
| 2 | Define the `sketchspark/` repo file structure used in examples | Artifact continuity |
| 3 | Rewrite Ch1-3 examples with storyline (highest reader volume, establishes the product) | First impression — readers decide here whether to continue |
| 4 | Rewrite Ch5-6 collaboration examples (most design-relevant, introduces full team) | Core value proposition — collaboration is why designers need Git |
| 5 | Update Ch7-8 tool examples with established artifacts and characters | Builds on familiarity — advanced tools feel less intimidating |
| 6 | Adapt Ch4, Ch9-10, appendices last (infrastructure and advanced topics) | Completeness — important but lower reader volume |
