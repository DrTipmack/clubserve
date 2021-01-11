/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookings = /* GraphQL */ `
  query GetBookings($id: ID!) {
    getBookings(id: $id) {
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
export const listBookingss = /* GraphQL */ `
  query ListBookingss(
    $filter: ModelBookingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sessionsID
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBookings = /* GraphQL */ `
  query SyncBookings(
    $filter: ModelBookingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sessionsID
        userId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSessions = /* GraphQL */ `
  query GetSessions($id: ID!) {
    getSessions(id: $id) {
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
export const listSessionss = /* GraphQL */ `
  query ListSessionss(
    $filter: ModelSessionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSessions = /* GraphQL */ `
  query SyncSessions(
    $filter: ModelSessionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getSessionType = /* GraphQL */ `
  query GetSessionType($id: ID!) {
    getSessionType(id: $id) {
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
export const listSessionTypes = /* GraphQL */ `
  query ListSessionTypes(
    $filter: ModelSessionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSessionTypes = /* GraphQL */ `
  query SyncSessionTypes(
    $filter: ModelSessionTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessionTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
