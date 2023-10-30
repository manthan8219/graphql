// THIS FILE IS USED FOR DECLARING CONSTANTS WHICH ARE GONNA USE GLOABLLY

// using Pine as a logger for this project 
import pine from 'pine';

// exporting logger for global use
export const logger = pine()

export const mongo_url = process.env['MONGO_DB_URL'] || 'https://mongodb:27017'; 