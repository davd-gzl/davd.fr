---
title: "Gno.land"
summary: "+70 merged contributions and nearly 350 code reviews on the Gno.land monorepo, across the virtual machine, the chain and the docs."
tags: ["go", "gno", "blockchain", "virtual-machine"]
repo: "https://github.com/gnolang/gno"
url: "https://gno.land"
date: 2026-09-16
featured: true
line: "gno"
---

[Gno.land](https://gno.land) is a blockchain whose smart contracts are written in
Gno, a variant of Go, and run on an interpreted Go virtual machine. Most of my
work at Samourai Coop goes into its monorepo.

[Every merged pull request is on GitHub](https://github.com/gnolang/gno/pulls?q=is%3Apr+author%3Adavd-gzl+is%3Amerged).

## Code, +40 merged

- **Virtual machine**: more accurate gas metering, protection against stack
  overflows, stricter type checks, new error handling functions.
- **Network and consensus**: nodes that no longer crash on malformed requests or
  conflicting votes.
- **Security**: vulnerability fixes and hardening across the virtual machine and
  the node, and bug bounty triage on HackenProof.
- **Governance, web explorer and tooling**: GovDAO rules, gnoweb, gnokey and
  gnodev.

## Documentation, +25 merged

Installation, getting started, editor setup, local development, testing and how
fees work.

## Around it

A DAO framework, a validator onboarding bot, network monitoring, a contributor
dashboard, on-chain packages, the editor language server, the transaction
indexer and the documentation site.
