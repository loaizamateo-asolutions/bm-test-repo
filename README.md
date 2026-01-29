# BM Test Repo - Claude Code PR Reviews Demo

This repository demonstrates how to use **Claude Code** for automated pull request reviews in Benchmark Minerals projects.

## 🎯 Purpose

This is a proof of concept showing how Claude Code can:
- Review pull requests for code quality and bugs
- Validate adherence to project guidelines (CLAUDE.md)
- Provide inline comments with specific feedback
- Reduce manual review overhead

## 📁 Repository Structure

```
bm-test-repo/
├── .claude/
│   └── commands/
│       └── code-review.md    # Claude Code PR review slash command
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   └── forecasts/            # Example feature endpoint
├── CLAUDE.md                 # Project coding guidelines
└── README.md
```

## 🚀 How to Use

### Prerequisites
- [Claude Code CLI](https://docs.claude.com/claude-code) installed
- GitHub CLI (`gh`) authenticated
- This repository cloned locally

### Running a PR Review

1. **Create or identify a Pull Request** in this repository

2. **Run the review command** from Claude Code:
   ```
   /code-review <PR-number>
   ```

   Or with automatic commenting:
   ```
   /code-review <PR-number> --comment
   ```

3. **Review Claude's feedback** - Claude will:
   - Check if the PR needs review (skip drafts, closed PRs, etc.)
   - Analyze code changes for bugs and logic errors
   - Validate compliance with CLAUDE.md guidelines
   - Post inline comments on specific issues found

### Example Workflow

```bash
# In Claude Code
/code-review 1 --comment
```

Claude will analyze the PR and either:
- ✅ Post "No issues found" if everything looks good
- 🔍 Create inline comments for each issue detected

## 📋 What Claude Reviews

### High-Signal Issues Only
- **Syntax/compilation errors**: Missing imports, type errors
- **Logic bugs**: Code that will produce wrong results
- **CLAUDE.md violations**: Clear violations of project guidelines

### What Claude Skips
- Code style preferences
- Subjective improvements
- Issues caught by linters
- Pre-existing problems

## 🔧 Configuration

The `/code-review` command is configured in `.claude/commands/code-review.md`. It uses:
- Multiple agents in parallel for comprehensive review
- Validation step to reduce false positives
- GitHub CLI for PR interaction
- MCP inline comment tool for precise feedback

## 📚 Related Files

- **CLAUDE.md**: Project-specific coding standards that Claude validates
- **.claude/commands/code-review.md**: Full review workflow definition

## 🧪 Test PR

This repo includes a feature branch `feature/add-forecasts-endpoint` that can be used to create a test PR and demonstrate the review process.

---

**Note**: This is a demo repository for testing Claude Code's PR review capabilities. Not intended for production use.
