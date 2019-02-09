workflow "Test and Typechecking" {
  on = "push"
  resolves = ["GitHub Actions for Yarn"]
}

action "Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Install" {
  needs = "Build"
  uses = "borales/actions-yarn@master"
  args = "test"
}

action "Install" {
  needs = "Build"
  uses = "borales/actions-yarn@master"
  args = "tsc"
}
