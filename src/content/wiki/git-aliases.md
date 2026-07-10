---
title: "Git aliases I actually use"
summary: "A short list of Git aliases that save me keystrokes every day."
category: "Development"
tags: ["git", "shell", "productivity"]
created: 2026-05-02
updated: 2026-06-10
---

I keep my Git aliases small — only the ones I reach for constantly. They live in my
[dotfiles](/projects/dotfiles).

```ini
[alias]
  s   = status -sb
  co  = checkout
  br  = branch
  cm  = commit -m
  amend = commit --amend --no-edit
  lg  = log --oneline --graph --decorate -20
  last = log -1 HEAD --stat
  unstage = reset HEAD --
  undo = reset --soft HEAD~1
```

## The two I'd never give up

- `git lg` — a compact, graphical log. It's how I orient myself in any repository.
- `git undo` — soft-resets the last commit while keeping the changes staged. Perfect
  for "oops, wrong message" or "that should've been two commits."

## A tip, not an alias

`git commit --fixup <sha>` plus `git rebase -i --autosquash` is the cleanest way to
amend an older commit without hand-editing a rebase list.
