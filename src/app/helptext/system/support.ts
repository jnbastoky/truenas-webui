import { Validators } from "@angular/forms";
import { T } from "app/translate-marker";

export const helptext_system_support = {
  username: {
    placeholder: T("Username"),
    tooltip: T(
      'Enter a valid username for the <a\
 href="https://redmine.ixsystems.com/projects/freenas/issues"\
 target="_blank">FreeNAS bug tracking system</a>'
    ),
    validation: [Validators.required]
  },

  password: {
    placeholder: T("Password"),
    tooltip: T("Enter the bug tracker account password."),
    validation: [Validators.required]
  },

  type: {
    placeholder: T("Type"),
    tooltip: T(
      "Select <i>Bug</i> when reporting an issue or\
 <i>Feature</i> when requesting new functionality."
    )
  },

  name: {
    placeholder: T("Name"),
    tooltip: T("Enter the name of the contact person DRAFT TOOLTIP"),
    validation: [Validators.required]
  },

  email: {
    placeholder: T("Email"),
    tooltip: T("Enter the email of the contact person DRAFT TOOLTIP"),
    validation: [Validators.required, Validators.email]
  },

  phone: {
    placeholder: T("Phone"),
    tooltip: T("Enter the phone number of the contact person DRAFT TOOLTIP"),
    validation: [Validators.required]
  },

  category: {
    placeholder: T("Category"),
    tooltip: T(
      "This field remains empty until a valid\
 <b>Username</b> and <b>Password</b> is entered.\
 Choose the category that best describes the bug or\
 feature being reported."
    ),
    validation: [Validators.required]
  },

  environment: {
    placeholder: T("Environment"),
    tooltip: T("Select the appropriate environment DRAFT TOOLTIP"),
  },

  criticality: {
    placeholder: T("Criticality"),
    tooltip: T("Select the appropriate level of criticality DRAFT TOOLTIP"),
  },

  attach_debug: {
    placeholder: T("Attach Debug"),
    tooltip: T(
      "Set to generate and attach to the new issue a report\
 containing an overview of the system hardware, build\
 string, and configuration. This can take several\
 minutes."
    )
  },

  title: {
    placeholder: T("Subject"),
    tooltip: T("Enter a descriptive title for the new issue."),
    validation: [Validators.required]
  },

  body: {
    placeholder: T("Description"),
    tooltip: T(
      "Enter a one to three paragraph summary of the issue.\
 Describe the problem and provide any steps to\
 replicate the issue."
    ),
    validation: [Validators.required]
  }
};
