import { defineDb, defineTable, column } from 'astro:db';

const Prospect = defineTable({
  columns: {
    email: column.text({ unique: true }),
    date: column.date()
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Prospect }
});
