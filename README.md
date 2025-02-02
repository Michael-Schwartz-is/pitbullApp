Pages:

- homepage
  - list of days
  - hall of fame
- day page
  - list of days
- training page
  - image
  - list of participants
  - bitton to book this training
  - delete yourself component
- book a training page
  - form
  - confirmation
- profile
  -image, name, list of past trainings, CTA to book a lesson now

## To do

- Create an "auth context"
  - signedIn boolean
  - user
- SignedIn and SignedOut components

- OR nextAuth

```jsx
    <SignedIn>
        <button>
            Profile
        </button>
    </SignedIn>
    <SignedOut>
        <button>
            Log In
        </button>
    </SignedOut>
```

```
    npm i jsonwebtoken

    import jwt from 'jsonwebtoken'

    jwt.sign()
    jwt.verify()
```

## Tables

Weekly_Schedule (a static recurring list of weekly training sessions):
day
name
time
hebrew_name
active
image

This_Week_Sessions (a list of the next session and the people who b):
user_email
session_id
signup_timestamp
session_date
session_day

Users:
name
email
image
role - admin, user, mod
