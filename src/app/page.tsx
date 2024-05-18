import Image from "next/image";


export default function Home() {
  return (
    <div className="mobile-background md:background">
      <h1 id="title">Catch the pokemon if you can!</h1>
      <p className="header-title" id="description">Help us catch the pokemon of the month...</p>
      <form id="survey-form">
        <h3 className="text-yellow-400">This months price 4 packets</h3>
        <Image src="/prize2.webp" alt="pokemon" width={500} height={500} className="overflow-hidden transition-transform duration-300  ease-in-out transform hover-scale-3 size-24" />
        <p className="md:hidden text-sm text-yellow-400">Tap me</p>
        <p className="hidden md:inline-block text-sm text-yellow-400">Hover over me</p>
        <label className="form-title" id="name-label">Name</label>
        <input id="name" type="text" placeholder="Enter your name" required />
        <label className="form-title" id="email-label">Email</label>
        <input id="email" type="email" placeholder="Enter your email" required />
        <label className="form-title" id="number-label">Age</label>
        <input id="number" type="number" min="0" max="100" placeholder="Age"  />
        <label className="form-title" id="winner">Guess the pokemon of the month to win!</label>
        <select name="" id="dropdown">
          <option value="">Please select</option>
          <option value="">Squirtle</option>
          <option value="">Pikachu</option>
          <option value="">Charmander</option>
          <option value="">Meutwo</option>

        </select>

        <label className="form-title" id="badges">What set&apos;s do you collect?</label>
        <div className="checkbox-container bg-">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="boulderBadge" />
          <label>Base Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="cascadeBadge" />
          <label >Neo Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="thunderBadge" />
          <label >e-Card Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="rainbowBadge" />
          <label >EX Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="soulBadge" />
          <label >Diamond & Pearl Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="marshBadge" />
          <label >Platinum Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="volcanoBadge" />
          <label >HeartGold & SoulSilver Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="earthBadge" />
          <label >Black & White Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="zephyrBadge" />
          <label >XY Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="zephyrBadge" />
          <label >Sun & Moon Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="zephyrBadge" />
          <label >Sword & Shield Series</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="pokemonBadge" id="pokemonBadge" value="zephyrBadge" />
          <label >Scarlet & Violet Series</label>
        </div>

        <label className="form-title" >What pokemon would you like to see next!</label>
        <textarea name="comments" id="comments"></textarea>

        <button id="submit" type="submit">Submit</button>

      </form>
    </div>
  );
}
