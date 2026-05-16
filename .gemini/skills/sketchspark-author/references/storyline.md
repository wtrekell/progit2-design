# The SketchSpark Storyline

## The Product

**SketchSpark** is an AI-powered rapid prototyping application. A designer uploads or draws a rough sketch — a napkin wireframe, a whiteboard photo, a tablet drawing — and SketchSpark generates up to five polished UI options in parallel. The designer reviews, compares, selects a direction, refines it, and iterates toward a shippable product.

The product serves a gap in the design-to-development pipeline: the jump from rough idea to testable prototype is slow. SketchSpark collapses it from days to minutes.

---

## The Team

**Nora** — UX Lead and Product Owner. She came from agency work where she managed design research across dozens of client projects, all versioned as "final_v3_REAL_USE-THIS.pdf" on shared drives. She's methodical, writes thorough briefs, and sets process standards. She's the one who brings Git to the team after a catastrophic file loss. She uses the CLI.

**Sam** — UI and Visual Designer. He's fast. He generates screen layouts the way a jazz musician improvises — quickly, instinctively, and sometimes messily. He commits too often with vague messages, works on the wrong branch, and forgets to pull before pushing. Every Git mistake a designer can make, Sam makes first. He uses VS Code.

**Priya** — Concept Designer and Illustrator. She creates the product's visual identity: onboarding illustrations, marketing assets, icon sets, and high-fidelity mockups. Her files are large — 30MB PSDs, layered Sketch files, high-resolution PNGs. She's the team member who stress-tests Git's handling of binary files. She uses GitHub Desktop.

**Kai** — Frontend Engineer and ML Integration Lead. He joins when the product moves from concept to build. He maintains the AI generation pipeline: model parameters, prompt templates, training data manifests. His files are structured text (YAML, JSON, plain text) that merge cleanly — the opposite of Priya's binaries. He bridges design and engineering. He uses JetBrains.

**Marcus** — External Contributor. He appears in Chapter 6 when SketchSpark goes public beta. He's a designer in another timezone who forks the repo, improves a prompt template for mobile layouts, and submits a pull request. He represents the open-source contribution experience.

---

## The Repository

```
sketchspark/
├── product-brief.md                    # The source of truth — what are we building and why
├── research/
│   ├── personas/
│   │   ├── early-adopter.md            # Primary persona: freelance UI designer
│   │   └── team-lead.md               # Secondary persona: design team manager
│   ├── competitive-analysis.md         # Landscape of existing prototyping tools
│   ├── interview-notes/
│   │   ├── round-1-findings.md         # Initial discovery interviews
│   │   └── round-2-findings.md         # Post-alpha validation interviews
│   └── journey-maps/
│       └── sketch-to-prototype.png     # Current-state journey map (binary)
├── concept/
│   ├── information-architecture.md     # App structure and navigation model
│   ├── user-flows.md                   # Step-by-step task flows
│   └── wireframes/
│       ├── sketch-input.png            # Upload/draw screen (binary)
│       └── results-comparison.png      # Side-by-side options screen (binary)
├── screens/
│   ├── onboarding/
│   │   ├── welcome.fig                 # Figma source (binary, large)
│   │   └── welcome.png                 # Exported preview
│   ├── sketch-input/
│   │   ├── upload-flow.fig
│   │   └── upload-flow.png
│   └── results/
│       ├── card-layout.fig
│       ├── card-layout.png
│       ├── list-layout.fig
│       ├── list-layout.png
│       ├── canvas-freeform.fig
│       └── canvas-freeform.png
├── illustrations/
│   ├── onboarding/
│   │   ├── step-1-upload.png           # Large illustrated graphics (binary)
│   │   ├── step-2-generate.png
│   │   └── step-3-refine.png
│   └── marketing/
│       └── hero-image.psd              # Very large source file (binary, LFS)
├── icons/
│   ├── navigation/
│   │   ├── home.svg                    # SVG diffs as text
│   │   ├── settings.svg
│   │   └── history.svg
│   └── actions/
│       ├── upload.svg
│       ├── generate.svg
│       └── compare.svg
├── design-tokens.json                  # Colors, typography, spacing — handoff to engineering
├── pipeline/                           # AI generation pipeline (Kai's domain)
│   ├── model-params.yaml              # Model configuration
│   ├── prompts/
│   │   ├── sketch-to-ui.txt           # Core generation prompt
│   │   ├── mobile-layout.txt          # Mobile-specific prompt
│   │   └── accessibility-check.txt    # Post-generation a11y validation prompt
│   └── training-data-manifest.json    # References to training datasets
├── docs/
│   ├── setup-guide.md
│   └── api-reference.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── .gitignore
└── .gitattributes
```

