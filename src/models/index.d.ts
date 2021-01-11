import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Bookings {
  readonly id: string;
  readonly sessionsID: string;
  readonly userId: string;
  constructor(init: ModelInit<Bookings>);
  static copyOf(source: Bookings, mutator: (draft: MutableModel<Bookings>) => MutableModel<Bookings> | void): Bookings;
}

export declare class Sessions {
  readonly id: string;
  readonly dateTime: string;
  readonly coachUserID: string;
  readonly completed?: boolean;
  readonly capacity: number;
  readonly currentBookings?: number;
  readonly sessiontypeID: string;
  readonly Bookings?: (Bookings | null)[];
  constructor(init: ModelInit<Sessions>);
  static copyOf(source: Sessions, mutator: (draft: MutableModel<Sessions>) => MutableModel<Sessions> | void): Sessions;
}

export declare class SessionType {
  readonly id: string;
  readonly sessionTypeID: string;
  readonly eligibleGroupIDs?: string[];
  readonly day: string;
  readonly Sessions?: (Sessions | null)[];
  readonly sessionName: string;
  constructor(init: ModelInit<SessionType>);
  static copyOf(source: SessionType, mutator: (draft: MutableModel<SessionType>) => MutableModel<SessionType> | void): SessionType;
}