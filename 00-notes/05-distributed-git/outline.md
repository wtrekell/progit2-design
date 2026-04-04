# Chapter 5: Distributed Git — Section Outline

> **Storyline phase**: Design & Build Sprint
> **Characters**: Nora, Sam, Priya (joins), Kai (joins)
> **Key event**: Four parallel workstreams; first alpha release (v0.5-alpha)

---

## Section: Distributed Workflows (`distributed-workflows.asc`)
**Original**: 103 lines | **Action**: REWRITE

### Keep
- Three workflow patterns: Centralized, Integration-Manager, Dictator/Lieutenants
- Diagrams for each workflow

### Rewrite
- **Centralized Workflow**: "For a two-person team like Nora and Sam in the previous chapters — both push to `main` on the same repo. Simple, but doesn't scale."
- **Integration-Manager Workflow**: "Nora now acts as integration manager. Sam, Priya, and Kai each work on their own branches. Nora reviews and merges their PRs to `main`. This is the workflow most teams on GitHub use."
- **Dictator/Lieutenants**: "Used in massive projects like Material Design or Bootstrap — governance layers for design system decisions. The SketchSpark team doesn't need this, but you might encounter it when contributing to large open-source design projects."
- Add: "As a designer, you'll most likely use Integration-Manager (fork + PR) for open-source projects, or Centralized for small internal teams."

---

## Section: Contributing to a Project (`contributing.asc`)
**Original**: 803 lines | **Action**: REWRITE EXAMPLES, TRIM HEAVILY

### Commit Guidelines (lines 33-99)
**Action**: REWRITE

- Cut `git diff --check` for whitespace — irrelevant to designers
- Replace Tim Pope commit template with SketchSpark template:
  ```
  [Design: Results Screen] Add card layout with 5-option grid

  The card layout shows all 5 generated options in a responsive grid.
  Each card includes a thumbnail, confidence score, and "Select" button.
  Choosing a card opens the refinement view.
  ```
- Keep: "Make each commit a logically separate changeset" — reframe with: "Nora commits the product brief separately from the wireframes because they serve different review purposes."
- Cut `git add --patch` reference — save for Chapter 7

### Private Small Team (lines 101-325)
**Action**: REWRITE

- Replace John/Jessica with Nora/Sam/Priya/Kai:
  - Nora: UX flows and research updates (`feature/ux-flows-v2`)
  - Sam: production UI screens (`feature/production-screens`)
  - Priya: onboarding illustrations (`feature/onboarding-illustrations`)
  - Kai: AI pipeline setup (`feature/ai-pipeline-setup`)
- Replace all file references:
  - `lib/simplegit.rb` → `concept/user-flows.md`
  - `TODO` → `product-brief.md`
  - `index.html` → `screens/results/card-layout.fig`
- Show the fetch/merge/push coordination cycle with Nora as integrator
- Add: Priya's first push takes 3 minutes (large illustration files). Note: "We'll address large file management in Chapter 8."

### Private Managed Team (lines 327-497)
**Action**: REWRITE + TRIM

- Replace `featureA`/`featureB` with:
  - `feature/sketch-input-redesign` (Nora + Sam)
  - `feature/ai-pipeline-v1` (Kai)
- Reframe: "Ideal when your team splits into workstreams — one pair working on the input experience, another building the generation pipeline."
- Trim detail — keep the coordination pattern, cut repetitive fetch/merge sequences

### Forked Public Project (lines 499-636)
**Action**: LIGHT REWRITE

- Preview for Chapter 6: "This workflow appears when SketchSpark goes public. External contributors fork the repo, make changes, and submit PRs."
- Reframe `--squash`: "Collapses all experimental changes into one clean commit — like flattening your iteration layers before presenting a final design."
- Replace file examples with SketchSpark prompt template improvement

### Public Project over Email (lines 638-791)
**Action**: REPLACE WITH NOTE

- Replace 153 lines of email workflow with:
  > "This section describes an older contribution workflow using email patches. Modern design teams use GitHub or GitLab pull requests instead. If you're contributing to a project that requires email patches, refer to the original Pro Git book for detailed instructions."
- ~5 lines (down from 153)

---

## Section: Maintaining a Project (`maintaining.asc`)
**Original**: 557 lines | **Action**: REWRITE EXAMPLES, TRIM

### Working in Topic Branches (lines 8-29)
**Action**: REWRITE
- Replace `sc/ruby_client` with `priya/icon-overhaul`, `kai/generation-speed`
- Add: "Unlike code, design changes often span multiple file types — an illustration update might include PNGs, an SVG, and a documentation update. Keep related changes in one branch."

### Applying Patches from Email (lines 31-182)
**Action**: REPLACE WITH NOTE
- Replace 151 lines with: "Most design projects use GitHub/GitLab pull requests. If you need to apply patches from email, see the original Pro Git reference."
- ~3 lines (down from 151)

### Checking Out Remote Branches (lines 184-218)
**Action**: LIGHT REWRITE
- Replace generic contributor with: "Priya sends you a link to her `feature/onboarding-illustrations` branch. You want to review her illustrations locally."

### Determining What Is Introduced (lines 220-294)
**Action**: REWRITE
- Replace generic diffs with: "You want to see exactly what screens Sam designed that aren't in `main` yet."
- Show `git log main..feature/production-screens --oneline`
- Show `git diff main...feature/production-screens -- screens/`

### Integrating Contributed Work (lines 296-402)
**Action**: REWRITE + TRIM
- **Merging Workflows**: Nora's integration pattern — review PR, merge to `main`, tag milestones
- **Large-Merging Workflows**: Label as "advanced — for massive projects, not typical product teams"
- **Cherry-Picking**: Sam cherry-picks the "pinch-to-zoom" interaction from `option/canvas-freeform` into a new feature branch (callback to Chapter 3)
- **Rerere**: Trim to concept + 3-line summary — "Git can remember how you resolved a conflict and apply the same resolution automatically next time."

### Tagging Releases (lines 428-482)
**Action**: REWRITE
- SketchSpark `v0.5-alpha`:
  ```
  git tag -a v0.5-alpha -m "Alpha: end-to-end sketch-to-options pipeline working"
  ```
- Simplify PGP signing to 1 line: "Optional. For open-source projects, signed tags add credibility."

### Preparing a Release (lines 505-528)
**Action**: REWRITE
- ```
  git archive main --prefix='sketchspark-v0.5-alpha/' --format=zip > sketchspark-v0.5-alpha.zip
  ```
- "The archive goes to the CEO for demo day."

### The Shortlog (lines 531-557)
**Action**: REWRITE
- Show SketchSpark shortlog:
  ```
  Nora (4): Updated user flows, Added round 2 interview findings, ...
  Sam (6): Added card layout screens, Fixed upload error state, ...
  Priya (3): Added onboarding illustrations, ...
  Kai (5): Set up AI pipeline, Added generation prompts, ...
  ```

---

## Chapter Summary
**Action**: REWRITE

### New
- "The alpha works. Four team members coordinated their work through branches, pull requests, and an integration-manager workflow. Priya's large files are a growing concern. The next chapter takes SketchSpark public — and the team learns how open-source contribution works from the receiving end."
