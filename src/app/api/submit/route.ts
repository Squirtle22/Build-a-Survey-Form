import { NextResponse } from 'next/server';
import pool from '@/lib/database';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, pokemonGuess, pokemonBadge, comments, confirm } = body;

        // Convert `confirm` to a boolean
        const confirmBoolean = confirm === 'confirm';

        const badges = Array.isArray(pokemonBadge) ? pokemonBadge.join(',') : pokemonBadge;

        // Get the current month and year
        const now = new Date();
        const currentMonth = now.getMonth() + 1; // getMonth() returns 0-11
        const currentYear = now.getFullYear();

        // Check if an entry already exists for this email and month
        const checkQuery = `
            SELECT * FROM entries
            WHERE email = $1 AND EXTRACT(MONTH FROM created_at) = $2 AND EXTRACT(YEAR FROM created_at) = $3
        `;
        const checkValues = [email, currentMonth, currentYear];

        const checkResult = await pool.query(checkQuery, checkValues);

        if (checkResult.rows.length > 0) {
            return NextResponse.json({ message: 'You have already entered for this month.' }, { status: 400 });
        }

        // Insert the new entry
        const query = `
            INSERT INTO entries (name, email, pokemonGuess, pokemonBadge, comments, confirm, created_at)
            VALUES ($1, $2, $3, $4, $5, $6, NOW())
        `;
        const values = [name, email, pokemonGuess, badges, comments, confirmBoolean];

        await pool.query(query, values);

        return NextResponse.json({ message: 'Entry submitted successfully!' }, { status: 200 });
    } catch (err) {
        console.error('Database query error:', err);  // Log the error with more context
        return NextResponse.json({ message: 'Failed to submit entry' }, { status: 500 });
    }      
}