This structure ensures every chapter has realistic files to reference. Research artifacts are text-heavy (merge-friendly). Screen mockups and illustrations are binary (merge-hostile). Pipeline configs are structured text (hookable, validatable). The variety is intentional — it teaches Git's strengths and limitations simultaneously.

---

## Chapter 1 — Research & Discovery

Nora is a UX lead at a small startup. She's been running user research for a new product idea — an AI tool that turns rough sketches into polished prototypes. She has three weeks of interview notes, a competitive analysis, two persona documents, and a journey map. They live in a folder on her laptop called `sketchspark-research/`.

One morning, her cloud sync overwrites the folder with a week-old version. Her latest interview findings, the revised competitive analysis, and the updated journey map are gone. She spends two days reconstructing what she can from memory and Slack messages. She never fully recovers the competitive analysis.

A developer friend tells her: "This is exactly what Git solves."

Nora installs Git. She learns what version control is — not through the history of Linux and BitKeeper, but through the pain of losing irreplaceable research. She learns that **centralized version control** is like her shared Google Drive: everyone connects to one place, and if it goes down or conflicts, work is lost. **Distributed version control** means every team member has the full history locally. If the cloud disappears tomorrow, her laptop still has everything.

She learns the three states — modified, staged, committed — and maps them to her own workflow:
- **Modified**: she's updated the interview notes but hasn't marked them as ready
- **Staged**: she's selected which updates to bundle into a checkpoint
- **Committed**: the checkpoint is permanent — she can always come back to it

She sets up her identity (`git config`) so her name appears on every checkpoint she creates. She asks: "Can I version my journey map PNGs and Sketch files?" The honest answer: Git handles them, but it can't show you what changed inside them the way it can with text. This limitation — binary vs. text — becomes a thread that runs through every chapter.

---

## Chapter 2 — Concept Design

Nora creates the SketchSpark repository.

```
cd sketchspark
git init
```

She adds the product brief, her persona documents, the competitive analysis, and the initial user flow. Each one is a markdown file — Git can track every word that changes.

```
git add product-brief.md research/personas/ research/competitive-analysis.md concept/user-flows.md
git commit -m "Add product brief, personas, competitive analysis, and initial user flows"
```

She learns the daily rhythm: check status, stage changes, write a commit message that explains *why* (not just *what*), review the log to see her project's history. She creates a `.gitignore` to exclude temp files her design tools generate:

```
.DS_Store
__MACOSX/
*.sketch~
*.figma_cache
Thumbs.db
```

She adds wireframe exports — PNGs of the sketch input screen and the results comparison screen. These are binary files. Git accepts them, but `git diff` shows nothing useful. She notes this and keeps going.

She commits the wireframes separately from the text files — a habit she develops because text and binary changes serve different review purposes:

```
git add concept/wireframes/
git commit -m "Add wireframes for sketch input and results comparison screens"
```

She explores the log. She uses `git log -S "5 options"` to find when she changed the product brief from "3 options" to "5 options" — tracing a design decision through history.

She tags the milestone:

```
git tag -a v0.1-concept -m "Research complete, concept approved, entering UI exploration"
```

The concept phase is over. The product has a brief, personas, a competitive landscape, user flows, and wireframes — all versioned, all recoverable.

---

## Chapter 3 — Parallel Exploration

Sam joins the project. He's a UI designer who works fast. Nora brings him up to speed on the product brief and user flows, then asks him to explore layout directions for the results screen — the screen where users see their 5 generated options side by side.

