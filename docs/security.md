---
title: Security essentials
---

![Security essentials](./assets/header-illustrations/6.png)

# Security essentials

In an office, you can lock the doors and even hire a security guard. You can talk face-to-face with somebody to verify that their requests are legitimate. And, you can walk over to a broken computer to fix it or install new software. 

Building a distributed team introduces new challenges for data security, authentication, and ongoing support. In this section, we will cover our best practices for securing workers with no office. 

## Security for software contractors

An evolving part of the security model is how to deal with contractors. You do not own or control their computer, so you need to think about security differently. 

When you hire developers for ongoing contract work or a contract-to-hire trial, they will be working on your internal code base. It’s important to have a process and documentation in place before they get started.

- **Work contract**: Have a solid legal agreement in place. If you don’t have a legal team, we recommend using the free [Consulting Agreement Generator](https://www.cooleygo.com/documents/form-consulting-agreement/) from the famous Cooley law firm. While many founders are fixated on getting a non-disclosure agreement in place, this is not enough! A good contractor agreement does include non-disclosure, but also includes other terms such as an **assignment agreement**. Without an assignment agreement, you do not own the work of your contractor - even if you pay them! This sounds unintuitive, but can cause huge problems for your business later. So, take contracts seriously!

- **Insurance:** You cannot guarantee the security of somebody else's laptop. So, the standard for working with software contractors is to require proof of professional liability insurance that covers errors and omissions. This insurance doesn't cost the developer much (a couple of hundred dollars per year), but protects your business in a variety of scenarios - ranging from the freelancer getting hacked and losing your customer information, to them writing code that has a major security vulnerability. Some insurance providers, such as [Coalition](https://www.thecoalition.com/), even provide a phone number to use for getting immediate help with cyber incidents. Any major enterprise requires this insurance from their software contractors, and you should too. 

- **Access to code:** Have all code under version control—through [Github](https://github.com), [GitLab](https://gitlab.com), [Bitbucket](https://bitbucket.org/product), or another service—so that all parties can maintain the complete history of work. If there is a dispute or lapse, you do not want to lose access to the code which you own. Maintain admin or owner rights to the repositories so that you can manage access as contractors ramp up and ramp down from the project. Clearly communicate to the contractor what they can and cannot do within the repository.

- **Access to a development environment:** Have a production-like environment where contractors can developer, deploy, and test their code before it is pushed to production. Ensure that it is isolated from production data so that contractors do not have access to sensitive information unnecessarily.

- **Proper code reviews:** Ensure that the code being committed is the code you expect. Review for correctness to the solution, correct security primitives, ensure there are no backdoors, and that it matches your code style. Use automation when possible to scan for problems. Consider setting up your code repository to enforce this requirement.

- **Jurisdiction:** If your business has strong concerns about security, then you should consider the maturity of the local court system where your contractor resides. Nobody wants to go to court, but if you do have to litigate - you stand a better chance of enforcing your contract if the contractor lives in your local country or one with mature laws.

## Securing remote employees

### Managing remote computers

### Ensuring identity through authentication

You may not have a full IT team for a while, but there are still some best practices you should follow to ensure your code and data is secure. Make sure all employees are aware of requirements, and that there is clear documentation for setup.

- **Remote IT team**: Have remote orchestration tools, so that you can enforce security or do IT remotely. We like Fleetsmith for OSX, which has a generous free plan.

- **Encryption**: Set it up on all company devices. If you’re using Fleetsmith, then you can enforce Filevault.

- **Smart passwords**: Set up a password-sharing utility. We recommend 1Password Teams. Enforce two-step verification for everything. If you can, issue U2F keys. Credential stuffing attacks are the new norm, and have resulted in major hacks such as the [breach of Segment](https://segment.com/security/bulletins/incident090519/).

![Divider illustration - "Open Late"](./assets/divider-illustrations/divider-11.png)