// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bookings, Sessions, SessionType } = initSchema(schema);

export {
  Bookings,
  Sessions,
  SessionType
};