"Watch" state design
--------------------

> Root holds all common state and passes it down to components

watchState {
  user
  userBeingWatched
  activeDate
}

> Support the following URLS

/watch

/watch/by-day
/watch/by-week
/watch/by-month

/watch/by-day/yyyy-mm-dd
/watch/by-week/yyyy-mm-dd (week starting day)
/watch/by-month/yyyy-mm-dd (month starting day)

> To Decide

* who holds mode state (browse/edit/create)
* do the ByXXX components know the queries, or are they passed in

> Ideas
* abstract out the fetch layer: useFuQuery('queryName') ??


Legacy Notes
------------

By day page will have 3 modes

* `browse mode`: for anybody that has read rights for the watchee)
* `edit mode`: edit existing entry
* `create mode`: add new entry

# Browse mode

* user enters /watch/by-day page for particular watchee
* on initial render
  - hit back end and get last weight entry for that user
  - set day to be that day
* get corresponding tracked week if it exists
  - display it if it exists, or message that no tracking on for that week

# Edit Mode

* if logged in user is same as watchee, show "edit" button when on a day
* when edit button hit, go into edit mode

# Create Mode

* if logged in user is same as watchee, show "enter weight" button when on a day
* be default will be for today, but allow user to select a different date



