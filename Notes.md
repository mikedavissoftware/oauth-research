# OAuth Research Project

### TASK: Spend a half-day researching OAuth, taking notes throughout this research process

<hr/>

## ___10:15a - 11:00a__ - Overview_

I will begin with my initial idea of what OAuth is, so that I can compare & contrast that to my updated understanding of the technology.

As indicated by the name, OAuth is a streamlined tool for authorizing access to data that is already accessible to another account. This process assumes the precondition of authentication of this other superaccount, which then allows the authorization of certain permissions to this subcontext in which OAuth is being used.

From what I know of authentication and authorization, I assume that this is all accomplished through key generation, where the subcontext’s client sends a request for a set of permissions to access data, using the superaccount’s authentication to trigger the key generation. I would also assume that this creates a sort of session within the subcontext that can be terminated by the client or the superaccount at anytime, most likely by the removal of the generated key from the superaccount’s set of active keys.

More broadly, I know that OAuth (specifically OAuth 2.0) is widely used by major tech companies like Google and Meta, to quickly authorize access to user data across a plethora of different applications. These applications include but are not limited to phone apps, web apps, and desktop apps.

The use of OAuth allows for quick access to essential data like name and email address, so that the account creation or login process is extremely easy and users are not discouraged by the inconvenience of filling in account creation forms. It also eliminates the possibility of typos in that process, and also can circumvent the inconvenience of email confirmation. Both of these conveniences save the user time and boost the rate of signups for any app that chooses to use OAuth.

Lastly, I’d like to quickly address the privacy issues around OAuth. In an age of user data being so valuable, OAuth directly gives providers a strong picture of which sites users visit and which apps they use. With the high level of distrust of tech companies, this is definitely something to consider when choosing to incorporation OAuth into any application. Though I think the actual information being shared by providers is secure, their ability to monitor which applications users are creating accounts on could be a growing cause for concern in certain users, moving forward.

<hr/>

## ___11:30a - 12:00p__ - Begin Research_

With my overview out of the way, I had developed a great framework for different branches of exploration to confirm or deny what I know and to gain a deeper understanding of how OAuth works.

I began my research by creating a GitHub repository, which served as a central location for all my notes and codebase when testing out the technology myself.

___NOTE:__ I want to be transparent that I lean on Google AI when researching development technologies. I have found it very useful to streamline the research process and point me in the right direction towards applicable documentation, articles, community forums, videos, etc._ 

I began by creating a bulleted list of questions inspired by my overview:

- What is OAuth, generally?
- What are the practical benefits and drawbacks of using OAuth?
- How does OAuth achieve authorization?
- How does OAuth manage tokens?
- How is security implemented in OAuth?
- How do I integrate OAuth into my application?
- Are there any good reasons not to use OAuth?

This felt like a great starting point for me to run through roughly in order.

### What is OAuth?

