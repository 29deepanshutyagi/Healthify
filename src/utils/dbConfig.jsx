import {neon} from '@neondatabase/serverless'
import {drizzle} from 'drizzle-orm/neon-http'

import * as schema from './Schema.jsx'
 

const sql = neon(
    "postgresql://neondb_owner:cx9MTEeG5oun@ep-morning-cell-a5aygzgt.us-east-2.aws.neon.tech/neondb?sslmode=require"
)

export const db = drizzle(sql , {schema})
