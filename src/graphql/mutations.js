/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookings = /* GraphQL */ `
  mutation CreateBookings(
    $input: CreateBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    createBookings(input: $input, condition: $condition) {
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
export const updateBookings = /* GraphQL */ `
  mutation UpdateBookings(
    $input: UpdateBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    updateBookings(input: $input, condition: $condition) {
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
export const deleteBookings = /* GraphQL */ `
  mutation DeleteBookings(
    $input: DeleteBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    deleteBookings(input: $input, condition: $condition) {
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
export const createSessions = /* GraphQL */ `
  mutation CreateSessions(
    $input: CreateSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    createSessions(input: $input, condition: $condition) {
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
export const updateSessions = /* GraphQL */ `
  mutation UpdateSessions(
    $input: UpdateSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    updateSessions(input: $input, condition: $condition) {
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
export const deleteSessions = /* GraphQL */ `
  mutation DeleteSessions(
    $input: DeleteSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    deleteSessions(input: $input, condition: $condition) {
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
export const createSessionType = /* GraphQL */ `
  mutation CreateSessionType(
    $input: CreateSessionTypeInput!
    $condition: ModelSessionTypeConditionInput
  ) {
    createSessionType(input: $input, condition: $condition) {
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
export const updateSessionType = /* GraphQL */ `
  mutation UpdateSessionType(
    $input: UpdateSessionTypeInput!
    $condition: ModelSessionTypeConditionInput
  ) {
    updateSessionType(input: $input, condition: $condition) {
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
export const deleteSessionType = /* GraphQL */ `
  mutation DeleteSessionType(
    $input: DeleteSessionTypeInput!
    $condition: ModelSessionTypeConditionInput
  ) {
    deleteSessionType(input: $input, condition: $condition) {
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
