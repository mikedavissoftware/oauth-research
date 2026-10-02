<link rel="stylesheet" href="./notes-style.css">

# OAuth Research Project

### TASK: Spend a half-day researching OAuth, taking notes throughout this research process

<hr/>

## ___10:15a - 11:00a__ - Overview_

I will begin with my initial idea of what OAuth is, so that I can compare & contrast that to my updated understanding of the technology.

As indicated by the name, OAuth is a streamlined tool for authorizing access to data that is already accessible to another account. This process assumes the precondition of authentication of this other superaccount, which then allows the authorization of certain permissions to this subcontext in which OAuth is being used.

From what I know of authentication and authorization, I assume that this is all accomplished through key generation, where the subcontext’s client sends a request for a set of permissions to access data, using the superaccount’s authentication to trigger the key generation. I would also assume that this creates a sort of session within the subcontext that can be terminated by the client or the superaccount at anytime, most likely by the removal of the generated key from the superaccount’s set of active keys.

More broadly, I know that OAuth (specifically OAuth 2.0) is widely used by major tech companies like Google and Meta, to quickly authorize access to user data across a plethora of different applications. These applications include but are not limited to phone apps, web apps, and desktop apps.

The use of OAuth allows for quick access to essential data like name, email address, or media files, so that the account creation or login process is extremely easy and users are not discouraged by the inconvenience of filling in account creation forms. It also eliminates the possibility of typos in that process, and also can circumvent the inconvenience of email confirmation. Both of these conveniences save the user time and boost the rate of signups for any app that chooses to use OAuth.

Lastly, I’d like to quickly address the privacy issues around OAuth. In an age of user data being so valuable, OAuth directly gives providers a strong picture of which sites users visit and which apps they use. With the high level of distrust of tech companies, this is definitely something to consider when choosing to incorporation OAuth into any application. Though I think the actual information being shared by providers is secure, their ability to monitor which applications users are creating accounts on could be a growing cause for concern in certain users, moving forward.

<hr/>

## ___11:30a - 1:00p__ - Research Phase 1_

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

Source: [OAuth 2 Explained In Simple Terms](https://www.youtube.com/watch?v=ZV5yTm4pT8g&t=13s)

OAuth is like a special key to access certain information stored by a user account, without having to share the login credentials for that account.

There are three entities in a simple OAuth interaction:

- **Client**: The application requesting access to the user's data.
- **Resource Owner**: The user whose data is being accessed.
- **Authorization Server**: The server that manages the authorization process.

Using an example where the <span class="user">User</span> _(Resource Owner)_ wants to authorize <span class="print-magic">Print Magic</span> _(Client)_ to print photos stored in their <span class="snap-store">SnapStore</span> _(Authorization Server)_ account, here is a diagram depicting the process: (Order of events is top-down)

<img src="images/oauth-diagram-1.png" width="100%" height="auto">

The general steps are as follows:

1. <span class="user">User</span> sends print job request to <span class="print-magic">Print Magic</span>.
2. <span class="print-magic">Print Magic</span> sends authorization request <span class="snap-store">SnapStore Auth</span>, accompanied by _client ID_ and _scope of permissions_.
3. <span class="snap-store">SnapStore Auth</span> sends permission request dialog to <span class="user">User</span>.
4. <span class="user">User</span> sends approval to <span class="snap-store">SnapStore Auth</span>.
5. <span class="snap-store">SnapStore Auth</span> grants permission to <span class="print-magic">Print Magic</span>, via an _authorization code_.
6. <span class="print-magic">Print Magic</span> sends request for _access token_ to <span class="snap-store">SnapStore Auth</span>, accompanied by the _authorization code_, _client ID_, and _client secret_.
7. <span class="snap-store">SnapStore Auth</span> sends _access token_ to <span class="print-magic">Print Magic</span>.
8. <span class="print-magic">Print Magic</span> sends fetch request for photos to <span class="snap-store">SnapStore Resource</span>.
9. <span class="snap-store">SnapStore Resource</span> sends photos to <span class="print-magic">Print Magic</span>.
10. <span class="print-magic">Print Magic</span> now has the photos, and can fulfill the originally requests print job for <span class="user">User</span>.

#### In a Nutshell:
OAuth empowers <span class="user">User</span> to permit <span class="print-magic">Print Magic</span> to access certain resources from <span class="snap-store">SnapStore Resource</span>.

For an added layer of security, OAuth can set __access tokens__ to expire as well. OAuth can also provide __refresh tokens__ to the client, which is useful for maintaining user sessions and ensuring that the client has the latest permissions.

<hr/>

## ___6:00p - 7:45p__ - Research Phase 2_

### What are the practical benefits and drawbacks of using OAuth?
### How does OAuth achieve authorization?
### How does OAuth manage tokens?
### How is security implemented in OAuth?
### How do I integrate OAuth into my application?
### Are there any good reasons not to use OAuth?
