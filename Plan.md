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

plan:

1. setup Express
2. create basic API endpoints(login, signup, session booking)
3. Middleware for Auth (users and roles) + testing
4. integrating with the front end
