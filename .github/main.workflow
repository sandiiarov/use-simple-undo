workflow "Test and Typechecking" {
  on = "push"
  resolves = "Test"
}

action "Install" {
  uses = "actions/npm@master"
  runs = "yarn"
  args = "install"
}

action "Typechecking" {
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

