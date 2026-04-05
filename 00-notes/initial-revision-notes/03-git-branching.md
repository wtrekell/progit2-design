# Chapter 3: Git Branching — UX Designer Revision Notes

## Overview
Chapter 3 covers branching mechanics, merging, rebasing, remote branches, and branch management. The concepts map well to design workflows (parallel explorations, feature isolation), but all examples use generic developer scenarios.

---

## Section: Branches in a Nutshell (`nutshell.asc`)

### Priority: MEDIUM

**What Resonates:** Snapshot concept is intuitive for designers (parallels design file versions)

**What Confuses:**
- Pointer mechanics (SHA-1, HEAD) feel abstract
- "41 bytes" lightweight emphasis doesn't connect to designer workflows

**Revision Suggestions:**
- Branch as design variant: "Like keeping a mobile-responsive version alongside desktop in Figma"
- HEAD as active artboard: "HEAD = the artboard you're currently editing; checkout = switching artboards"
- Replace generic "testing" branch with `design-tokens-dark-mode`
- Remove 41-byte technical detail — provides no actionable value

---

## Section: Basic Branching and Merging (`basic-branching-and-merging.asc`)

### Priority: HIGH

**What Resonates:** The hotfix interruption scenario works for designers (they get interrupted too)

**Revision Suggestions:**
- Reframe example: "Working on checkout flow redesign (iss53), urgent button color bug reported, create hotfix branch, fix, merge, return to redesign"
- Replace `index.html` conflicts with design token file conflicts (two teammates changed `$button-primary-color` differently)
- Add design system merge scenario: two designers — one added `disabled` state, other added `size` variant
- Mention `git merge --no-ff` as a design team best practice (preserves the record that a whole design system version was integrated)

**Gaps:**
- No guidance on merge strategy choices for design teams
- No mention of conflict resolution for non-code files (design system JSON, Figma exports)

---

## Section: Branching Workflows (`workflows.asc`)

### Priority: HIGH

**What Resonates:** Progressive-stability branching maps perfectly to design system maturity levels

**Suggested Analogies:**
- `main` = Released design system (in production, stable)
- `develop` = Reviewed, approved designs (queued for next release)
- `feature/button-redesign` = Work-in-progress component (under review)

**Revision Suggestions:**
- Replace "pu" (proposed updates) with design-relevant naming
- Add design system release workflow example
- Add branch naming conventions for design: `feature/`, `fix/`, `docs/`, `design-system/`
- Address: "Should I create a branch for every component change?" (guidelines on when to branch vs. not)

---

## Section: Rebasing (`rebasing.asc`)

### Priority: HIGH (conceptually difficult for designers)

**What Confuses:** Most abstract operation — designers won't have a mental model for "rewinding and replaying commits"

**Suggested Analogies:**
- Rebase as "replay edits on a cleaner foundation" — like moving a sketch to a different layer
- Merge vs. Rebase as documentation style: Merge = "both states valid"; Rebase = "cleaned-up final story"

**Revision Suggestions:**
- Design example: "Rebase your new button style onto main to ensure it respects newly merged accessibility updates"
- Add clear guidance: "Should I rebase or merge?" — team culture decision for design teams
- De-emphasize "Rebase When You Rebase" subsection (advanced recovery) — move to troubleshooting
- Simplify patch-id explanation to: "Git can often detect if the same change was applied twice"

---

## Section: Remote Branches (`remote-branches.asc`)

### Priority: MEDIUM

**Suggested Analogies:**
- Remote branches as "published" versions: local `button-component` = your draft; `origin/button-component` = published version
- Tracking branches as a "link": "whenever I pull, automatically merge from origin's version"

**Revision Suggestions:**
- Replace `serverfix` with `design-system-tokens-v3`
- Add collaboration context: what happens when two designers push to the same branch?
- Add PR workflow mention — critical for design review before merging

---

## Section: Branch Management (`branch-management.asc`)

### Priority: LOW

- Add branch naming conventions for design teams
- Rename example from generic to `fix/button-hover-state`
- Add guidance on cleanup cadence: how often should a design team prune old branches?

---

## New Content Recommendations

1. **Branch Naming for Design Teams** — `feature/component-name`, `fix/issue-type`, `docs/`, `design-system/version`
2. **Design System Branching Strategy** — main (released), develop (next release), feature branches for new components
3. **Collaborative Workflows for Design Teams** — multiple designers, PR/review process, managing tokens and component libraries
4. **Design-Specific Merge Conflicts** — JSON design token conflicts, Figma exports, how mergetool helps

## Example Replacements Throughout

| Current | Suggested |
|---------|-----------|
| `vim test.rb` | `tokens.json` |
| `index.html` | `button-component.tsx` |
| `email.support@github.com` | design token conflict |
| "issue-tracking system" | "design system version" |
| "deploy" | "release" |