Sam's assignment mirrors the product itself: generate multiple options in parallel, then choose the best direction.

He creates three branches:

```
git checkout -b option/card-layout
git checkout -b option/list-layout
git checkout -b option/canvas-freeform
```

Each branch contains a different approach to the same screen. On `option/card-layout`, the 5 options appear as cards in a grid. On `option/list-layout`, they stack vertically with detail panels. On `option/canvas-freeform`, they float on an infinite canvas the user can pan and zoom.

While Sam explores, Nora continues refining the sketch input flow on `main`. She updates `concept/user-flows.md` to clarify the upload step.

Sam, on `option/card-layout`, also edits `concept/user-flows.md` — he adds a "compare options" step that doesn't exist yet. Neither knows the other has touched the same file.

Sam finishes the card layout and switches back to main:

```
git checkout main
git merge option/card-layout
```

**Conflict.** Both edited `concept/user-flows.md`. Git can't automatically reconcile Nora's upload clarification with Sam's new comparison step. They sit together, open the file, and see Git's conflict markers. They keep both changes — Nora's refined upload step *and* Sam's comparison step — in the right order. They commit the resolution.

This is the team's first merge conflict. It's a text file, so the markers make sense. Nora notes: "If this had been a Figma file or a PSD, Git couldn't show us the conflict at all. We'd have to open both versions and manually compare."

They establish branch naming conventions:
- `option/` — design explorations (may be discarded)
- `feature/` — approved work heading to production
- `fix/` — corrections to existing work
- `research/` — investigation branches (new interviews, usability tests)

Mid-exploration, Nora discovers a critical flaw in the sketch input screen on `main` — the upload error state is missing. Sam is deep in `option/list-layout`. He creates a hotfix:

```
git stash
git checkout main
git checkout -b fix/sketch-input-upload-error
```

He designs the error state, commits, merges to main, then returns to his exploration:

```
git checkout option/list-layout
git stash pop
```

The team reviews all three options. They choose the card layout. Sam rebases the other two branches onto the latest main (which now includes the card layout merge) to see if any ideas from `list-layout` or `canvas-freeform` are worth carrying forward. They cherry-pick the "pinch-to-zoom on selected option" interaction from `canvas-freeform` into a new `feature/zoom-on-selection` branch.

The exploration phase ends. One direction chosen, two archived, one idea salvaged.

---

## Chapter 4 — Team Infrastructure

The project has outgrown Nora's laptop. Sam needs access. They're about to bring on an illustrator. The repo needs a home.

Nora evaluates options. Self-hosted Git servers are overkill for a three-person startup. GitHub offers pull request reviews, branch protection, project boards, and free private repos. GitLab has similar features but the team already has GitHub accounts. They go with GitHub.

Nora creates the `sketchspark` organization and pushes the repo:

```
git remote add origin git@github.com:sketchspark/sketchspark.git
git push -u origin main
```

Sam needs SSH access. Nora walks him through key generation: "The `.pub` file is a badge — you give it to GitHub to prove who you are. The other file is your secret key. Never share it, never commit it."

