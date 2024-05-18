import { NextResponse } from 'next/server';
import pool from '@/lib/database';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, pokemonGuess, pokemonBadge, comments, confirm } = body;

        // Convert `confirm` to a boolean
        const confirmBoolean = confirm === 'confirm';

        const badges = Array.isArray(pokemonBadge) ? pokemonBadge.join(',') : pokemonBadge;

        const query = `INSERT INTO entries (name, email, pokemonGuess, pokemonBadge, comments, confirm) VALUES ($1, $2, $3, $4, $5, $6)`;
        const values = [name, email, pokemonGuess, badges, comments, confirmBoolean];

        await pool.query(query, values);
        return NextResponse.json({ message: 'Entry submitted successfully!' }, { status: 200 });
    } catch (err) {
        console.error('Database query error:', err);  // Log the error with more context
        return NextResponse.json({ message: 'Failed to submit entry' }, { status: 500 });
    }      
}
