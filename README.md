TSR

TypeScript - React: A personal project created to hone my skills.

A full authentication system built in TypeScript: signup, login, email verification and a protected dashboard.

I built this to understand what actually sits behind a login form. Most tutorial auth stops at checking a password against a database, so I wanted to go further and handle the parts that come up in real systems: validating input properly, generating verification codes, sending them over SMTP, and only granting access once an address has been confirmed.

The flow

User signs up, and input is validated before anything is persisted

A verification code is generated and emailed over SMTP

The user confirms their address with the code

Login is validated against the stored account

A verified, logged-in user reaches the dashboard

What it does

Signup and login with server-side validation

Input validation extracted into its own reusable module rather than repeated per route

Email delivery over SMTP

Verification codes to confirm ownership of an email address

Routed pages with a dashboard behind authentication

Stack
	
Language	TypeScript
Framework	React
Database	PHP Backend saving to Postgres
Email	SMTP Built in C# SMTP
Running it

bash
git clone https://github.com/tom-does-code/TSR.git
cd TSR
npm install

Create a .env file in the project root:

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

bash
npm run dev
Structure
src/
  routes/       Route definitions
  validation/   Reusable string and input validation
  
What I'd change

Verification codes should expire after a set window and be single-use; right now there is no time limit on them

Rate limiting on the signup and login endpoints, so the email sender can't be abused

Password hashing should use a deliberately slow algorithm such as bcrypt or Argon2 if it doesn't already

No test coverage, which is the first thing I would add

Email sending should be queued rather than blocking the signup request
Notes

Personal project built to understand authentication end to end rather than treating it as a solved box.
