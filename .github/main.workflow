workflow "TSC and Test" {
  on = "push"
  resolves = ["TSC", "Test"]
}

action "Install" {
  uses = "actions/npm@master"
  runs = "yarn"
  args = "install"
}

action "TSC" {
  needs = "Install"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "tsc"
}

action "Test" {
  needs = "Install"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "test"
}
