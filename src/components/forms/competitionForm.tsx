'use client'
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner'

const pokemonSeries = [
    'Base Series', 'Neo Series', 'e-Card Series', 'EX Series', 
    'Diamond & Pearl Series', 'Platinum Series', 
    'HeartGold & SoulSilver Series', 'Black & White Series', 
    'XY Series', 'Sun & Moon Series', 'Sword & Shield Series', 
    'Scarlet & Violet Series'
]

export default function CompetitionForm() {
    // TODO: take form data and send to a db but for now just console log
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: { [key: string]: any } = Object.fromEntries(formData.entries());

        
        // Handling multiple checkboxes with the same name
        data.pokemonBadge = formData.getAll('pokemonBadge');
        if (data.pokemonBadge.length === 0) {
            alert('Please select at least one set');
            return;
        } if (data.pokemonBadge.length === 12) {
            toast.success(`Your a True Pokémon Master! 🏆`);
            return;
        }

        console.log(data);
    }

    return (
        <form id="survey-form" onSubmit={handleSubmit}>
            <h3 className="text-yellow-400">This month&apos;s prize: 4 packets</h3>

            <Image src="/prize2.webp" alt="pokemon" width={500} height={500} className="overflow-hidden transition-transform duration-300 ease-in-out transform hover-scale-3 size-24" />
            <p className="md:hidden text-sm text-yellow-400">Tap me</p>
            <p className="hidden md:inline-block text-sm text-yellow-400">Hover over me</p>

            <label className="form-title" id="name-label">Name</label>
            <input id="name" name="name" type="text" placeholder="Enter your name" required />

            <label className="form-title" id="email-label">Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" required />

            <label className="form-title" id="winner">Guess the Pokémon of the month to win!</label>
            <select name="pokemonGuess" id="dropdown" required>
                <option value="">Please select</option>
                <option value="Squirtle">Squirtle</option>
                <option value="Pikachu">Pikachu</option>
                <option value="Charmander">Charmander</option>
                <option value="Mewtwo">Mewtwo</option>
            </select>

            <label className="form-title" id="badges">What sets do you collect?</label>
            {pokemonSeries.map((series, index) => (
                <div className="checkbox-container" key={index}>
                    <input type="checkbox" name="pokemonBadge" id={`pokemonBadge${index}`} value={series.replace(/ /g, '')} />
                    <label htmlFor={`pokemonBadge${index}`}>{series}</label>
                </div>
            ))}

            <label className="form-title">What Pokémon would you like to see next!</label>
            <textarea name="comments" id="comments"></textarea>

            <div className="checkbox-container">
                <p>I can confirm that I am playing from the UK</p>
                <input type="checkbox" name="confirm" id="confirm" value="confirm" required />
            </div>

            <button id="submit" type="submit">Submit</button>
        </form>
    )
}
