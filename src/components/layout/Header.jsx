export default function Header({ navClickHandling }) {
  return (
    <div className="bg-gray-500 text-white py-4 px-10">
      <div>
        <h1 className="text-xl"> React Zoo App</h1>
      </div>
      <div>
        <ul>
          <li id="mammal" onClick={navClickHandling}><p>Mammals</p></li>
          <li id="bird" onClick={navClickHandling}><p>Birds</p></li>
          <li id="fish" onClick={navClickHandling}><p>Fishes</p></li>
          <li id="insect" onClick={navClickHandling}><p>Insects</p></li>
        </ul>
      </div>
    </div>
  );
}
