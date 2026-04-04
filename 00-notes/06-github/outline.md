# Chapter 6: GitHub — Section Outline

> **Storyline phase**: Public Beta & Community
> **Characters**: Nora, Sam, Priya, Kai, Marcus (external contributor)
> **Key event**: SketchSpark goes public; Marcus contributes improved mobile prompt via PR

---

## Section: Account Setup and Configuration (`1-setting-up-account.asc`)
**Original**: 97 lines | **Action**: REWRITE EXAMPLES

### Keep
- Account creation, SSH key upload, avatar, email settings
- Two-factor authentication

### Rewrite
- Add SSH analogy: "Like a trusted device — once registered, no re-authentication needed."
- Add 2FA context: "Prevents a compromised password from putting all your team's design assets at risk."
- Replace email linking example: "If you use work and personal accounts, link both emails so GitHub tracks your total contribution history across both."

---

## Section: Contributing to a Project (`2-contributing.asc`)
**Original**: 548 lines | **Action**: REWRITE

### Forking (lines 5-26)
- Replace fork explanation with: "Forking is like duplicating a shared project to your own workspace. You can experiment freely without affecting the original."

### GitHub Flow / Creating a PR (lines 29-195)
**Action**: FULL REWRITE — this is the chapter's centerpiece
- Replace Arduino blink example with Marcus's contribution to SketchSpark:
  1. Marcus forks `sketchspark/sketchspark` to `marcus/sketchspark`
  2. Creates `feature/mobile-prompt-template`
  3. Edits `prompts/sketch-to-ui.txt` to add mobile-specific layout constraints
  4. Adds new file: `prompts/mobile-layout.txt`
  5. Commits, pushes, opens PR
  6. PR description includes before/after screenshots: 5 generated options from the same sketch, current vs. improved prompt. Mobile options show better touch target sizing.
- Walk through the PR interface with design-relevant content

### Iterating on a PR (lines 147-205)
**Action**: REWRITE
- Nora reviews Marcus's PR the next morning (different timezone — 16 hours apart)
- Feedback: prompt format doesn't match template, mobile-layout file needs a header comment, suggests splitting touch-target constraint for readability
- Marcus pushes updates. Nora approves and merges.
- Key point: "You don't need changes to be 'perfect' before opening a PR. Opening early lets your team weigh in on direction — just like sharing a rough sketch for feedback."

### Advanced Pull Requests (lines 206-296)
**Action**: TRIM
- Keep cross-reference and PR-on-PR concepts
- Cut detail on keeping up with upstream — simplify to: `git fetch upstream && git merge upstream/main`

### GitHub Flavored Markdown (lines 298-486)
**Action**: KEEP + EXPAND IMAGES
- Keep task lists, code blocks, tables, emoji — all useful for PR descriptions
- **Expand image embedding** (currently 10 lines): "Drag-and-drop screenshots into PR comments for design reviews. Include before/after comparisons, annotate with arrows or highlights, show responsive behavior at different breakpoints."
- Add: "For design PRs, screenshots aren't optional — they're the primary review artifact. Every PR that changes visual output should include them."

### Keeping Forks in Sync (lines 488-548)
**Action**: LIGHT REWRITE
- Frame as: "Marcus keeps his fork synced so his next contribution starts from the latest version."

---

## Section: Maintaining a Project (`3-maintaining.asc`)
**Original**: 377 lines | **Action**: REWRITE EXAMPLES

### Keep
- Repository creation, README, CONTRIBUTING, LICENSE
- Branch protection
- Collaborator management

### Rewrite
- **CONTRIBUTING.md**: Replace generic example with SketchSpark guidelines:
  - Prompt template format (system context → user instruction → constraints)
  - Illustration specs (2x resolution, brand palette, PNG with transparent background)
  - Icon specs (24x24 grid, 2px stroke, SVG format)
  - Screen mockups must include light and dark mode
  - All UI must pass WCAG AA contrast
- **README**: Expand for design project:
  - Product screenshot/GIF showing sketch-to-options flow
  - Repository structure overview
  - Quick start guide
  - Link to live docs (GitHub Pages)
- **Branch protection**: Nora configures: PRs required, 1 approval, status checks
- **Labels**: `prompt-improvement`, `new-screen`, `bug`, `accessibility`, `breaking-change`

### New
- Add "GitHub Pages for Design Documentation" subsection:
  - Team deploys product docs to `sketchspark.github.io`
  - Setup walkthrough (enable Pages, point to `/docs` folder or `gh-pages` branch)

---

## Section: Managing an Organization (`4-managing-organization.asc`)
**Original**: 72 lines | **Action**: REWRITE EXAMPLES

### Keep
- Organization creation, teams, permissions

### Rewrite
- Frame with SketchSpark org:
  - `@core-team`: Nora, Sam, Priya, Kai (write access to all repos)
  - `@contributors`: Marcus and other external designers (fork-and-PR)
  - `@stakeholders`: CEO, investors (read-only, comment on PRs)
- "If your product has 3+ contributors, an organization makes access management simpler than adding individual collaborators."

---

## Section: Scripting GitHub (`5-scripting.asc`)
**Original**: 301 lines | **Action**: REWRITE + TRIM

### Keep
- Webhooks concept
- API basics
- Practical automation examples

### Rewrite
- Replace generic webhook with SketchSpark example: "When someone opens a PR, automatically post to `#design-reviews` in Slack."
- **GitHub Actions** (replace outdated Services section):
  - "Actions let you automate validation when PRs are opened."
  - SketchSpark example: validate that prompt templates don't exceed token limits, check SVG files for missing `<title>` elements
- Simplify API section: "Most automation tasks are easier via GitHub Actions than manual API calls. Use the API when Actions can't do what you need."

### Cut
- Services section (deprecated, replaced by Actions/webhooks)
- Detailed API pagination examples — keep one simple example

---

## Chapter Summary
**Action**: REWRITE

### New
- "SketchSpark is public. The team receives and reviews external contributions, maintains clear guidelines for contributors, and uses GitHub's tools to manage the growing community. Marcus improved the mobile generation from Melbourne without ever meeting the team. In the next chapter, the product enters production — and the team encounters the complexity that comes with real users and real deadlines."
