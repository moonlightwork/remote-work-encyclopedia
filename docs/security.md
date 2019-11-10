# Security essentials

Intro about how starting a remote company is now possible since you don’t need to manage your own physical servers. A bunch of services have made this possible. But, you still need to make sure your code and IP are secure.

## Contractors

When you hire developers for ongoing contract work or a contract-to-hire trial, they will be working on your internal code base. It’s important to have a process and documentation in place before they get started.

- **Work contract**: Have a solid legal agreement in place. If you don’t have a legal team, you can find free resources online. Try [Rocket Lawyer](https://www.rocketlawyer.com/), [Bonsai](https://www.hellobonsai.com/a/development-contract), or [Freelancers Union](https://www.freelancersunion.org/resources/contract-creator/).

- **Insurance:** You can request third-party insurance. The norm for software developers is Professional Errors and Omissions. This insurance protects you in a variety of scenarios - ranging from the freelancer getting hacked and losing your customer information, to them writing code that has a major security vulnerability. Many major companies require this now, so it’s becoming more of an industry standard.

- **Access to code: **Have all code under version control—through Github, GitLab, Bitbucket, or another service—so that all parties have the complete history of work. Maintain admin or owner rights to the repositories so that you can manage access as contractors ramp up and ramp down from the project. Clearly communicate to the contractor what they can and cannot do within the repository.

- **Access to a cloud development environment:** Have a production-like environment where contractors can developer, deploy, and test their code before it is pushed to production.

- **Proper code reviews:** Ensure that the code being committed, is the code you expect. Review for correctness to the solution, correct security primitives, ensure there are no backdoors, and that it matches your code style. Use automation when possible.

## Internal team

You may not have a full IT team for a while, but there are still some best practices you should follow to ensure your code and data is secure. Make sure all employees are aware of requirements, and that there is clear documentation for setup.

- **Remote IT team**: Have remote orchestration tools, so that you can enforce security or do IT remotely. We like Fleetsmith for OSX, which has a generous free plan.

- **Encryption**: Set it up on all company devices. If you’re using Fleetsmith, then you can enforce Filevault.

- **Smart passwords**: Set up a password-sharing utility. We recommend 1Password Teams. Enforce two-step verification for everything. If you can, issue U2F keys. Credential stuffing attacks are the new norm, and have resulted in major hacks such as the [breach of Segment](https://segment.com/security/bulletins/incident090519/).
