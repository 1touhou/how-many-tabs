[![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/1touhou/how-many-tabs/rank.svg)](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/1touhou/how-many-tabs/reward.svg)](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d)

# how-many-tabs

Entry for the [make.fun bounty "How Many Tabs Do You Have Open?"](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d).

The program writes one number, digits only, to `/output/entry.txt`: the
entrant's honest count of open browser tabs. The count is **87** — a
lived-in number for a freelance server/network ops engineer juggling
consoles, documentation and dashboards: high enough to surprise, specific
enough to be believed.

Run it with Node 22:

```sh
node main.ts
```

It writes exactly the two bytes `87` (no trailing newline) to
`/output/entry.txt`, then reads the file back to verify the write.