Nora configures branch protection on `main`:
- Pull requests required — no direct pushes
- At least one approval before merge
- Status checks must pass (they'll add these later)

She sets up team roles:
- Nora: admin (manages settings, merges to main, handles releases)
- Sam: write (creates branches, opens PRs, pushes to feature branches)
- Stakeholders (the CEO, the lead engineer): read-only (view progress, leave comments on PRs)

Sam opens his first pull request — the zoom-on-selection feature from the previous chapter. Nora reviews it on GitHub, leaves a comment asking for a loading state, Sam adds it, and Nora approves and merges.

The team has infrastructure. Every change goes through review before reaching `main`.

---

## Chapter 5 — Design & Build Sprint

Two new people join. **Priya** is a concept designer and illustrator — she'll create SketchSpark's onboarding illustrations, the icon set, and high-fidelity marketing mockups. **Kai** is a frontend engineer who will build the AI generation pipeline, connecting the design work to the model that turns sketches into UI options.

Four people. Four parallel workstreams:
- **Nora**: UX flows and research updates (text files)
- **Sam**: production UI screens for all core flows (Figma source + PNG exports)
- **Priya**: onboarding illustrations and icon set (large PNGs, SVGs, PSDs)
- **Kai**: AI pipeline configuration (YAML, prompt templates, JSON manifests)

Each works on a feature branch:

```
nora:    feature/ux-flows-v2
sam:     feature/production-screens
priya:   feature/onboarding-illustrations
kai:     feature/ai-pipeline-setup
```

Nora acts as integration manager. She reviews each PR before merging to `main`. The workflow:

1. Designer creates branch, does work, pushes
2. Designer opens PR with description and screenshots
3. Nora reviews — for design work, this means checking screenshots, verifying flows, confirming token consistency
4. If approved, Nora merges to `main`

Priya's first push takes three minutes. Her onboarding illustrations are 15-30MB each. The team discusses Git LFS but decides to revisit it later — for now, the repo is manageable.

Sam creates `design-tokens.json` — the bridge between design and engineering. It contains colors, typography scales, spacing values, and border radii. Kai consumes these tokens in the frontend build. This file becomes one of the most frequently committed files in the repo, and the source of the most merge conflicts (everyone touches it).

Kai sets up the `pipeline/` directory: `model-params.yaml` defines the AI model configuration, `prompts/sketch-to-ui.txt` is the core generation prompt, and `training-data-manifest.json` references the datasets. These are all text files — they diff cleanly, merge predictably, and can be validated with hooks.

The sprint converges. The sketch-to-options pipeline works end to end for the first time: a user draws something, the model generates 5 UI options, and they appear in Sam's card layout.

Nora tags the milestone:

```
git tag -a v0.5-alpha -m "Alpha: end-to-end sketch-to-options pipeline working"
```

She writes the first `CHANGELOG.md` entry and creates a release archive:

```
git archive main --prefix='sketchspark-v0.5-alpha/' --format=zip > sketchspark-v0.5-alpha.zip
```

The archive goes to the CEO for demo day. The alpha is alive.

---

## Chapter 6 — Public Beta & Community

The alpha demo goes well. The CEO wants a public beta. The repo goes from private to public on GitHub.

Going public changes everything. Strangers will see the code, the prompts, the design files. Nora writes `CONTRIBUTING.md` — not for engineers, but for designers:

- Prompt templates must follow the existing format (system context, then user instruction, then constraints)
- Illustrations must be 2x resolution, brand palette only, PNG export with transparent background
- Icons must sit on a 24x24 grid, 2px stroke, SVG format
- Screen mockups must include both light and dark mode
- All UI contributions must pass WCAG AA contrast requirements

She expands `README.md` with screenshots of the product, a GIF showing the sketch-to-options flow, a component map, and links to the Figma source files.

Then Marcus appears. He's a designer in Melbourne — 16 hours ahead of the team. He's been using the beta and thinks the mobile layout generation is weak. He forks the repo, creates `feature/mobile-prompt-template`, and edits `prompts/sketch-to-ui.txt` to add mobile-specific layout constraints. He also adds a new file: `prompts/mobile-layout.txt`.

He opens a pull request. In the description, he includes before/after screenshots: five generated options from the same sketch, current vs. his improved prompt. The mobile options are noticeably better — less cramped, better touch target sizing.

Nora reviews the PR the next morning. She's never met Marcus. She leaves feedback:
- The prompt improvement is strong, but the constraint format doesn't match the existing template
- The mobile-layout file needs a header comment explaining when the system uses it vs. the main prompt
- She suggests splitting the touch-target constraint into its own line for readability

Marcus pushes updates. Nora approves and merges. The whole interaction happens asynchronously over 48 hours, entirely through GitHub comments and annotated screenshots.

The team sets up GitHub Pages to host product documentation at `sketchspark.github.io` — setup guide, API reference, and contribution guidelines.

Nora configures the GitHub organization:
- `@core-team`: Nora, Sam, Priya, Kai (write access to all repos)
- `@contributors`: Marcus and other external designers (fork-and-PR workflow)
- `@stakeholders`: CEO, investors (read-only, can comment on PRs)

The product is no longer just theirs.

---

## Chapter 7 — Production Hardening

The beta has users. Bugs arrive. Complexity compounds.

**Sam's stash.** Sam is midway through redesigning the results comparison screen — he's added a new "overlay diff" mode that lets users superimpose two generated options. Half the screens are done, half are placeholders. Then a bug report: the onboarding flow crashes on tablets. The layout breaks at 768px.

Sam can't commit half-finished work to his branch (the placeholders would confuse reviewers). He stashes:

```
git stash push -m "WIP: overlay diff mode for results comparison"
```

He switches to `main`, creates `fix/onboarding-tablet-layout`, fixes the responsive breakpoint in the onboarding screens, commits, opens a PR, gets it reviewed, and merges. Then he returns:

```
git checkout feature/overlay-diff
git stash pop
```

His work-in-progress is exactly where he left it.

**Priya's blame.** A stakeholder notices that the onboarding illustrations look "off" — the blue tones don't match the brand. Priya uses blame to trace the change:

```
git blame illustrations/onboarding/step-2-generate.png
```

The file is binary, so blame shows commit metadata but not visual content. She checks the log:

```
git log --oneline -- illustrations/onboarding/step-2-generate.png
```

Three commits ago, she exported from a file with the wrong color profile. She fixes the source, re-exports, and commits: `Fix color profile on onboarding illustrations (sRGB, not Display P3)`.

**Nora's interactive staging.** Nora has been updating `product-brief.md` with two unrelated changes: a scope expansion (adding tablet support) and updated user interview findings from round 2. She wants to commit them separately — the scope change needs its own PR and approval, but the research update can merge immediately.

```
git add -p product-brief.md
```

She stages only the hunks related to interview findings, commits those, then stages and commits the scope expansion separately. Two clean commits instead of one muddled one.

**Sam's accidental commit to main.** Sam forgets to create a branch. He commits a screen redesign directly to `main`. Branch protection catches it on push — he can't push to `main` without a PR. But the commit exists locally. He fixes it:

```
git reset --soft HEAD~1
git checkout -b feature/screen-redesign
git commit -m "Redesign generation progress screen with loading animation"
```

The commit moves to the correct branch. `main` is clean.

**Priya's messy history.** Priya's icon branch has five commits:

```
Add home icon
Fix home icon — wrong stroke width
Update home icon — adjust padding
Add settings icon
Fix settings icon — align to grid
```

Before opening her PR, she cleans up with interactive rebase:

```
git rebase -i HEAD~5
```

She squashes the home icon commits into one ("Add home navigation icon") and the settings icon commits into one ("Add settings navigation icon"). The PR shows two clean additions instead of five noisy iterations.

**Kai's submodule.** The AI pipeline has grown complex enough to be its own repository: `sketchspark-ml`. Kai adds it as a submodule of the main product repo:

```
git submodule add git@github.com:sketchspark/sketchspark-ml.git pipeline/
```

When the model improves — better option variety, faster generation — Kai updates the submodule pointer in the main repo. The team pulls and gets the latest pipeline version without managing ML code directly.

---

## Chapter 8 — Process & Automation

The team has grown beyond informal coordination. They need guardrails.

**Git attributes for binary files.** Nora creates `.gitattributes` to tell Git which files are binary and which can be meaningfully diffed:

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
*.txt diff

# Large source files — version but exclude from archives
*.psd export-ignore
*.sketch export-ignore
research/raw-interviews/ export-ignore
```

This means `git diff` produces useful output for SVGs, tokens, prompts, and documentation — but doesn't try to diff PNGs or Figma files (which would just show binary garbage).

**Commit message template.** Nora creates `.gitmessage`:

```
[Phase: Component] Short description

# Phases: Research, Concept, Design, Pipeline, Docs, Fix, Release
# Examples:
#   [Design: Results Screen] Add overlay diff comparison mode
#   [Research: Persona] Update early-adopter goals after round 2 interviews
#   [Pipeline: Prompts] Improve mobile layout generation constraints
#   [Fix: Onboarding] Correct tablet breakpoint for step 2 illustration
```

She configures it:

```
git config commit.template .gitmessage
```

Every commit now starts from this template. The `[Phase: Component]` prefix makes `git log --oneline` scannable and `git log --grep="[Design:"` filters to design-only changes.

**Pre-commit hook.** Nora adds a hook that runs before every commit:

1. Validates `model-params.yaml` is syntactically correct YAML
2. Checks that prompt templates in `prompts/` don't exceed 4096 tokens (the model's context limit)
3. Warns (but doesn't block) if any PNG file exceeds 5MB

The hook is a shell script — Nora found a template online and adapted it. She couldn't write it from scratch (she's not a programmer), but she can read it and modify the file size threshold.

**Commit-msg hook.** A second hook validates that commit messages match the `[Phase: Component]` pattern. If Sam writes "fix stuff", the commit is rejected with a message explaining the expected format.

**Image metadata diffing.** Nora configures Git to use `exiftool` for PNG diffs. Now `git diff` on an illustration shows metadata changes: dimensions, color profile, export date, DPI. It's not a visual diff, but it catches the color profile mistake that cost Priya time in Chapter 7.

The team's process is now encoded in the repository itself. New contributors (like Marcus) inherit the rules automatically when they clone.

---

## Chapter 9 — Legacy Migration

SketchSpark acquires a smaller competitor, **QuickMock**. QuickMock has three years of design assets — mockups, illustrations, user research, and brand materials — stored in a Subversion (SVN) repository on a company server.

Nora leads the migration.

**Assessment.** She checks the SVN repo: 2,400 files, 1.2GB total. Most of the size comes from PSD source files (some over 100MB) and high-resolution marketing renders. The text files (research notes, documentation) are small and numerous.

**Planning.** She decides:
- Import full history for text files (research, documentation, changelogs) — the evolution matters
- Import only the latest version of large binary files (PSDs, high-res PNGs) — old versions of 100MB PSDs aren't useful enough to justify the repo bloat
- Configure Git LFS for files over 10MB going forward
- Map QuickMock's flat folder structure to SketchSpark's organized hierarchy

**Execution.** She uses `git svn clone` to pull the history:

```
git svn clone https://svn.quickmock.internal/trunk quickmock-import --authors-file=authors.txt
```

The authors file maps SVN usernames to Git identities so QuickMock's team gets proper attribution.

Post-import cleanup:
- SVN branch names with `@` suffixes get cleaned up
- Large binaries get migrated to Git LFS: `git lfs migrate import --include="*.psd,*.ai" --above=10mb`
- QuickMock's flat `designs/` folder gets reorganized into SketchSpark's `screens/`, `illustrations/`, and `icons/` structure

The migration takes a day. The combined repo is 800MB with LFS (down from 1.2GB if everything were inline). Three years of QuickMock's design evolution is now searchable alongside SketchSpark's history.

Priya notes: "I wish we'd set up LFS from the start. My onboarding illustrations have been bloating the repo since Chapter 5."

---

## Chapter 10 — Scale & Recovery

It's two days before the v1.0 launch. The team is in final polish mode. Sam is updating screenshots in the documentation. Priya is exporting final marketing assets. Nora is writing release notes. Kai is tuning the model's generation speed.

Then Sam makes a mistake.

He means to reset his working directory to discard some local experiments. He types:

```
git reset --hard HEAD~3
```

On `main`. He just rewound the main branch by three commits — Nora's release notes, Priya's final marketing illustrations, and Kai's generation speed improvement. All gone from `main`.

Panic. Then Nora says: "Git doesn't delete anything. It just moves pointers."

She opens the reflog:

```
git reflog
```

The reflog shows every position `HEAD` has been in. Three entries up, there's the commit before Sam's reset. She creates a recovery branch:

```
git branch recovery a1b2c3d
git checkout recovery
git log --oneline -5
```

All three commits are there. She merges recovery into main:

```
git merge recovery
```

Everything is restored. The launch stays on schedule.

This moment — the near-disaster and the recovery — becomes the frame for understanding Git internals:

**Objects.** Every file version, every directory snapshot, every commit is stored as an object with a unique hash. Nora explains: "When you committed those release notes, Git created an object. When Sam reset `main`, Git didn't delete the object — it just moved the `main` label to point at an older one. The release notes object was still there, just unreachable through normal commands."

**References.** Branches are labels. Tags are labels. HEAD is a label. Moving them — even destructively — doesn't destroy the underlying objects. Sam's `reset --hard` moved the `main` label backward. Nora's `branch recovery` created a new label pointing at the still-existing commit.

**Reflog.** Git keeps a log of every label movement for at least 30 days. Even if Sam had deleted the branch, the reflog would still know where it pointed. The reflog is the safety net that makes Git's model robust against human error.

**Packfiles.** Priya asks why `git clone` takes 45 seconds for a repo with thousands of files. Nora explains: Git packs similar objects together using delta compression. When Priya commits a slightly modified illustration, Git doesn't store a second full copy — it stores the difference. But very large binary files (her PSDs) resist delta compression, which is why LFS exists.

The internals chapter isn't about cryptographic hash functions or the Git object database's implementation. It's about understanding *why your work is never truly lost* — and why that matters when months of research, design, and AI configuration are at stake.

---

## Appendix A — Tooling Choices

The team never agreed on one tool. That turned out fine.

**Nora** uses the command line. Her work is text-heavy — product briefs, research notes, user flows. She types `git status`, `git diff`, `git log --oneline --graph` dozens of times a day. The CLI is fastest for her.

**Sam** uses VS Code. He edits `design-tokens.json` and `user-flows.md` with Git's inline gutter indicators showing what changed since the last commit. The built-in source control panel lets him stage individual hunks without learning `git add -p` syntax. He reviews PRs with the GitHub Pull Requests extension.

**Priya** uses GitHub Desktop. She stages files by checking boxes. She sees a visual list of changed files — critical when her commits include a dozen illustration exports. Drag-and-drop staging and clear binary file indicators ("This file has changed but can't be displayed") match how she thinks about her work.

**Kai** uses JetBrains (WebStorm). The integrated terminal, diff viewer, and Git log sit alongside his Python and JavaScript code. He resolves merge conflicts in the three-pane merge tool without leaving his IDE.

The appendix presents a decision tree:
- "I mainly write text and research documents" → CLI or VS Code
- "I work with lots of image files" → GitHub Desktop
- "I write code alongside design work" → VS Code or JetBrains
- "I want the simplest possible interface" → GitHub Desktop
- "I want maximum control" → CLI

No choice is wrong. The best Git tool is the one you'll actually use.

---

## Appendix B — Tool Integration

Kai gives the team a look behind the curtain.

SketchSpark's own architecture uses Git internally. When a user uploads a sketch and the system generates 5 UI options, each option is created as a lightweight branch in a temporary repository using **libgit2** (C library, called from the Python backend). The user's "compare options" screen is reading from Git branches. The "pick this one" button is a merge. The product's UX is a Git workflow — the user just never sees `git` commands.

This reframing — "you've been using Git concepts all along without knowing it" — lands differently now that readers understand branches and merges from their own experience.

Priya is intrigued by a different angle. She wants to automate her export workflow: every time she exports illustrations from her design tool, a script should auto-commit them to Git. She finds **Dulwich**, a Python Git library, and writes a script:

```python
# Simplified — watches export folder and auto-commits new PNGs
from dulwich.repo import Repo
repo = Repo(".")
repo.stage(["illustrations/onboarding/step-1-upload.png"])
repo.do_commit(b"Auto-export: updated onboarding illustration step 1")
```

It's ten lines of code (Kai helps with the details). Now her Git workflow is: export from design tool → script commits automatically → she opens a PR when the batch is ready. The manual `git add` / `git commit` cycle disappears for her binary file workflow.

The appendix isn't about learning to write Git libraries. It's about understanding that the tools designers already use — GitHub Desktop, Figma plugins, CI/CD pipelines — are built on these libraries. Knowing they exist demystifies "how does GitHub Desktop work?" and opens the door to simple automation.

---

## Appendix C — Reference

The command reference is organized by SketchSpark workflow, not alphabetical command taxonomy.

**Starting a Project**
- `git init` — Create a new repository (Nora in Chapter 2)
- `git clone` — Copy an existing repository (Sam joining in Chapter 3)
- `git config` — Set your name, email, editor, commit template (Chapter 1, Chapter 8)

**Daily Design Work**
- `git status` — What's changed since my last commit?
- `git add` — Select files to include in the next commit
- `git add -p` — Select specific changes within a file (Nora in Chapter 7)
- `git commit` — Save a checkpoint with a message
- `git diff` — What exactly changed? (works for text files; limited for binary)
- `git stash` — Set aside work-in-progress temporarily (Sam in Chapter 7)

**Exploring & Branching**
- `git branch` — List, create, or delete branches
- `git checkout` / `git switch` — Move to a different branch
- `git merge` — Combine one branch into another
- `git rebase` — Replay commits onto a different base (Sam in Chapter 3)

**Collaborating**
- `git remote` — Manage connections to shared repositories
- `git push` — Send your commits to the shared repository
- `git pull` — Download and merge teammates' changes
- `git fetch` — Download without merging (check first, merge later)

**Reviewing History**
- `git log` — See commit history (with `--oneline --graph` for visual overview)
- `git log -S "keyword"` — Find when a specific term was added or removed
- `git blame` — Find who last changed each line of a file (Priya in Chapter 7)
- `git show` — Display a specific commit's contents

**Shipping a Release**
- `git tag` — Mark a commit as a release (v0.1-concept, v0.5-alpha, v1.0)
- `git archive` — Create a distributable zip/tar without Git history

**Fixing Mistakes**
- `git restore` — Discard uncommitted changes to a file
- `git restore --staged` — Unstage a file without losing changes
- `git reset --soft HEAD~1` — Undo the last commit, keep changes staged (Sam in Chapter 7)
- `git revert` — Create a new commit that undoes a previous commit (safe for shared branches)
- `git reflog` — Find lost commits after a destructive operation (Nora in Chapter 10)

**Maintaining Quality**
- `git clean` — Remove untracked files (caution: irreversible for design exports)
- `git lfs` — Manage large binary files (illustrations, PSDs) without bloating the repo

Each command links back to the chapter where it appears in the storyline, so readers can revisit the full context.

---

## Recurring Threads

These themes weave through every chapter, creating continuity beyond the plot:

**Binary vs. Text.** Introduced in Chapter 1 (Nora's question about Sketch files), demonstrated in Chapter 2 (wireframe PNGs vs. markdown briefs), painful in Chapter 5 (Priya's large illustrations), configured in Chapter 8 (`.gitattributes`), resolved in Chapter 9 (Git LFS). Every chapter reinforces: text files are Git's strength; binary files require extra care.

**The Five Options.** The product generates 5 options from 1 sketch. Git creates parallel branches from 1 commit. This parallel is explicit in Chapter 3 (Sam's three `option/` branches), implicit in Chapter 5 (four parallel feature branches), and architectural in Appendix B (the product uses Git branches internally). The metaphor deepens as the reader's Git knowledge grows.

**Design Decisions as Commits.** Every commit in the storyline represents a design decision — not a code change. "Update primary color for accessibility," "Add tablet breakpoint to onboarding," "Improve mobile generation prompt." This reframes Git from a developer tool to a design decision ledger.

**Progressive Team Growth.** Chapter 1: solo. Chapter 2: solo with structure. Chapter 3: pair. Chapter 5: team of four. Chapter 6: open community. Each growth stage introduces the Git workflow that stage demands — tags when you're solo, branches when you're two, integration manager when you're four, fork-and-PR when you're open source.

**The Safety Net.** Git's ability to recover from mistakes is introduced gently (undo in Chapter 2), tested (reset in Chapter 7), and fully proven (reflog recovery in Chapter 10). By the final chapter, the reader trusts that Git protects their work — the same trust that motivated Nora to adopt it after her file loss in Chapter 1. The story ends where it began: your work is never truly lost.
