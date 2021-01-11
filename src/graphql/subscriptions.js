/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookings = /* GraphQL */ `
  subscription OnCreateBookings {
    onCreateBookings {
      id
      sessionsID
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBookings = /* GraphQL */ `
  subscription OnUpdateBookings {
    onUpdateBookings {
      id
      sessionsID
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBookings = /* GraphQL */ `
  subscription OnDeleteBookings {
    onDeleteBookings {
      id
      sessionsID
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSessions = /* GraphQL */ `
  subscription OnCreateSessions {
    onCreateSessions {
      id
      dateTime
      coachUserID
      completed
      capacity
      currentBookings
      sessiontypeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateSessions = /* GraphQL */ `
  subscription OnUpdateSessions {
    onUpdateSessions {
      id
      dateTime
      coachUserID
      completed
      capacity
      currentBookings
      sessiontypeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteSessions = /* GraphQL */ `
  subscription OnDeleteSessions {
    onDeleteSessions {
      id
      dateTime
      coachUserID
      completed
      capacity
      currentBookings
      sessiontypeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateSessionType = /* GraphQL */ `
  subscription OnCreateSessionType {
    onCreateSessionType {
      id
      sessionTypeID
      eligibleGroupIDs
      day
      sessionName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Sessions {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateSessionType = /* GraphQL */ `
  subscription OnUpdateSessionType {
    onUpdateSessionType {
      id
      sessionTypeID
      eligibleGroupIDs
      day
      sessionName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Sessions {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteSessionType = /* GraphQL */ `
  subscription OnDeleteSessionType {
    onDeleteSessionType {
      id
      sessionTypeID
      eligibleGroupIDs
      day
      sessionName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Sessions {
        nextToken
        startedAt
      }
    }
  }
`;
